import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminNavbar from "../_components/navbar/AdminNavbar";

export const metadata = {
    title: 'StarQuest Backend',
    description: 'StarQuest',
};

export default function AdminLayout({ children }) {
    return (
        <>
            <SidebarProvider>
                <AdminNavbar />
                <main className="w-full">
                    <span className="text-white"><SidebarTrigger /></span>
                    <div className="p-20">
                        {children}
                    </div>
                </main>

            </SidebarProvider>
        </>
    );
}
