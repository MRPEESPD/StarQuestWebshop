import Link from "next/link"
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="mt-[100px] px-20 mb-[20px] text-white">
                <div className="grid lg:justify-between items-center lg:flex justify-center">
                <h1 className="text-[12px] lg:text-lg">Copyright StarQuest all rights reserved</h1>
                <Link href='/' className="hover:scale-105 duration-200 transition-all"><span className="flex justify-center items-center text-[12px] lg:text-lg"><FaDiscord />&nbsp;ติดต่อแอดมิน</span></Link>
                </div>
            </div>
        </>
    )
}
export default Footer