interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-stretch ${className}`}>
      <div className="flex items-center gap-4">
        <div className="self-stretch w-5 my-auto">
          <div className="rounded bg-[#DB4444] flex shrink-0 h-10" />
        </div>
        <div className="text-[#DB4444] text-base font-semibold leading-none self-stretch my-auto">
          {subtitle}
        </div>
      </div>
      <div className="text-black text-4xl font-semibold leading-none tracking-[1.44px] mt-5">
        {title}
      </div>
    </div>
  );
}
