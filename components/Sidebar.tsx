"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import icon from "@/images/icon.png";
import Link from "next/link";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { animals } from "@/data/servers";
import { BarChart, Server } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-full w-fit p-3 bg-zinc-900 rounded-xl flex flex-col items-center gap-5 pt-6">
      <Link href={"/manager"}>
        <Image src={icon} height={100} width={50} alt="" />
      </Link>
      <div className="flex flex-col gap-3 items-center justify-center h-full">
        <Autocomplete
          defaultItems={animals}
          label="Server name"
          placeholder=""
          size="sm"
          startContent={<Server size={20} />}
        >
          {(animal) => (
            <AutocompleteItem key={animal.value}>
              {animal.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Link className="w-full" href={"/dashboard"}>
          <Button
            fullWidth
            size="lg"
            variant="faded"
            startContent={<BarChart size={20} />}
          >
            dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
