"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CreateProductForm() {
  const [form, setForm] = React.useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  })

  


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Product created:", form)

    // nanti bisa diganti API call
  }

  return (
    <div className="max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border bg-background p-6 shadow-sm"
      >
        <div>
          <h2 className="text-xl font-semibold">Create Product</h2>
          <p className="text-sm text-muted-foreground">
            Add a new product to your inventory
          </p>
        </div>

        {/* Product Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Product Title
          </label>
          <Input
            name="name"
            placeholder="Macbook Pro M3"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

       


        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Product details..."
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  )
}