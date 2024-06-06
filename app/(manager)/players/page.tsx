import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full ">
      <div className="grid grid-cols-5 grid-rows-auto gap-10 w-full h-full">
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={"#"}>
          <Card isPressable className="bg-zinc-700 w-fit">
            <CardBody className=" flex flex-col items-center p-8 gap-5">
              <div className="p-4 shadow-sm shadow-zinc-900 bg-zinc-900 rounded-full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOev39iKBuHOutJ3oQ7X_zoSniHUkyaOqckg&s"
                  size="lg"
                />
              </div>
              <p>Steve Adams</p>
            </CardBody>
          </Card>
        </Link>
      </div>
      <Pagination total={10} initialPage={1} />
    </div>
  );
};

export default page;
