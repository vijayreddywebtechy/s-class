import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const ApplyNowCard = ({
  title = "Recommended for you",
  subtitle = "No forms, no fuss!",
  description = "Upgrade to ... account now and earn extra benefits",
  buttonText = "APPLY NOW",
  buttonLink = "/apply",
  imageSrc = "",
  imageAlt = "Apply Now",
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      {/* Blue Background with Diagonal Clip Path */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-600 z-10"
        style={{
          clipPath: "polygon(0 0, 80% 0, 45% 100%, 0 100%)",
        }}
      />
      <Image className="absolute left-[58%] top-[62%] -translate-x-1/2 -translate-y-1/2 z-10" src="/images/shapes/applynow-orange-shape.png" alt="orange shape" width={78} height={52} />

      {/* Container for Content and Image */}
      <div className="relative h-full flex items-stretch">
        {/* Content Section - Left Side */}
        <div className="flex-1 px-5 py-4 flex flex-col justify-between z-10 max-w-[55%]">
          {/* Title with Icon */}
          <div>
            <div className="flex items-center gap-[6px] mb-3">
              <Star className="w-[18px] h-[18px] text-white"/>
              <span className="text-white text-xs font-normal">{title}</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-white text-sm font-medium mb-4 leading-tight">
              {subtitle}
            </h3>

            {/* Description */}
            <p className="text-white text-sm font-normal leading-relaxed mb-3">
              {description}
            </p>
          </div>

          {/* Apply Button */}
          <Link
            href={buttonLink}
            className="text-white font-bold text-sm"
          >
            {buttonText}
          </Link>
        </div>

        {/* Image Section - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%]">
          {/* Orange Decorative Triangle */}


          {/* Person Image */}
          {imageSrc ? (
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="45vw"
                priority
              />
            </div>
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyNowCard;
