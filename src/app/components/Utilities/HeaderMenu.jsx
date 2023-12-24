'use client'

import { House } from "@phosphor-icons/react"
import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { useRouter } from "next/navigation"

const HeaderMenu = ({ title }) => {
    const router = useRouter()

    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }
    return (
        <div>
            <div className="flex justify-between items-center py-6">
                <button onClick={handleBack} className=" text-color-accent"><ArrowSquareLeft size={35}/></button>
                <h3 className="text-center text-2xl font-bold text-color-accent">{title}</h3>
                <Link href='/' className=" text-color-accent"><House size={30}/></Link>
            </div>
        </div>
    )
}

export default HeaderMenu