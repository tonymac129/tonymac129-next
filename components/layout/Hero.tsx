type HeroProps = {
  title: string;
  children: React.ReactNode;
};

function Hero({ title, children }: HeroProps) {
  return (
    <div className="flex flex-col items-center gap-y-5 py-10 max-w-350 mx-auto w-full ">
      <h1 className="text-blue-500 text-4xl font-bold text-center">{title}</h1>
      <p className="text-zinc-800 dark:text-zinc-300 w-[90%] sm:w-[70%] lg:w-[55%] text-center">
        {children}
      </p>
    </div>
  );
}

export default Hero;
