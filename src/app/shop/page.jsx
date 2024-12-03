'use client'
import Navbar from "../_components/navbar/Navbar"
import Image from "next/image"
import VIP from "./../image/vip.png"
import MVP from "./../image/mvp.png"
import MVP1 from "./../image/mvp+.png"
import MSQ from "./../image/msq.png"
import MSQ1 from "./../image/msq+.png"
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Footer from "../_components/footer/Footer"
import { useSession } from "next-auth/react"

const Shop = () => {
    const { data } = useSession()
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-[200px]">
                <div className="hidden sm:hidden md:hidden lg:block">
                    <div className="flex flex-col justify-center items-center">
                        <div className="grid grid-cols-5 w-full lg:grid-cols-5">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-32 flex justify-center items-center ">
                                    <h1 className="text-xl text-white">ความสามารถ</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-b">
                                <div className="h-32 flex justify-center flex-col items-center">
                                    <Image src={VIP} alt="vip" width={200} className="rounded-sm" />
                                    <h1 className="text-xl">ยศ VIP</h1>
                                    <h1>200 MSQ</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-b">
                                <div className="h-32 flex justify-center flex-col items-center">
                                    <Image src={MVP} alt="vip" width={200} className="rounded-sm" />
                                    <h1 className="text-xl">ยศ MVP</h1>
                                    <h1>200 MSQ</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-b">
                                <div className="h-32 flex justify-center flex-col items-center">
                                    <Image src={MVP1} alt="vip" width={220} className="rounded-sm" />
                                    <h1 className="text-xl">ยศ MVP+</h1>
                                    <h1>200 MSQ</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-b">
                                <div className="h-32 flex justify-center flex-col items-center">
                                    <Image src={MSQ1} alt="vip" width={220} className="rounded-sm" />
                                    <h1 className="text-xl">ยศ MSQ+</h1>
                                    <h1>200 MSQ</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/sethome</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการเซ็ตบ้าน</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+3</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 text-white w-10 shadow-lg h-10 rounded-[50%] flex items-center justify-center">+5</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 text-white w-10 shadow-lg h-10 rounded-[50%] flex items-center justify-center">+7</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 text-white w-10 shadow-lg h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">Protect Limit</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดวางโพรเทค</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center">+6</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+12</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+15</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/tpahere</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ดึงผู้เล่นมาหาเรา</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/ah</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการวางขาย</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center">+5</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+7</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center">+15</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/back</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/nick</h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> เปลี่ยนชื่อเล่น</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/timber </h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> ตัดต้นไม้ล้มทั้งต้น</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white">/tp </h1>
                                    <h1 className="text-sm text-white"><span className="text-red-700">อธิบาย:</span> เทเลพอร์ตไปหาผู้เล่น</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-cyan-400 shadow-lg text-white w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-yellow-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-orange-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l">
                                <div className="h-16 flex justify-center items-center">
                                    <h1 className="text-xl bg-green-400 shadow-lg w-10 text-white h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 w-full">
                            <div className="bg-[#87b925] w-full p-6">
                                <div className="h-16 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-white"></h1>
                                    <h1 className="text-xl text-white"></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-t">
                                <div className="h-16 flex justify-center items-center">
                                    {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-full py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-t">
                                <div className="h-16 flex justify-center items-center">
                                    {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-full py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-t">
                                <div className="h-16 flex justify-center items-center">
                                    {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-full py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                                </div>
                            </div>
                            <div className="bg-white w-full p-6 border-l border-t">
                                <div className="h-16 flex justify-center items-center">
                                    {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-full py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block sm:block md:block lg:hidden">
                    <div className="grid grid-rows-1 w-full lg:grid-cols-5">
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="h-full flex justify-center flex-col items-center">
                                <Image src={VIP} alt="vip" width={200} className="rounded-sm" />
                                <h1 className="text-xl">ยศ VIP</h1>
                                <h1>200 MSQ</h1>
                            </div>
                        </div>
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="mb-4">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/sethome</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการเซ็ตบ้าน</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+3</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">Protect Limit</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดวางโพรเทค</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+6</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tpahere</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ดึงผู้เล่นมาหาเรา</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/ah</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการวางขาย</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+5</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/back</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/nick</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/timber</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tp</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-cyan-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-[50%] py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 w-full lg:grid-cols-5 mt-4">
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="h-full flex justify-center flex-col items-center">
                                <Image src={MVP} alt="mvp" width={200} className="rounded-sm" />
                                <h1 className="text-xl">ยศ MVP</h1>
                                <h1>200 MSQ</h1>
                            </div>
                        </div>
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="mb-4">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/sethome</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการเซ็ตบ้าน</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+5</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">Protect Limit</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดวางโพรเทค</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tpahere</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ดึงผู้เล่นมาหาเรา</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/ah</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการวางขาย</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+7</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/back</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/nick</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/timber</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tp</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-yellow-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-[50%] py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 w-full lg:grid-cols-5 mt-4">
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="h-full flex justify-center flex-col items-center">
                                <Image src={MVP1} alt="mvp+" width={200} className="rounded-sm" />
                                <h1 className="text-xl">ยศ MVP+</h1>
                                <h1>200 MSQ</h1>
                            </div>
                        </div>
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="mb-4">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/sethome</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการเซ็ตบ้าน</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+7</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">Protect Limit</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดวางโพรเทค</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+12</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tpahere</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ดึงผู้เล่นมาหาเรา</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/ah</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการวางขาย</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/back</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/nick</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/timber</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tp</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-orange-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center opacity-20"><RxCross2 /></h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-[50%] py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 w-full lg:grid-cols-5 mt-4">
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="h-full flex justify-center flex-col items-center">
                                <Image src={MSQ1} alt="msq+" width={200} className="rounded-sm" />
                                <h1 className="text-xl">ยศ MSQ+</h1>
                                <h1>200 MSQ</h1>
                            </div>
                        </div>
                        <div className="bg-white w-full p-6 border-l border-b">
                            <div className="mb-4">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/sethome</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการเซ็ตบ้าน</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+9</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">Protect Limit</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดวางโพรเทค</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+15</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tpahere</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ดึงผู้เล่นมาหาเรา</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/ah</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ขีดจำกัดการวางขาย</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center">+15</h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/back</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/nick</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/timber</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="h-full flex justify-center flex-col items-center">
                                    <h1 className="text-xl">/tp</h1>
                                    <h1 className="text-sm text-black mb-2"><span className="text-red-700">อธิบาย:</span> ย้อนกลับจุดที่มาล่าสุด</h1>
                                    <h1 className="text-xl bg-green-400 text-white shadow-lg w-10 h-10 rounded-[50%] flex items-center justify-center"><FaCheck /></h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                {data && data?.user ? <><button className="bg-green-500 text-white w-full py-2 shadow-lg rounded-md hover:shadow-green-500/50"><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></> : <><button className="bg-green-500/50 text-white w-[50%] py-2 shadow-lg rounded-md" disabled><span className="flex items-center justify-center"><FaCartShopping />&nbsp;ซื้อสินค้า</span></button></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop