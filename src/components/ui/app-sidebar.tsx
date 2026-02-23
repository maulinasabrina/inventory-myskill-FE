import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function AppSidebar() {
  return (
    <>
      <Sidebar className="bg-[#F5EFE6] text-black border-r border-black/20 shadow-sm">

        {/* Branding Top */}
        <div className="px-6 py-6 border-b border-black/10">
          <h1 className="font-italianno text-2xl tracking-wide">
            Goodwill Avenue
          </h1>
          <p className="font-space text-xs uppercase tracking-[0.3em] opacity-60">
            The Organized Chaos
          </p>
        </div>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-space text-[10px] uppercase tracking-widest opacity-50 px-6 pt-6">
              The Archive Index
            </SidebarGroupLabel>

            <SidebarMenu className="px-4 pt-4 space-y-2">

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="group rounded-none border-l-2 border-transparent hover:border-black transition-all duration-300"
                >
                  <Link
                    to="/"
                    className="font-playfair text-base tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="group rounded-none border-l-2 border-transparent hover:border-black transition-all duration-300"
                >
                  <Link
                    to="/create-product"
                    className="font-playfair text-base tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Add New Treasure +
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-black/10 px-6 py-4">
          <p className="font-space text-[10px] opacity-40 tracking-widest">
            ARCHIVED SINCE 2026
          </p>
        </SidebarFooter>

      </Sidebar>

      <SidebarTrigger className="text-black" />
    </>
  )
}