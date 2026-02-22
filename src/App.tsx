import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/ui/app-sidebar"
import { DashboardPage } from "./page/dashboard-page"
import { Route, Routes } from "react-router-dom"
import { CreateProductForm } from "./page/CreateProductForm"
// import { Route, Routes } from "react-router-dom"
// import { CreateProductForm } from "./page/CreateProductForm"

function App() {
  return (
    <SidebarProvider>
      
      <AppSidebar />
      <SidebarInset>
         <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create-product" element={<CreateProductForm />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App