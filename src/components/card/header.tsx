import Navigation from "../navigation";
// import Navigation from "../components/navigation"; // kerakli yo'lni yozing

type HeaderCardProps = {
  sampleNavLinks: { label: string; href: string }[];
  children?: React.ReactNode;
};

export default function HeaderCardComponent({ sampleNavLinks, children }: HeaderCardProps) {
  return (
    <div
      className="relative w-full rounded-3xl bg-white/50 backdrop-blur-[10px]
                 md:p-8 lg:px-16 lg:pt-4 lg:pb-10 p-4 text-white"
    >
      <Navigation navLinks={sampleNavLinks} />
      {children}
    </div>
  );
}
