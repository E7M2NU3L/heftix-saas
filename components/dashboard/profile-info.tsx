import ShowProfileDialog from "./show-profile-dialog"
import { useState } from "react"
import { FaMoneyBill } from "react-icons/fa"
import Link from "next/link"
import { LogOutIcon } from "lucide-react"
import { Button } from "../ui/button"

export function ProfileInfo() {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <main className="grid grid-cols-1 place-content-start">
        <ShowProfileDialog open={open} setOpen={setOpen} />
        <Button asChild size={"sm"} variant={"outline"} className="w-full flex flex-row items-center justify-start">
            <Link href={"/billing"}>
                <FaMoneyBill className="mr-2 h-4 w-4" />
                Billing
            </Link>
        </Button>
        <Button onClick={() => {
            console.log(open);
            setOpen(false);
        }} variant={"destructive"} size={"sm"} className="w-full flex flex-row items-center justify-start">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
        </Button>
    </main>
  )
}
