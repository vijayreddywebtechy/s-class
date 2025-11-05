import React from "react";
import Link from "next/link";
import Image from "next/image";
import iconLinkedIn from "@/public/icons/icn_linkedin_w.png";
import iconYoutube from "@/public/icons/icn_youtube_w.png";
import iconTwitter from "@/public/icons/icn_twitter_w.png";
import iconFacebook from "@/public/icons/icn_facebook_w.png";

// Footer Navigation Links
const FooterNavigation = () => {
  const navLinks = [
    { href: "/security", label: "Security Centre" },
    { href: "/regulatory", label: "Regulatory" },
    { href: "/legal", label: "Legal" },
    { href: "/terms", label: "Terms and Conditions" },
  ];

  return (
    <nav className="mb-6 lg:mb-5">
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3 sm:gap-6 lg:gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-bspro font-medium text-sm text-white uppercase leading-tight py-1 hover:text-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// Social Media Links
const SocialMediaLinks = () => {
  const socialLinks = [
    { href: "https://linkedin.com/company/standard-bank", icon: iconLinkedIn, alt: "LinkedIn" },
    { href: "https://youtube.com/@standardbank", icon: iconYoutube, alt: "YouTube" },
    { href: "https://twitter.com/standardbankza", icon: iconTwitter, alt: "Twitter" },
    { href: "https://facebook.com/standardbank", icon: iconFacebook, alt: "Facebook" },
  ];

  return (
    <div className="flex justify-center lg:justify-end space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.alt}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
        >
          <Image 
            src={social.icon} 
            alt={social.alt} 
            width={36} 
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </Link>
      ))}
    </div>
  );
};

// Legal Disclaimer
const LegalDisclaimer = () => (
  <p className="font-bspro font-normal text-xs sm:text-sm text-white leading-relaxed mb-6 lg:mb-1 max-w-4xl">
    Standard Bank is a licensed financial services provider in terms of the Financial Advisory and 
    Intermediary Services Act and a registered credit provider in terms of the National Credit Act, 
    registration number NCRCP15.
  </p>
);

// Main Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 lg:py-10">
      <div className="custom-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-5">
          {/* Content Section */}
          <div className="flex-1 lg:max-w-4xl">
            <FooterNavigation />
            <LegalDisclaimer />
          </div>
          
          {/* Social Media Section */}
          <div className="lg:flex-shrink-0">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
