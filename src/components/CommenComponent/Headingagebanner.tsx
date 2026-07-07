interface HeadingagebannerProps {
  pagename: string;
}

export default function Headingagebanner({
  pagename,
}: HeadingagebannerProps) {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7ED957]/20 to-transparent" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ED957]/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ED957]/20 blur-[180px]" />

      <div className="relative z-10 text-center">
        <h1 className="text-primary moving-gradient text-5xl md:text-8xl font-bold">
          {pagename}
        </h1>
      </div>
    </div>
  );
}