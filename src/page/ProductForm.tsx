import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field" // sesuaikan path
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface ProductFormProps {
  mode: "create" | "edit"
  initialData?: {
    id?: number
    title: string
    description: string
    image?: string
  }
}

export default function ProductForm({ mode, initialData }: ProductFormProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // state untuk form
  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    image: null as File | null,
  })

  const [preview, setPreview] = useState<string | null>(
    initialData?.image
      ? `http://localhost:8000/storage/${initialData.image}`
      : null
  )
  const [errors, setErrors] = useState<{
    title?: string
    description?: string
    image?: string
  }>({})

 
  //untuk handle input image biar bisa muncul preview setelah input file
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "File must be an image" }))
      return
    }

    setForm((prev) => ({ ...prev, image: file }))
    setPreview(URL.createObjectURL(file))
    setErrors((prev) => ({ ...prev, image: undefined }))
  }


  //untuk handle submit form dengan validasi sederhana
  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true)

    e.preventDefault()

    const newErrors: typeof errors = {}

    if (!form.title.trim()) newErrors.title = "Title is required"
    if (!form.description.trim()) newErrors.description = "Description is required"
    if (mode === "create" && !form.image) {
      alert("Image is required")
      return
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

     const addProducts = async () => {
     try {
          const formData = new FormData()
          formData.append("title", form.title)
          formData.append("description", form.description)
          formData.append("image", form.image!)
          if (mode === "edit") {
            formData.append("_method", "PUT")
          }

          const response = await fetch(
            
             mode === "create"
              ? "http://localhost:8000/api/products"
              : `http://localhost:8000/api/products/${initialData?.id}`,
            {
              method: mode === "create" ? "POST" : "POST", 
              body: formData,
            }
          )

          if (!response.ok) {
            throw new Error("Failed to create product")
          }

          const data = await response.json()
          console.log("Product created:", data)

          
          setForm({
            title: "",
            description: "",
            image: null,
          })
          setPreview(null)
          toast.success("Product " + (mode === "create" ? "created" : "updated") + " successfully 🎉")
        

           setTimeout(() => {
              navigate("/")
            }, 1200)
      } catch (error) {
          if (error instanceof Error) {
           toast.error("Failed to " + (mode === "create" ? "create" : "update") + " product: " + error.message)
          }
      } finally {
        setLoading(false)
      }
     }
      
      addProducts();

    // contoh kirim ke backend
    // eslint-disable-next-line react-hooks/rules-of-hooks



   
  }

  

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <FieldSet>

        <FieldGroup>

          {/* TITLE */}
          <Field>
            <FieldContent>
              <FieldTitle>Title</FieldTitle>
              <Input
                placeholder="Enter title..."
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              />
              <FieldDescription>
                This will be the name of your product.
              </FieldDescription>
              {errors.title && (
                <FieldError>{errors.title}</FieldError>
              )}
            </FieldContent>
          </Field>

          {/* DESCRIPTION */}
          <Field>
            <FieldContent>
              <FieldTitle>Description</FieldTitle>
              <Textarea
                placeholder="Write your description..."
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              />
              <FieldDescription>
                Provide more detailed information.
              </FieldDescription>
              {errors.description && (
                <FieldError>{errors.description}</FieldError>
              )}
            </FieldContent>
          </Field>

          {/* IMAGE UPLOAD */}
          <Field>
            <FieldContent>
              <FieldTitle>Upload Image</FieldTitle>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <FieldDescription>
                Only image files are allowed.
              </FieldDescription>
              {errors.image && (
                <FieldError>{errors.image}</FieldError>
              )}

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-3 h-40 rounded-md object-cover"
                />
              )}
            </FieldContent>
          </Field>

        </FieldGroup>

      </FieldSet>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? mode === "create"
            ? "Creating..."
            : "Updating..."
          : mode === "create"
          ? "Create Product"
          : "Update Product"}
      </Button>
    </form>
  )
}