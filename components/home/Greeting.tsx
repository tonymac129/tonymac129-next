"use client";

import { useState, useEffect } from "react";

const greetings = [
  "Yo, what's up?",
  "Greetings, fellow human being",
  "Yo!",
  "Hi 👋",
  "Hello 👋",
  "Welcome to my internet estate!",
  "Wait, how did you get here?",
  "This is my portfolio website btw",
  "Did you know this title is randomly generated?",
  "Click on me!",
  "Can't think of new random titles",
  "100% human written code",
  "I swear this looked cooler in my head",
  "67% of the time, this site works 100% of the time",
  "*insert catchy title here*",
  "ummmm",
];

function Greeting() {
  const [greeting, setGreeting] = useState<string>("");

  function greet() {
    let newGreeting = greeting;
    while (newGreeting == greeting) {
      newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    }
    setGreeting(newGreeting);
  }

  useEffect(() => {
    greet();
  }, []);

  return (
    <h2 className="w-fit cursor-pointer text-zinc-400 italic" onClick={greet}>
      {greeting}
    </h2>
  );
}

export default Greeting;
