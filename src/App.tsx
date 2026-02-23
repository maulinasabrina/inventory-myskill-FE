import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/ui/app-sidebar"
import { DashboardPage } from "./page/dashboard-page"
import { Route, Routes } from "react-router-dom"
import CreateProductPage from "./page/CreateProductPage"
import { Toaster } from "sonner"
import EditProductPage from "./page/EditProductPage"


// import { Route, Routes } from "react-router-dom"
// import { CreateProductForm } from "./page/CreateProductForm"

function App() {
  return (
    <SidebarProvider>
      
      <AppSidebar />
      <SidebarInset>
        <Toaster richColors position="top-right" />
         <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App