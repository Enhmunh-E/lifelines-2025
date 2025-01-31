"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<
    null | 20 | 50 | 100 | 200
  >(null);
  return (
    <div className="container mx-auto flex flex-col gap-24 flex-1 items-center justify-center">
      <div className="flex flex-col md:grid md:grid-cols-2 w-full p-4">
        <div className="flex flex-col md:items-center justify-center">
          <div className="w-full md:max-w-96 md:min-w-96 clear-start flex flex-col gap-3">
            <h1 className=" font-semibold text-2xl">Support our initiative</h1>
            <Label>Choose an amount to donate</Label>
            <div className="grid grid-cols-2 gap-3">
              {[20, 50, 100, 200].map((amount) => (
                <div
                  key={amount}
                  className={`border rounded-md p-4 flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-200 text-lg font-medium ${
                    donationAmount === amount
                      ? "bg-[#2EC4B6] text-white font-bold"
                      : "bg-white"
                  }`}
                  onClick={() =>
                    setDonationAmount(amount as 20 | 50 | 100 | 200)
                  }
                >
                  QAR {amount}
                </div>
              ))}
            </div>
            <Button className="w-full text-lg h-14 font-semibold">
              Donate
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center flex-col">
          <h1 className="text-3xl font-semibold">Help us do more</h1>
          <p className=" leading-7 pt-4 text-lg">
            Help up help others. Donate so we can setup better more powerful
            servers, deploy more nodes for better connectivity and reach places
            we could not before.
            <br />
            <br />
            Thanks! :)
            <br />
            <br />
            <span className="text-right w-full block">(: !يعطيك العافية -</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
