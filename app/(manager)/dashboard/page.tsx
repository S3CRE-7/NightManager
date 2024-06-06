import React from "react";
import Image from "next/image";
import imageProfile from "@/images/icon.png";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Gauge, Users } from "lucide-react";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Snippet } from "@nextui-org/snippet";
import { Input } from "@nextui-org/input";
import { Code } from "@nextui-org/code";
function page() {
  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-5 gap-10">
      <div className="col-span-2 row-span-2 p-1 flex flex-col gap-4 items-center">
        <Image src={imageProfile} width={80} height={90} alt="" />
        <div className="bg-green-500 w-full rounded-lg text-center">
          <div className="text-white bg-zinc-700 w-full p-4 rounded-lg text-center text-2xl">
            <p>Server Name test</p>
          </div>
          <p className="p-2">Running</p>
        </div>
        <Button className="text-white" isLoading color="success">
          Start
        </Button>
      </div>
      <div className="space-y-4 flex items-center">
        <div className="w-full">
          <p>
            <Chip color="success" radius="sm" variant="flat">
              Address
            </Chip>
          </p>
          <Snippet className="flex flex-row" symbol="">
            <p>192.168.1.1</p>
          </Snippet>
        </div>
      </div>
      <div className="pt-7 flex flex-row gap-7 items-center justify-center ">
        <Button
          startContent={<Users size={20} />}
          variant="flat"
          size="lg"
          color="success"
        >
          <p>2</p>/<p>22</p>
        </Button>
        <Button
          variant="flat"
          startContent={<Gauge size={20} />}
          size="lg"
          color="default"
        >
          <p>1.5G</p>/<p>2G</p>
        </Button>
      </div>
    </div>
  );
}

export default page;

/*

*/
