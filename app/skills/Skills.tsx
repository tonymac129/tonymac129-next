"use client";

import type { Skilltype } from "@/types/skill";
import Card from "@/components/skills/Card";

function Skills({ skillData }: { skillData: Skilltype[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-40">
      {skillData.map((skill) => (
        <Card key={skill.id} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;
