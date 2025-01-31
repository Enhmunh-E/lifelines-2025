import Image from "next/image";
import Link from "next/link";
export const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[502px] flex-col gap-8 p-4">
      <Image
        src="/hero-bg.png"
        alt="hero-bg"
        fill
        className=" object-center object-contain"
      />
      <h1 className="text-3xl sm:text-4xl lg:text-7xl font-medium relative z-10">
        Join us in building a<br />
        <span className="text-[#2EC4B6]">
          more <span className="underline">resilient future</span>
        </span>
      </h1>
      <h2 className="text-center text-xs  md:text-md lg:text-lg relative z-10">
        We are ODIN (Open-Source Deployable Infrastructure Network).
        <br />
        We bridge the gap between the volunteering software engineers and crisis
        zones,
        <br /> where network outages and poor connectivity render technology
        useless.
      </h2>
      <h3 className="text-xs lg:text-lg">
        Created by{" "}
        <Link href="https://www.qatar.cmu.edu/" className="underline">
          CMU-Q
        </Link>{" "}
        students
      </h3>
    </section>
  );
};
