import CreatePostForm from "./CreateProductForm"


export default function CreateProductPage() {
  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create New Product
          </h1>
          <p className="text-muted-foreground text-sm">
            Add a new product to your inventory
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border bg-background shadow-sm p-6">
          <CreatePostForm />
        </div>

      </div>
    </main>
  )
}