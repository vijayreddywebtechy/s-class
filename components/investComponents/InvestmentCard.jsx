import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const InvestmentCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  recommended = true,
}) => {
  return (
    <div className="relative bg-primary rounded-xl overflow-hidden h-40 group hover:shadow-lg transition-shadow">
      {/* Blue diagonal background */}
      <div
        className="absolute inset-0 bg-primary"
        style={{
          clipPath: "polygon(0 0, 60% 0, 50% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        {/* Recommended badge */}
        {recommended && (
          <div className="flex items-center gap-1 text-white text-xs mb-2">
            <Star className="h-3 w-3 fill-white" />
            <span className="font-medium">Recommended for you</span>
          </div>
        )}

        {/* Title and Description */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-tight">{description}</p>
        </div>

        {/* Button */}
        <Link href={buttonLink}>
          <button className="bg-white text-primary font-bold text-sm px-6 py-2 rounded hover:bg-gray-100 transition-colors uppercase mt-3">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Right side image */}
      <div className="absolute right-0 top-0 w-[45%] h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Orange diagonal accent */}
      <div
        className="absolute right-0 top-0 w-16 h-full bg-[#FF6B35]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      />
    </div>
  );
};

export default InvestmentCard;
