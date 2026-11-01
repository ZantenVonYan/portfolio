export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-[#c9a84c] tracking-widest uppercase mb-4"
      style={{ fontSize: "17px", letterSpacing: "0.14em" }}
    >
      {children}
    </p>
  );
}
