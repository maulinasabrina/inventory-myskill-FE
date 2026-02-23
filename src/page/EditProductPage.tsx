import { useEffect, useState } from "react"
import ProductForm from "./ProductForm"

import { useParams } from "react-router-dom"




export default function EditProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState<{
        id: number
        title: string
        description: string
        image?: string
    } | null>(null)
    useEffect(() => {
    const fetchProduct = async () => {
        try {
        const response = await fetch(
            `http://localhost:8000/api/products/${id}`
        )

        if (!response.ok) {
            throw new Error("Failed to fetch product")
        }

        const data = await response.json()
        setProduct(data)
        } catch (error) {
        console.error(error)
        }
    }

    fetchProduct()
    }, [id])


  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Product
          </h1>
          <p className="text-muted-foreground text-sm">
            Update product details
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border bg-background shadow-sm p-6">
            {product && (
                <ProductForm mode="edit" initialData={product} />
            )}
        </div>

      </div>
    </main>
  )
}