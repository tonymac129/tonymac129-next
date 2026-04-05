import Image from "next/image";

async function Discord() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/1068681362590146611",
    { cache: "no-store" },
  );
  const data = await res.json();
  const user = data.data;
  const activity = user.activities[1];
  const imageUrl = activity?.assets?.large_image
    ? `https://cdn.discordapp.com/app-assets/383226320970055681/${activity?.assets.large_image}.png`
    : "/default-vscode.png";

  return (
    <div className="w-full rounded-lg border-2 border-zinc-800 px-4 py-2 flex flex-col gap-y-2">
      <div className="flex gap-x-5">
        <Image
          src="https://api.lanyard.rest/1068681362590146611.png"
          alt="Discord avatar"
          width={80}
          height={80}
          className="border-2 border-zinc-800 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-zinc-300 font-bold text-lg">
            {user.discord_user.display_name}
          </h2>
          <div className="text-zinc-300 font-bold flex items-center text-sm gap-x-2">
            <div
              className={`border-2 rounded-full w-2 h-2
                ${user.discord_status === "online" ? "border-green-600 bg-green-600" : user.discord_status === "dnd" ? "border-red-600 bg-red-600" : user.discord_status === "idle" ? "border-yellow-500 bg-yellow-500" : "border-zinc-300 bg-transparent"}`}
            />
            {user.discord_status === "dnd"
              ? "Do not disturb"
              : user.discord_status[0].toUpperCase() +
                user.discord_status.slice(1)}
          </div>
        </div>
      </div>
      {activity && (
        <div className="flex items-center gap-x-4 px-4 py-2 rounded-lg bg-zinc-900 border-2 border-zinc-800">
          <Image
            src={imageUrl}
            alt={activity.assets?.large_text}
            width={50}
            height={50}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm">{activity.name}</h3>
            <p className="text-zinc-300 text-xs">
              {activity.details || "Idling"}
            </p>
            <p className="text-zinc-400 text-xs">
              {activity.state || "No workspace"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discord;
