import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { MdDashboard } from "react-icons/md";
import { FaImages } from "react-icons/fa";

const AdminNavbar = () => {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup className="p-6">
                        <SidebarGroupLabel className="flex justify-center"><span className="text-xl font-bold text-black">จัดการหลังบ้าน</span></SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="mt-4">
                                        <Link href='/admin'>
                                            <span className="text-lg flex items-center"><MdDashboard />&nbsp;แดชบอร์ด</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    <SidebarMenuButton asChild>
                                        <Link href='/admin/slide'>
                                            <span className="text-lg flex items-center"><FaImages />&nbsp;จัดการภาพสไลด์</span>
                                        </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}
export default AdminNavbar