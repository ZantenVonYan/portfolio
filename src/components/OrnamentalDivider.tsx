import { GearIcon } from "@/components/ArtificerIcons";

export default function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 my-2 ${className}`}>
      <div className="flex-1 gold-rule" />
      <span className="ornament inline-flex text-[#c9a84c]">
        <GearIcon size={18} />
      </span>
      <div className="flex-1 gold-rule" />
    </div>
  );
}
