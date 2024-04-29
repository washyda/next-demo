'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
export default function Page() {
    const pathname = usePathname();
    return (
        <>
            <h4>{ pathname }</h4>
            <div>
                About
            </div>
            <Link href={'/'}>首页</Link>
        </>
    )
}