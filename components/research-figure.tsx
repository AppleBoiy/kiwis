import Image from "next/image";

type ResearchFigureProps = {
  src: string;
  alt: string;
  label: string;
  title: string;
  caption: string;
  sourceHref: string;
  sourceLabel?: string;
  width?: number;
  height?: number;
  contain?: boolean;
};

export function ResearchFigure({
  src,
  alt,
  label,
  title,
  caption,
  sourceHref,
  sourceLabel = "Open source figure",
  width = 1800,
  height = 1100,
  contain = false,
}: ResearchFigureProps) {
  return (
    <figure className="kiwis-research-figure">
      <div className={`kiwis-figure-image${contain ? " kiwi-contain" : ""}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
        />
      </div>
      <figcaption>
        <span>{label}</span>
        <div>
          <strong>{title}</strong>
          <p>{caption}</p>
        </div>
        <a href={sourceHref}>{sourceLabel} <span aria-hidden="true">↗</span></a>
      </figcaption>
    </figure>
  );
}
