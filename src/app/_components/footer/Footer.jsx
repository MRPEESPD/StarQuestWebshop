import Link from "next/link"
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="mt-[100px] px-20 mb-[20px] text-white">
                <div className="flex justify-between items-center">
                <h1>Copyright StarQuest all rights reserved</h1>
                <Link href='/' className="hover:scale-110 duration-200 transition-all"><span className="flex items-center"><FaDiscord />&nbsp;ติดต่อแอดมิน</span></Link>
                </div>
            </div>
        </>
    )
}
export default Footer