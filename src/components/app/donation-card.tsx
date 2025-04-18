import { DonationProps } from "@/shared/interfaces/donation";
import { Link } from "react-router-dom";

export function DonationCard({
  name,
  description,
  location,
  hour,
  image,
}: DonationProps) {
  return (
    <article className="max-w-80 pb-5 rounded-md overflow-clip border border-neutral-200 hover:border-orange-200 scale-95 hover:scale-100 duration-200">
      <Link to="/" className="space-y-5">
        {image ? (
          <img
            src={image}
            alt="donation"
            className="max-w-full w-80 h-36 object-cover"
          />
        ) : (
          <div className="w-80 h-36 flex items-center justify-center text-shadow-md text-sm">
            Sem imagem
          </div>
        )}
        <h1 className="font-semibold px-5 text-sm">{name}</h1>
        <div className="text-xs px-5 flex flex-col gap-y-3">
          <p>{description}</p>
          <p>{location}</p>
          <p>{hour.toLocaleString()}</p>
        </div>
      </Link>
    </article>
  );
}
