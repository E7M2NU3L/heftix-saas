"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartBarIcon, ChevronLeft, ChevronRight, Clock, Database } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { IconChartBubble } from "@tabler/icons-react";

const problems = [
  {
    id: 1,
    title: "Disorganized Client Data",
    description: "Centralizes all client information, making it easy to access and manage efficiently.",
    icon: <Database />,
  },
  {
    id: 2,
    title: "Missed Appointments",
    description: "Automates scheduling and reminders, reducing no-shows and simplifying appointment management.",
    icon: <Clock />,
  },
  {
    id: 3,
    title: "Lack of Actionable Insights",
    description: "Provides AI-driven analytics to improve decision-making and optimize client outcomes.",
    icon: <ChartBarIcon />,
  },
  {
    id: 4,
    title: "Communication Gaps",
    description: "Improves team and client communication through integrated messaging and notifications.",
    icon: <IconChartBubble />,
  },
];

export function More() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
    problems.map(() => React.createRef())
  ).current;

  const prevBrnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % problems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const handleProgression = useCallback(() => {
    setTimeout(() => {
      handleNext();
    }, 1500);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleProgression();
    }, 3000);

    return () => clearTimeout(timer);
  }, [handleProgression]);

  return (
    <div className="relative overflow-x-hidden max-w-7xl mx-auto flex w-full flex-col items-center justify-center gap-8 p-10">
      <section className="flex justify-between items-end w-full flex-wrap gap-4 md:gap-0">
        <main className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            The Problems We Solve
          </h2>
          <p className="text-sm font-light text-foreground tracking-tight leading-tight">
            This tool is to solve repetitive tasks such as invoicing, analytics, automated report
            generation and patient management
          </p>
        </main>
        <main className="flex flex-row gap-4 items-center">
          <Button ref={prevBrnRef} variant={"outline"} className="border-violet-600" onClick={handlePrev}>
            <ChevronLeft className="text-violet-600" />
          </Button>

          <Button ref={nextBtnRef} variant={"outline"} className="border-violet-600" onClick={handleNext}>
            <ChevronRight className="text-violet-600" />
          </Button>
        </main>
      </section>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={containerRef}>
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0.9,
              scale: index === activeIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg relative z-10 px-4" ref={cardRefs[index]}>
              <MagicCard className="group py-4 space-y-4" gradientColor="#D9D9D955">
                <CardHeader className="flex flex-col gap-4 mb-4 items-center justify-between">
                  <div className="text-3xl text-primary">{problem.icon}</div>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {problem.description}
                </CardContent>
              </MagicCard>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
