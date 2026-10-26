type CaseStudyFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  /** When true, image uses object-contain and a dark inset so UI chrome stays readable */
  contain?: boolean;
};

export default function CaseStudyFigure({
  src,
  alt,
  caption,
  label,
  contain = false,
}: CaseStudyFigureProps) {
  return (
    <figure className="border border-[#3a3020] overflow-hidden bg-[#0a0907]">
      {label && (
        <p
          className="font-display text-[#c9a84c] tracking-widest px-4 py-2.5 border-b border-[#3a3020] bg-[#12100d]"
          style={{ fontSize: "9px", letterSpacing: "0.25em" }}
        >
          {label}
        </p>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={
          contain
            ? "block w-full h-auto max-h-[min(70vh,720px)] object-contain object-top bg-[#0a0907]"
            : "w-full object-cover object-top"
        }
        loading="lazy"
      />
      {caption && (
        <figcaption
          className="font-body text-[#b8a488] px-4 py-3 border-t border-[#3a3020]"
          style={{ fontSize: "14px", lineHeight: "1.6" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
