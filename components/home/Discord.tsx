import type { UserType } from "@/types/activity";
import Image from "next/image";
import Activity from "./Activity";

async function Discord() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/1068681362590146611",
    { cache: "no-store" },
  );
  const data = await res.json();
  const user: UserType = data.data;

  return (
    <div className="flex-1 flex flex-col gap-y-5 h-fit">
      <h2 className="text-black dark:text-white text-xl font-bold">
        Discord status
      </h2>
      <div className="flex flex-col sm:flex-row md:flex-col gap-x-10 gap-y-5">
        <div className="flex gap-x-5 items-center">
          <Image
            src="https://api.lanyard.rest/1068681362590146611.png"
            alt="Discord avatar"
            width={80}
            height={80}
            className="border-2 border-zinc-800 rounded-full"
          />
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-zinc-800 dark:text-zinc-300 font-bold text-lg">
              {user.discord_user.display_name}
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-zinc-700 dark:text-zinc-400 text-xs items-center">
              <div
                className="text-zinc-700 dark:text-zinc-400 text-xs hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors duration-300 cursor-pointer rounded-lg w-fit
            px-1 py-0.5 flex items-center gap-x-1 border border-zinc-800"
                title="Frieren"
              >
                <Image
                  src={`https://cdn.discordapp.com/guild-tag-badges/${user.discord_user.primary_guild.identity_guild_id}/${user.discord_user.primary_guild.badge}`}
                  alt="Server tag"
                  width={15}
                  height={15}
                />
                {user.discord_user.primary_guild.tag}
              </div>
              •<span>{user.discord_user.username}</span>•<span>he/him</span>
            </div>
            <div className="text-zinc-800 dark:text-zinc-300 font-bold flex items-center text-sm gap-x-2">
              <div
                className={`border-2 rounded-full w-2 h-2
                ${user.discord_status === "online" ? "border-green-600 bg-green-600" : user.discord_status === "dnd" ? "border-red-600 bg-red-600" : user.discord_status === "idle" ? "border-yellow-500 bg-yellow-500" : "text-zinc-800 dark:border-zinc-300 bg-transparent"}`}
              />
              {user.discord_status === "dnd"
                ? "Do not disturb"
                : user.discord_status[0].toUpperCase() +
                  user.discord_status.slice(1)}
            </div>
          </div>
        </div>
        {user.activities.length == 1 ? (
          <Activity activity={user.activities[0]} />
        ) : (
          user.activities
            .slice(1)
            .map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))
        )}
      </div>
    </div>
  );
}

export default Discord;
