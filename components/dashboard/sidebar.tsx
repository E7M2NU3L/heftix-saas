import { BarChart, Calendar, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { ProfileInfo } from "./profile-info"
import { IconHealthRecognition } from "@tabler/icons-react"

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/overview",
    icon: BarChart,
  },  
]

const main = [{
    title: "Patients",
    url: "/patients",
    icon: IconHealthRecognition,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: Calendar,
  },]

const invoiceLinks = [
    {
        title: "Invoice",
        url: "/invoice",
        icon: Printer,
    },
]

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
            <Link href={"/"} className='flex flex-row items-center gap-3'>
                <Image src={"/logo.png"} alt='logo' className='object-contain' width={36} height={36} />
                <h1 className='md:block hidden text-2xl text-foreground font-medium tracking-tighter'>
                    Hef<span className="text-green-500">tix</span>
                </h1>
            </Link>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Insights</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Automations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {invoiceLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ProfileInfo />
      </SidebarFooter>
    </Sidebar>
  )
}
