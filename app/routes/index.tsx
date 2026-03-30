import Hero from "@/sections/home/hero";
import type { Route } from "./+types/index";
import AboutEvent from "@/sections/home/about-event";
import Speakers from "@/sections/home/speakers";
import Agenda from "@/sections/home/agenda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sustainability Summit 2026" },
    { name: "description", content: "Green Bridge Co" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutEvent />
      <Speakers />
      <Agenda />
    </>
  );
}
