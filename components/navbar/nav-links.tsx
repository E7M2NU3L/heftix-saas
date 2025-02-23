"use client";

import type {Dispatch} from 'react';
import React, { SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navlinks () {
  return (
    <div className="bg-neutral-100">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
        <Link href={"/pricing"}>
            <Tab setPosition={setPosition}>
                Pricing
            </Tab>
        </Link>
        <Link href={"/features"}>
            <Tab setPosition={setPosition}>Features</Tab>
        </Link>
        <Link href={"/blogs"}>
            <Tab setPosition={setPosition}>Blog</Tab>
        </Link>
        <Link href={"/help"}>
            <Tab setPosition={setPosition}>Help</Tab>
        </Link>   
        <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-xs"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-5 rounded-full bg-black md:h-6"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};