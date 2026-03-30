import Highlight from "@/components/cards/highlight";
import Container from "@/components/container";
import Icon from "@/components/icon";
import SectionHeading from "@/components/section-heading";
import SustainabiltyGrid from "@/components/sustainability-grid";
import { Button } from "@heroui/react";
import React from "react";

const highlights = [
  {
    icon: "icon-[akar-icons--microphone]",
    title: "In-depth Sessions",
    description:
      "Explore the growth and transformation of Australia's sustainability strategy and market with industry leaders and innovators.",
  },
  {
    icon: "icon-[eva--people-outline]",
    title: "Leaders' insights",
    description:
      "Hear from senior industry figures, government officials and innovators offering perspectives on the future of sustainability in Australia",
  },
  {
    icon: "icon-[ph--handshake-fill]",
    title: "Networking Opportunities",
    description:
      "Connect with peers at the most anticipated social events of the year, including the experts in Renewables, Gala Dinner and Networking Drinks.",
  },
  {
    icon: "icon-[material-symbols--switch-access-outline-rounded]",
    title: "Access to Experts",
    description:
      "Engage directly with influential thinkers and leaders in the sustainability industry. Learn from top government officials, business leader and innovators",
  },
];

export default function AboutEvent() {
  return (
    <section className="py-16 xl:py-32">
      <Container>
        <SectionHeading
          subTitlte="About the Event"
          title="Join more than 1,500 industry professionals, business leaders and government stakeholders at Australia's  Sustainability Summit 2026 "
        />

        <div className="grid gap-10 xl:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-8">
            <p className="">
              This must-attend Summit brings together the most influential
              leaders and voices from across the sector including business
              leaders, sustainability professionals and technical specialists.
              The program features powerful keynote addresses, expert panels and
              future focused discussions led by those driving Australia's
              sustainability efforts.
              <br />
              <br />
              Highlights include:
            </p>

            <div className="mt grid grid-cols-1 gap-5 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <Highlight
                  key={highlight.title + index}
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                />
              ))}
            </div>

            <Button
              className="w-fit font-semibold"
              color="primary"
              endContent={
                <Icon
                  name="icon-[eva--chevron-right-outline]"
                  className="text-white"
                />
              }
            >
              Get your ticket now
            </Button>
          </div>
          <div className="col-span-1 hidden xl:block">
            <SustainabiltyGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}
