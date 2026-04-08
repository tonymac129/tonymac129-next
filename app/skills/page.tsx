import { skillData } from "@/lib/skills";
import Skills from "./Skills";
import Hero from "@/components/layout/Hero";

function Page() {
  return (
    <div>
      <Hero title="My Skills">
        Here are some skills and hobbies that I know or am currently learning,
        with a progress bar that shows my mastery on the skill. Click on a skill
        to read more about it!
      </Hero>
      <Skills skillData={skillData} />
    </div>
  );
}

export default Page;
