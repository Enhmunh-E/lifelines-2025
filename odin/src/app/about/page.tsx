import { MapIcon, UserIcon, WifiHighIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Donate = () => {
  return (
    <div className="max-w-[720px] mx-auto flex flex-col leading-8 p-4 flex-1">
      <Image src="/odin-hero.png" alt="odin" width={720} height={400} />
      <h1 className="text-3xl font-semibold text-center pb-2">About Us</h1>
      <p className="text-sm md:text-base">
        ODIN is a project dedicated to{" "}
        <span className="text-[#2EC4B6] font-semibold"> empowering </span>both
        those providing aid in{" "}
        <span className="text-[#FF006E] font-semibold"> crisis zones </span> and
        those directly affected by them. Our{" "}
        <span className="underline">mission</span> is to ensure that technology
        remains viable and useful even in the{" "}
        <span className="text-[#FFBE0B] font-semibold">
          most challenging circumstances.{" "}
        </span>
      </p>
      <p className="text-sm md:text-base">
        In times of disaster and conflict, access to reliable communication,
        medical expertise, and critical situational awareness can mean the
        difference between life and death. ODIN bridges this gap by offering an{" "}
        <span className="text-[#2EC4B6] font-semibold">
          open-source, deployable infrastructure network{" "}
        </span>{" "}
        designed to function in areas with limited or no connectivity.
      </p>

      <h2 className="text-2xl font-semibold text-center mt-10 pb-2">
        What We Do
      </h2>
      <p className="text-sm md:text-base">
        ODIN’s platform integrates cutting-edge technology to support emergency
        response efforts, including:
      </p>
      <div className="grid grid-cols-1 gap-3 mt-2">
        <div className="p-3 border text-sm rounded">
          <h3 className=" font-semibold flex flex-row gap-2 items-center pb-1">
            <UserIcon />
            AI-Powered Medical Assistance
          </h3>
          <p className="text-sm md:text-base">
            A certified AI model providing 24/7 medical expertise for those in
            need.
          </p>
        </div>
        <div className="p-3 border text-sm rounded">
          <h3 className=" font-semibold flex flex-row gap-2 items-center pb-1">
            <MapIcon />
            Emergency Mapping & Alerts
          </h3>
          <p className="text-sm md:text-base">
            A real-time system for placing emergency and danger pins to help
            rescue teams respond quickly and civilians avoid hazardous areas.
          </p>
        </div>
        <div className="p-3 border text-sm rounded">
          <h3 className=" font-semibold flex flex-row gap-2 items-center pb-1">
            <WifiHighIcon />
            Resilient Connectivity
          </h3>
          <p className="text-sm md:text-base">
            Enabling software engineers to deploy life-saving applications in
            crisis zones, even where network outages persist.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center mt-10 pb-2">
        Why ODIN?
      </h2>
      <p className="text-sm md:text-base">
        We believe that innovation{" "}
        <span className="text-[#FF006E] font-semibold">
          should not be hindered by infrastructure limitations.
        </span>{" "}
        By leveraging AI, decentralized communication, and smart mapping
        technologies,{" "}
        <span className="text-[#2EC4B6] font-semibold">
          ODIN is redefining how communities and responders navigate crisis
          situations.
        </span>{" "}
        Whether you are a first responder, a humanitarian worker, or someone
        affected by a crisis, ODIN is here to{" "}
        <span className="text-[#FFBE0B] font-semibold">
          provide the tools necessary
        </span>{" "}
        to make informed decisions and stay connected when it matters most.
        <br />
        <Link
          className="underline font-semibold text-center"
          href="https://github.com/Enhmunh-E/lifelines-2025"
          rel="noopener noreferrer"
          target="_blank"
        >
          Join us in building a more resilient future—because technology should
          serve everyone, everywhere.
        </Link>
      </p>
    </div>
  );
};

export default Donate;
