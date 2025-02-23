
import Image from "next/image";
  
  import { BentoCard, BentoGrid } from "@/components/features/bento-grid";
import { BellIcon, CalendarIcon, FileInputIcon, FileTextIcon, GlobeIcon } from "lucide-react";
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Patient Report Generation",
      description: "Automatically generate detailed patient reports based on session data.",
      href: "/",
      cta: "Learn more",
      background: <Image alt="" width={348} height={240} src="https://cdn.dribbble.com/userupload/13878402/file/original-c2d978d51282bc68112c26e0a492dd62.png?resize=752x&vertical=center" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: FileInputIcon,
      name: "AI-Powered Insights",
      description: "Leverage AI to gain actionable insights and improve patient outcomes.",
      href: "/",
      cta: "Learn more",
      background: <Image alt="" width={348} height={240} src="https://cdn.dribbble.com/userupload/15750896/file/original-df0ccd543af3ef0e703ee2b6880d958a.png?resize=752x&vertical=center" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual Support",
      description: "Supports multiple languages to cater to a global patient base.",
      href: "/",
      cta: "Learn more",
      background: <Image alt="" width={348} height={240} src="https://cdn.dribbble.com/userupload/15847413/file/original-b9de2bfdaaa02917792886285e2912f6.png?resize=752x&vertical=center" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Appointment Scheduling",
      description: "Manage patient appointments and sync them with your calendar.",
      href: "/",
      cta: "Learn more",
      background: <Image alt="" width={348} height={240} src="https://cdn.dribbble.com/userupload/8399196/file/original-f8e8b14fc45fcda1c783f3331f9087db.png?resize=752x&vertical=center" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Reminders & Notifications",
      description: "Get notifications for upcoming appointments, new reports, and follow-ups.",
      href: "/",
      cta: "Learn more",
      background: <Image width={348} height={240} alt="" src="https://cdn.dribbble.com/userupload/16257829/file/original-cd7d265456814a706e4ef4c43a69e3d9.png?resize=752x&vertical=center" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export function FeaturesBento() {
    return (
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  