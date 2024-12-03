'use client'
import { FaSignInAlt, FaUser, FaCoins } from "react-icons/fa";
import Link from 'next/link';
import { FaHome, FaCreditCard } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaStore } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import toast from "react-hot-toast";
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Http } from "@/app/utils/Http";

const Navbar = () => {
    const { data } = useSession()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(true)


    const [pointData, setPointData] = useState("")

    const realname = data?.user.realname

    const currentPath = usePathname()
    const isActive = (path) => {
        return currentPath === path
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!username) {
            return toast.error("กรุณาอย่าเว้นช่องว่าง !!")
        }

        if (!password) {
            return toast.error("กรุณาอย่าเว้นช่องว่าง !!")
        }

        try {
            await signIn("credentials", {
                username: username,
                password: password,
                redirect: false
            }).then((res) => {
                if (!res.ok) {
                    return toast.error("ชื่อตัวละครหรือรหัสผ่านไม่ถูกต้อง !!")
                }

                return toast.success("เข้าสู่ระบบสำเร็จ !!")

            })

        } catch (error) {
            console.log(error)
        }

    }

    const currentUser = async () => {
        try {
            const res = await Http.post('api/currentUser', {
                realname: realname
            });
            setPointData(res.data.userInfo.point)
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    }

    useEffect(() => {
        currentUser()
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [loading])


    return (
        <>
            <div className='top-navbar fixed w-full top-0 z-50'>
                <div className='flex flex-col sm:flex-row justify-between items-center container mx-auto p-6'>
                    <div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className="grid sm:gird lg:flex md:flex">
                            <Link href='/' className={isActive('/') ? "text-[14px] md:text-md sm:text-md lg:text-md color-btn py-1.5 px-3 text-white rounded-md" : "text-[14px] md:text-md sm:text-md lg:text-md py-1.5 px-3 text-white rounded-md"}><span className="flex items-center"><FaHome />&nbsp;<span className="mt-[1.5px]">หน้าหลัก</span></span></Link>
                            <Link href='/shop' className={isActive('/shop') ? "text-[14px] md:text-md sm:text-md lg:text-md color-btn py-1.5 px-3 text-white rounded-md" : "text-[14px] md:text-md sm:text-md lg:text-md py-1.5 px-3 text-white rounded-md"}><span className="flex items-center"><FaStore />&nbsp;<span className="mt-[1.5px]">ร้านค้า</span></span></Link>
                            <Link href='/topup' className={isActive('/topup') ? "text-[14px] md:text-md sm:text-md lg:text-md color-btn py-1.5 px-3 text-white rounded-md" : "text-[14px] md:text-md sm:text-md lg:text-md py-1.5 px-3 text-white rounded-md"}><span className="flex items-center"><FaCreditCard />&nbsp;<span className="mt-[1.5px]">เติมเงิน</span></span></Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        {loading ?
                            <>
                                <Skeleton className="w-[100px] h-[25px] py-1.5 rounded-full" />
                            </>
                            :
                            <>
                                {data && data?.user ?
                                    <>
                                        <DropdownMenu asChild>
                                            <DropdownMenuTrigger asChild><button className="text-white outline-none bg-[#87a525] py-1.5 px-3 rounded-md flex items-center"><FaUser />&nbsp;<span className="mt-[3px]">โปรไฟล์</span></button></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>{data.user.realname}</DropdownMenuItem>
                                                <DropdownMenuItem><span className="flex items-center">{pointData} พ้อยต์</span></DropdownMenuItem>
                                                <DropdownMenuItem><div onClick={() => signOut({ callbackUrl: '/' })} className="cursor-pointer">ออกจากระบบ</div></DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </> :
                                    <>
                                        <Dialog>
                                            <DialogTrigger><span className='text-[14px] md:text-md sm:text-md lg:text-md mt-2 sm:mt-0 md:mt-0 lg-mt-0 flex items-center bg-[#87a525] py-1.5 px-3 text-white rounded-md transition-all duration-200 hover:bg-[#4a7c2a]'><FaSignInAlt />&nbsp;เข้าสู่ระบบ</span></DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>เข้าสู่ระบบ</DialogTitle>
                                                    <DialogDescription asChild>
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="mt-4">
                                                                <label>ชื่อตัวละคร</label>
                                                                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className='border w-full py-1.5 rounded-md px-3 outline-none focus:border-[#87a525]' />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label>รหัสผ่าน</label>
                                                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className='border w-full py-1.5 rounded-md px-3 outline-none focus:border-[#87a525]' />
                                                            </div>
                                                            <div className="mt-6">
                                                                <button className="bg-[#87a525] py-1.5 rounded-md w-full text-white">เข้าสู่ระบบ</button>
                                                            </div>
                                                            <div className="mt-4">
                                                                <div className="border border-black p-3 rounded-md flex flex-col items-center justify-center bg-black">
                                                                    <h1 className="text-sm text-white">You need to register as a member of our server.</h1>
                                                                    <h1 className="text-sm"><span className="text-[#f0212b]">อธิบาย:</span> <span className="text-white">สมัครสมาชิกได้ในเซิร์ฟเวอร์</span></h1>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar