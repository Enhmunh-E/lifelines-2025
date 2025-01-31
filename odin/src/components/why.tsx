import {
  BriefcaseMedicalIcon,
  CrossIcon,
  EarthIcon,
  PersonStandingIcon,
  RibbonIcon,
  Smile,
  WifiHighIcon,
} from "lucide-react";
import { GithubIcon } from "./github";

export const Why = () => {
  return (
    <section className="relative z-10">
      <div
        className="flex flex-col p-4 md:grid md:grid-cols-3 gap-4"
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(3, 1fr)",
        //   gap: "20px",
        // }}
      >
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <CrossIcon />
            Saving Lives in Crisis Zones
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            By supporting ODIN, you’re helping create a platform that provides
            life-saving medical expertise, emergency coordination, and real-time
            danger alerts in areas where traditional support is lacking. Your
            contributions directly impact people in need.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <WifiHighIcon />
            Bridging the Digital Divide in Emergencies
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            Many crisis-affected regions suffer from network failures and
            limited access to reliable technology. ODIN ensures that
            connectivity and critical data remain available even when
            infrastructure collapses.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <GithubIcon color="black" />
            Open-Source for Greater Impact
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            ODIN is built on open-source principles, meaning anyone can
            contribute, improve, and deploy the technology where it’s needed
            most. Your expertise in coding, AI, networking, or crisis management
            can help make the platform stronger and more accessible.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <BriefcaseMedicalIcon />
            Empowering First Responders and Humanitarian Efforts
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            Rescue teams, NGOs, and medical professionals rely on fast, accurate
            information to make life-or-death decisions. ODIN provides tools
            that enhance their ability to coordinate responses, allocate
            resources, and save lives more effectively.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <RibbonIcon />
            Enhancing Global Crisis Preparedness
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            Disasters and conflicts don’t just affect one region—they can happen
            anywhere. By contributing to ODIN, you help develop innovative,
            scalable solutions that can be deployed worldwide, ensuring
            communities are better prepared for emergencies.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <Smile />
            Leveraging AI for Good
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            ODIN integrates AI-driven medical guidance and predictive analytics
            to support decision-making in critical moments. Your contributions
            help ensure that AI serves humanity by making expert medical
            assistance more accessible.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <PersonStandingIcon />
            Ethical Tech Development in High-Stakes Environments
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            Many tech solutions fail under real-world crisis conditions. ODIN is
            designed to be resilient, ethical, and effective in high-risk
            scenarios. Supporting ODIN means advocating for technology that
            prioritizes human lives over profit.
          </p>
        </div>
        <div className="flex flex-col p-5 col-span-2 rounded-lg border bg-white">
          <h3 className="pb-3 flex flex-row gap-2 text-md  md:text-lg items-center">
            <EarthIcon />A Chance to Be Part of Something Bigger
          </h3>
          <p className="text-gray-500 text-xs sm:text-md lg:text-base">
            By contributing to ODIN, you become part of a global movement
            dedicated to using technology for humanitarian aid. Whether through
            coding, research, field testing, or advocacy, your efforts make a
            tangible difference in people’s lives.
          </p>
        </div>
      </div>
    </section>
  );
};
