"use client";

import type { ActivityType } from "@/types/activity";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

type ActivityProps = {
  activity: ActivityType;
};

function Activity({ activity }: ActivityProps) {
  const [seconds, setSeconds] = useState<number>(0);
  const imageUrl = useMemo<string>(
    () =>
      activity?.assets?.large_image.includes("mp:external")
        ? "https://" +
          activity.assets.large_image.slice(
            activity.assets.large_image.indexOf("https") + 6,
          )
        : activity.assets?.large_image
          ? `https://cdn.discordapp.com/app-assets/383226320970055681/${activity?.assets.large_image}.png`
          : "",
    [activity],
  );

  useEffect(() => {
    if (activity.timestamps) {
      setSeconds(
        Math.floor((new Date().getTime() - activity.timestamps.start) / 1000),
      );
    }
    const timerInterval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log(activity);

    return () => {
      clearInterval(timerInterval);
    };
  }, [activity]);

  return (
    <div className="flex items-center gap-x-4 px-4 flex-1 w-full! py-2 rounded-lg bg-zinc-900 border-2 border-zinc-800">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={activity.assets?.large_text || "Activity thumbnail"}
          width={70}
          height={70}
          className="rounded-lg object-cover"
        />
      ) : (
        <span className="text-3xl">🔥</span>
      )}
      <div className="flex flex-col gap-y-0.5">
        <h3 className="text-white font-bold mb-1">{activity.name}</h3>
        {activity.details && (
          <p className="text-zinc-300 text-xs">{activity.details}</p>
        )}
        {activity.assets?.large_text && (
          <p className="text-zinc-400 text-xs">{activity.assets.large_text}</p>
        )}
        {activity.state && (
          <p className="text-zinc-400 text-xs">{activity.state}</p>
        )}
        {activity.timestamps && (
          <p className="text-zinc-400 text-xs">
            {Math.floor(seconds / 3600) ? Math.floor(seconds / 3600) + ":" : ""}
            {Math.floor((seconds % 3600) / 60)
              .toString()
              .padStart(2, "0")}
            :{(seconds % 60).toString().padStart(2, "0")} elapsed
          </p>
        )}
      </div>
    </div>
  );
}

export default Activity;
