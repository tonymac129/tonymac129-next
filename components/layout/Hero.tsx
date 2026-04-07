type HeroProps = {
  title: string;
  children: React.ReactNode;
};

function Hero({ title, children }: HeroProps) {
  return (
    <div className="flex flex-col items-center gap-y-5 py-10">
      <h1 className="text-blue-500 text-4xl font-bold">{title}</h1>
      <p className="text-zinc-300 w-[50%] text-center">{children}</p>
    </div>
  );
}

export default Hero;
