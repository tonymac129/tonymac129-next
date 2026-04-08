type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-blue-500 text-2xl font-bold">{title}</h1>
      <p className="text-zinc-300 text-lg">{children}</p>
    </div>
  );
}

export default Section;
