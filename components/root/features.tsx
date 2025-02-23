import React from "react";
import type { ReactElement } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBell,
  IconBrandGuardian,
  IconCalendar,
  IconClipboardCopy,
  IconFile,
  IconLock,
  IconUser,
} from "@tabler/icons-react";
import { Network } from "lucide-react";

export default function Features() {
  return (
    <main className="max-w-7xl py-20 mx-auto flex flex-col">
      <section className="flex flex-col gap-4 items-center justify-center max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Discover the Impact of Heftix on Psychiatric Practices and Patient Care
        </h1>
        <p className="text-sm font-medium text-gray-700 tracking-tight leading-tight mb-7">
        Heftix has transformed the way psychiatrists manage their practices, leading to improved patient outcomes. With a user-friendly interface and powerful features, it&apos;s no wonder that more professionals are choosing Heftix.
        </p>

        <main className="flex flex-row gap-4 items-center flex-wrap">
          <section className="flex flex-row gap-2 items-center">
            <div className="p-2 rounded-full bg-violet-500/20 text-purple-800 font-medium">
              <IconBrandGuardian className="h-4 w-4" />
            </div>
            <h1 className="text-sm font-semibold tracking-tight text-foreground">24/7 Support and Assistance</h1>
          </section>

          <section className="flex flex-row gap-2 items-center">
            <div className="p-2 rounded-full bg-violet-500/20 text-purple-800 font-medium">
              <IconClipboardCopy className="h-4 w-4" />
            </div>
            <h1 className="text-sm font-semibold tracking-tight text-foreground">Effortless Patient Management and Insights</h1>
          </section>

          <section className="flex flex-row gap-2 items-center">    
            <div className="p-2 rounded-full bg-violet-500/20 text-purple-800 font-medium">
              <Network className="h-4 w-4" />
            </div>
            <h1 className="text-sm font-semibold tracking-tight text-foreground">Automations and Integrations</h1>
          </section>
        </main>
      </section>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
const HeaderComponent = ({ icon, bgColor } : {
  icon : ReactElement,
  bgColor : string
}) => (
  <div
    className={`flex items-center justify-center w-12 h-12 rounded-full ${bgColor}`}
  >
    {icon}
  </div>
);

const items = [
  {
    title: "Automated Report Generation",
    description: "Generate detailed reports effortlessly with automation.",
    header: (
      <HeaderComponent
        icon={<IconFile className="h-6 w-6 text-white" />}
        bgColor="bg-gradient-to-r from-blue-500 to-blue-400"
      />
    ),
    icon: <IconFile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Email and Push Notifications",
    description:
      "Keep clients and teams updated with real-time notifications and reminders.",
    header: (
      <HeaderComponent
        icon={<IconBell className="h-6 w-6 text-white" />}
        bgColor="bg-gradient-to-r from-green-500 to-green-400"
      />
    ),
    icon: <IconBell className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Easily schedule, manage, and track appointments with automated reminders.",
    header: (
      <HeaderComponent
        icon={<IconCalendar className="h-6 w-6 text-white" />}
        bgColor="bg-gradient-to-r from-purple-500 to-purple-400"
      />
    ),
    icon: <IconCalendar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Patient Management",
    description:
      "Organize patient information and gain actionable insights for better care.",
    header: (
      <HeaderComponent
        icon={<IconUser className="h-6 w-6 text-white" />}
        bgColor="bg-gradient-to-r from-teal-500 to-teal-400"
      />
    ),
    icon: <IconUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Secure Data Storage & Invoicing",
    description:
      "Ensure secure data storage and manage invoicing efficiently in one platform.",
    header: (
      <HeaderComponent
        icon={<IconLock className="h-6 w-6 text-white" />}
        bgColor="bg-gradient-to-r from-red-500 to-red-400"
      />
    ),
    icon: <IconLock className="h-4 w-4 text-neutral-500" />,
  },
];
