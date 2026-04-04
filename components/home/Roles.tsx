"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiTypescript,
  SiBambulab,
  SiHackclub,
  SiCrunchyroll,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
  FaRaspberryPi,
  FaServer,
  FaDiscord,
  FaReddit,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrArchlinux } from "react-icons/gr";
import { PiMathOperations, PiAtomBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

interface AttributeInterface {
  name: string;
  icon: string | React.ReactNode;
  color?: string;
  link?: string;
}

interface RoleInterface {
  id: number;
  name: string;
  attributes: AttributeInterface[];
}

const roles: RoleInterface[] = [
  {
    id: 0,
    name: "Developer",
    attributes: [
      { name: "Next.js", icon: <SiNextdotjs size={35} />, link: "nextjs.org" },
      {
        name: "React",
        icon: <FaReact size={35} />,
        color: "group-hover:text-blue-400",
        link: "react.dev",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={35} />,
        color: "group-hover:text-blue-500",
        link: "typescriptlang.org",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={35} />,
        color: "group-hover:text-blue-400",
        link: "tailwindcss.com",
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql size={35} />,
        color: "group-hover:text-sky-700",
        link: "postgresql.org",
      },
      {
        name: "VS Code",
        icon: <VscVscode size={35} />,
        color: "group-hover:text-blue-500",
        link: "code.visualstudio.com",
      },
    ],
  },
  {
    id: 1,
    name: "Maker",
    attributes: [
      {
        name: "Hack Club",
        icon: <SiHackclub size={35} />,
        color: "group-hover:text-red-500",
        link: "hackclub.com",
      },
      {
        name: "Bambu Lab",
        icon: <SiBambulab size={35} />,
        color: "group-hover:text-green-500",
        link: "bambulab.com",
      },
      {
        name: "Raspberry",
        icon: <FaRaspberryPi size={35} />,
        color: "group-hover:text-rose-600",
        link: "raspberrypi.com",
      },
    ],
  },
  {
    id: 2,
    name: "Student",
    attributes: [
      {
        name: "TJHSST",
        icon: <SiHackclub size={35} />,
        link: "tjhsst.fcps.edu",
      },
      { name: "Calculus", icon: <PiMathOperations size={35} /> },
      { name: "Physics", icon: <PiAtomBold size={35} /> },
    ],
  },
  {
    id: 3,
    name: "Nerd",
    attributes: [
      {
        name: "Arch btw",
        icon: <GrArchlinux size={35} />,
        color: "group-hover:text-blue-500",
        link: "archlinux.org",
      },
      {
        name: "Sysadmin understudy",
        icon: <FaServer size={35} />,
        link: "sysadmins.tjhsst.edu/understudy/",
      },
      {
        name: "Anime fan",
        icon: <SiCrunchyroll size={35} />,
        color: "group-hover:text-orange-500",
        link: "crunchyroll.com",
      },
      {
        name: "Discord",
        icon: <FaDiscord size={35} />,
        color: "group-hover:text-blue-600",
        link: "discord.com",
      },
      {
        name: "Reddit",
        icon: <FaReddit size={35} />,
        color: "group-hover:text-orange-600",
        link: "reddit.com",
      },
    ],
  },
];

function Roles() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-3 items-center">
        <span className="text-zinc-300 font-bold">I am a:</span>
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => setSelected(role.id)}
            className={`px-4 py-2 text-zinc-300 border-2 font-bold text-sm border-zinc-800 rounded-full cursor-pointer ${selected === role.id ? "bg-zinc-800" : "bg-transparent hover:bg-zinc-900"} transition-colors duration-300`}
          >
            {role.name}
          </div>
        ))}
      </div>
      <div className="flex gap-x-3">
        <AnimatePresence mode="popLayout">
          {roles
            .find((role) => role.id === selected)
            ?.attributes.map((attribute, i) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, type: "spring" }}
                key={i + attribute.name}
                className="text-zinc-300 flex flex-col items-center gap-y-2 w-20 group cursor-pointer"
                onClick={() => {
                  if (attribute.link) {
                    window.open("https://" + attribute.link, "_blank");
                  }
                }}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`${attribute.color ? attribute.color : ""} transition-colors duration-300 cursor-pointer`}
                >
                  {attribute.icon}
                </motion.div>
                <div className="text-zinc-400 text-sm text-center w-full">
                  {attribute.name}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Roles;
