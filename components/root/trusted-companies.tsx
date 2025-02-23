import { cn } from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "TechCare",
    logo: "/acme.png",
  },
  {
    name: "MindWell",
    logo: "/apex.png",
  },
  {
    name: "HealthTech",
    logo: "/celestial.png",
  },
  {
    name: "CareCloud",
    logo: "/echo.png",
  },
  {
    name: "MedSmart",
    logo: "/pulse.png",
  },
  {
    name: "TherapyPlus",
    logo: "/quantum.png",
  },
];

const CompanyLogo = ({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-48 cursor-pointer items-center justify-center gap-4 rounded-xl border p-6 transition-all",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        height={8}
        width={102}
        src={logo}
        alt={`${name} logo`}
        className=" object-contain dark:brightness-200"
      />
    </div>
  );
};

const firstRow = companies.slice(0, companies.length / 2);
// const secondRow = companies.slice(companies.length / 2);

export function TrustedCompanies() {
  return (
    <div className="py-12">
      <main className="flex flex-col gap-2 mb-8">
      <h2 className="text-center text-3xl font-semibold tracking-tight dark:text-white">
        Top Brands
      </h2>
      <p className="text-sm font-light text-muted-foreground tracking-tight leading-tight text-center">
      Beloved Worldwide Healthcare Providers Love Heftix
      </p>
      </main>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((company) => (
            <CompanyLogo key={company.name} {...company} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}