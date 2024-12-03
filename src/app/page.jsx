'use client'
import React, { useState, useEffect } from "react"
import Navbar from "./_components/navbar/Navbar"
import Image from "next/image"
import Logo from '@/app/image/1.png'
import Shop from '@/app/image/2.png'
import Topup from '@/app/image/3.png'
import background from '@/app/image/background.png'
import { FaHome } from "react-icons/fa";
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "./_components/footer/Footer"
import { Http } from "./utils/Http"

const page = () => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await Http.get('/api/slideImage')
      setInfo(response.data.slideInfo)
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-[100px]'>
        <div className='flex justify-center items-center'>
          <Image src={Logo} alt='logo' className='hover:scale-110 duration-200 transition-all' />
        </div>
        <div className="mb-6">
          <div className="flex gap-2">
            <h1 className="text-[1.5rem] text-[#87a525]"><FaHome /></h1>
            <div>
              <h1 className="text-[#87a525] text-[1.2rem]">หน้าหลัก</h1>
              <span className="text-white">ยินดีต้อนรับเข้าสู่ StarQuest</span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 sm:grid-rows-1">
          <Link href='/shop'>
            <div className="bg-[rgb(40,40,40)]/[0.36] py-0 px-10 border border-gray-50/50 rounded-lg text-white cursor-pointer hover:scale-[102%] duration-200 transition-all shadow">
              <div className="flex justify-between items-center h-[100px] lg:h-[150px] md:h-[120px]">
                <div>
                  <h1 className="text-[20px] lg:text-xl md:text-xl sm:text-md">ร้านค้า</h1>
                  <h1 className="text-gray-50/50 md:text-[16px] text-sm">ดูสินค้าทั้งหมด</h1>
                </div>
                <div className="">
                  <Image src={Shop} alt='shop' width={200} height={200} className="w-[82px] h-[70px] lg:w-[120px] lg:h-[100px]" />
                </div>
              </div>
            </div>
          </Link>
          <Link href='/topup'>
            <div className="bg-[rgb(40,40,40)]/[0.36] py-0 px-10 border border-gray-50/50 rounded-lg text-white cursor-pointer hover:scale-[102%] duration-200 transition-all shadow">
              <div className="flex justify-between items-center h-[100px] lg:h-[150px] md:h-[120px]">
                <div>
                  <h1 className="text-[20px] lg:text-xl md:text-xl sm:text-md">เติมเงิน</h1>
                  <h1 className="text-gray-50/50 md:text-[16px] text-sm">เติมเงินเพื่อซื้อสินค้า</h1>
                </div>
                <div className="">
                <Image src={Topup} alt='shop' width={200} height={200} className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-12">
          <Carousel className="w-full">
            <CarouselContent>
              {info && info.length > 0 ? (
                <>
                  {info.map((item, index) => {
                    return <CarouselItem key={item.id}>
                      <div>
                        <Image src={item.image} alt="background" width={1920} height={800} className="rounded-lg w-full"></Image>
                      </div>
                    </CarouselItem>
                  })}
                </>
              ) : ""}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default page