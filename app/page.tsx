import image from "@/images/title.png";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image
        className=" absolute top-20 "
        height={500}
        width={500}
        src={image}
        alt=""
      />

      <p>START THE APP!</p>
      <Link href={"/dashboard"}>
        <Button color="primary" variant="solid">
          start
        </Button>
      </Link>
    </section>
  );
}
