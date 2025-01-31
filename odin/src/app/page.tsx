import { Hero } from "@/components/hero";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-24">
      <Hero />
      <Why />
    </div>
  );
}
