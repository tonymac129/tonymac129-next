"use client";

import type { SkillType } from "@/types/skill";
import { useState, useEffect } from "react";
import Card from "@/components/skills/Card";
import Filter from "@/components/skills/Filter";
import Input from "@/components/ui/Input";

const filters = ["Language", "Web", "Tool"];

function Skills({ skillData }: { skillData: SkillType[] }) {
  const [sortedSkills, setSortedSkills] = useState<SkillType[]>(skillData);
  const [sortMethod, setSortMethod] = useState<string>("custom");
  const [filter, setFilter] = useState<number | null>(null);
  const [displayedSkills, setDisplayedSkills] =
    useState<SkillType[]>(skillData);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const allSkills = [...skillData];

    switch (sortMethod) {
      case "custom":
        setSortedSkills(allSkills);
        break;
      case "mastery":
        setSortedSkills(allSkills.sort((a, b) => b.progress - a.progress));
        break;
      case "category":
        setSortedSkills(
          allSkills.sort((a, b) =>
            a.tags
              .find((s) => s !== "web")!
              .localeCompare(b.tags.find((s) => s !== "web")!),
          ),
        );
        break;
      case "name":
        setSortedSkills(allSkills.sort((a, b) => a.name.localeCompare(b.name)));
        break;
    }
  }, [sortMethod, skillData]);

  useEffect(() => {
    setDisplayedSkills(
      sortedSkills.filter(
        (skill) =>
          (filter !== null
            ? skill.tags.includes(filters[filter].toLowerCase())
            : true) &&
          skill.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    );
  }, [filter, sortedSkills, search]);

  return (
    <div className="flex flex-col gap-y-10 px-5 sm:px-10 lg:px-40 max-w-430 mx-auto">
      <div className="flex flex-col gap-y-3 lg:flex-row justify-center relative items-center">
        <div className="lg:absolute right-0">
          <Input
            placeholder="Search skills"
            value={search}
            setValue={setSearch}
          />
        </div>
        <div className="text-zinc-300 flex items-center gap-x-3 lg:absolute left-0">
          Sort by{" "}
          <select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="appearance-none py-2 w-30 rounded-lg bg-zinc-900 cursor-pointer font-bold text-center outline-none"
          >
            <option value="custom">Custom</option>
            <option value="mastery">Mastery</option>
            <option value="category">Category</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {filters.map((text, i) => (
            <Filter
              key={i}
              index={i}
              text={text}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {displayedSkills.length > 0 ? (
          displayedSkills.map((skill, i) => (
            <Card key={skill.id} skill={skill} index={i} />
          ))
        ) : (
          <div className="text-zinc-300">
            No skills found! Try clearing the filters or I just don&apos;t know
            that much...
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
