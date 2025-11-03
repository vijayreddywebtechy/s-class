"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomReactSelect from "@/components/ui/CustomReactSelect";
import iconSelfService from "@/public/icons/icn_self_service.png";
import { Input } from "@/components/ui/input";

const Filtermenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "tamlynholmes", label: "Tamlyn Holmes" },
    { value: "lukacullinan", label: "Luka Cullinan" },
    { value: "coolbeanscafe", label: "Cool Beans Cafe" },
  ];

  return (
    <div className="bg-white py-3">
      <div className="w-full max-w-[1366px] px-3 mx-auto flex items-center justify-between gap-4">
        <div className="w-full max-w-72">
          <CustomReactSelect
            instanceId="switch-client"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Switch Client"
          />
        </div>
        <Input 
            placeholder="Search..." />

        <Button variant="ghost" className="p-0 flex-shrink-0">
          <Image src={iconSelfService} alt="Self Service" width={48} height={48} />
        </Button>
      </div>
    </div>
  );
};

export default Filtermenu;
