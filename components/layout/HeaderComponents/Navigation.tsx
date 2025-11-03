"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  X, ChevronRight,
  LayoutDashboard,
  CreditCard,
  Banknote,
  LineChart,
  ShieldCheck,
  HandCoins,
  FileText,
  CalendarDays,
  CheckCircle,
  File,
  User,
  FilePenLine,
 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Menu items configuration
const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Transact", path: "/transact", icon: CreditCard },
  { name: "Bank", path: "/bank", icon: Banknote },
  { name: "Invest", path: "/invest", icon: LineChart },
  { name: "Insure", path: "/insure", icon: ShieldCheck },
  { name: "Borrow", path: "/borrow", icon: HandCoins },
  { name: "Financials", path: "/financials", icon: FileText },
  { name: "Planning", path: "/planning", icon: CalendarDays },
  { name: "Authorisations", path: "/authorisations", icon: CheckCircle },
  { name: "Documents", path: "/documents", icon: File },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Apply", path: "/apply", icon: FilePenLine },
];

// Desktop Navigation Component
const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:block bg-[#003FCA] h-9">
      <nav className="custom-container mx-auto px-4 text-white h-full flex items-center">
        <ul className="flex h-full overflow-x-auto scrollbar-hide">
          {menuItems.map((item) => (
            <li key={item.path} className="h-full flex-shrink-0">
              <Link
                href={item.path}
                className={`h-full flex items-center text-sm font-normal text-white px-3 lg:px-4 hover:bg-primary-light transition-colors duration-200 whitespace-nowrap ${
                  pathname === item.path ? "bg-primary-light" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Mobile Menu Item Component
const MobileMenuItem = ({ item, pathname, onClose }: {
  item: typeof menuItems[0];
  pathname: string;
  onClose: () => void;
}) => {
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      onClick={onClose}
      className={`flex items-center justify-between p-4 hover:bg-slate-50 transition-colors duration-200 border-l-4 ${
        isActive 
          ? "bg-blue-50 border-l-primary text-primary font-medium" 
          : "border-l-transparent text-foreground"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg"><item.icon size={20} strokeWidth={2} /></span>
        <span className="text-sm sm:text-base">{item.name}</span>
      </div>
      <ChevronRight className={`h-4 w-4 ${isActive ? "text-primary" : "text-gray-400"}`} />
    </Link>
  );
};

// Mobile Navigation Sheet Component
const MobileNavigationSheet = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:w-[380px] p-0">
        <SheetHeader className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-medium text-gray-900">
              Menu
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 -mr-4 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </SheetHeader>

        <div className="py-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <MobileMenuItem
                key={item.path}
                item={item}
                pathname={pathname}
                onClose={onClose}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            S-Class Banking Platform
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Main Navigation Component
interface NavigationProps {
  mobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
}

export default function Navigation({ 
  mobileMenuOpen = false, 
  onMobileMenuClose = () => {} 
}: NavigationProps) {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigationSheet 
        isOpen={mobileMenuOpen} 
        onClose={onMobileMenuClose} 
      />
    </>
  );
}
