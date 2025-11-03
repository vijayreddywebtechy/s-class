"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StandardBankLogoShield from "@/public/standardbank-logo-shield.svg";
import StandardBankLogoText from "@/public/standardbank-logo-text.svg";
import iconPeopleCollab from "@/public/icons/icn_people_collaboration.png";
import iconContacts from "@/public/icons/icn_contacts_book.png";
import iconSearch from "@/public/icons/icn_search.png";
import iconProfile from "@/public/icons/icn_people_profile.png";
import iconArrowDown from "@/public/icons/icn_arrow_down_solid_w.svg";
import iconLocked from "@/public/icons/icn_lock_closed.png";
import iconUserProfile from "@/public/icons/icon_user_profile.png";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, Settings, X } from "lucide-react";

interface TopHeaderProps {
  onMenuClick?: () => void;
}

const TopHeader = ({ onMenuClick }: TopHeaderProps) => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="bg-primary">
      <div className="custom-container flex justify-between items-center h-16 !pr-0 sm:!pr-3">
        <div className="flex items-center gap-1">
          <Button 
            className="p-2 shadow-none md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="!w-5 !h-5" />
          </Button>
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src={StandardBankLogoShield}
              alt="Standard Bank Logo Shield"
              width={32}
              height={38}
            />
            <Image
              src={StandardBankLogoText}
              alt="Standard Bank Text Logo"
              width={112}
              height={14}
              className="hidden sm:block"
            />
          </Link>
        </div>
        <div className="h-full flex items-center gap-0.5">
          <Button className="px-3 shadow-none">
            <Image
              src={iconPeopleCollab}
              alt="People Collaboration Icon"
              width={24}
              height={24}
              className="hidden sm:block"
            />
          </Button>
          <Button className="px-3 shadow-none">
            <Image
              src={iconContacts}
              alt="Contacts Icon"
              width={24}
              height={24}
              className="hidden sm:block"
            />
          </Button>
          <Button className="px-3 shadow-none">
            <Image src={iconSearch} alt="Search Icon" width={24} height={24} />
          </Button>
          <Button
            className="px-3 shadow-none text-sm font-normal flex items-center gap-1"
            onClick={() => setProfileOpen(true)}
          >
            <Image
              src={iconProfile}
              alt="Profile Icon"
              width={24}
              height={24}
            />
            <span className="hidden sm:block">Lee Jones</span>
            <Image
              src={iconArrowDown}
              alt="Arrow Down Icon"
              width={6}
              height={4}
              className="ml-1 hidden sm:block"
            />
          </Button>
          <Button className="h-full px-4 shadow-none text-sm font-normal flex items-center gap-1 bg-primary-light rounded-none">
            <Image src={iconLocked} alt="Locked Icon" width={24} height={24} />
            <span className="leading-normal hidden sm:block">SIGN OUT</span>
          </Button>
        </div>
      </div>
      <Sheet open={profileOpen} onOpenChange={setProfileOpen}>
        <SheetContent side="right" className="w-full sm:w-[360px] p-0">
          <SheetHeader className="px-8 py-6">
            <div className="flex items-center justify-between gap-2">
              <SheetTitle className="text-2xl font-medium text-foreground">
                Profile
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setProfileOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-slate-100"
              >
                <X className="!h-7 !w-7 text-primary-light" strokeWidth={1.5} />
              </Button>
            </div>
          </SheetHeader>

          <div className="pb-3">
            {/* User Profile Section */}
            <div className="px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <Image
                    src={iconUserProfile}
                    alt="Profile Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground leading-tight">
                    Lee Jones
                  </h3>
                  <p className="text-xs text-slate-500">leejones@gmail.com</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-slate-100"
              >
                <ChevronDown
                  className="!h-6 !w-6 text-primary-light"
                  strokeWidth={1.5}
                />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              <button className="w-full text-left px-8 py-4 text-base text-foreground hover:bg-slate-50 transition-colors">
                Profile Details
              </button>
              <button className="w-full text-left px-8 py-4 text-base text-foreground hover:bg-slate-50 transition-colors">
                Consents
              </button>
              <button className="w-full text-left px-8 py-7 border-t border-slate-100 text-base text-foreground flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <Settings className="h-5 w-5 text-blue-600" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TopHeader;
