
import { Button } from "@/components/ui/button"
import SimpleTable from "@/components/ui/table-app"
import { PlusCircleIcon } from "lucide-react"
import { Link } from "react-router-dom"




export function DashboardPage() {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-sm">
            Overview of your recent payments
          </p>
        </div>

        <div className="rounded-2xl border bg-background shadow-sm">
            <Button variant="outline" className="ml-4 mt-4">
            <PlusCircleIcon className="mr-2" />
                <Link to="/create-product">Add Product</Link>  
            </Button>
            <SimpleTable />
        </div>

      </div>
    </main>
  )
}