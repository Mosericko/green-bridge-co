import Icon from "@/components/icon";
import Logo from "@/components/logo";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { TextReveal } from "@/components/motion/text-reveal";
import { RemixImage } from "@/components/remix-image";
import SocialLinks from "@/components/socials";
import SideDrawer from "@/layouts/drawer";
import { Button } from "@heroui/react";
import { Link, NavLink } from "react-router";

export const headerItems = [
  { name: "About us", path: "/" },
  { name: "Services", path: "/" },
  { name: "Contact us", path: "/" },
];

export default function HeroSection() {
  return (
    <main className="min-h-screen xl:h-screen">
      <div className="grid h-full grid-cols-1 overflow-hidden bg-[#133026] lg:grid-cols-5">
        <div className="relative col-span-1 flex h-full min-h-screen flex-col bg-[#15372C] p-5 lg:col-span-2 lg:p-8 xl:h-screen">
          <div className="flex w-full items-center justify-between max-md:mb-10">
            <Reveal>
              <Logo variant="light" className="h-7" />
            </Reveal>
            <div className="hidden lg:block">
              <Reveal delay={0.2}>
                <SocialLinks />
              </Reveal>
            </div>
            <div className="block lg:hidden">
              <Reveal delay={0.2}>
                <SideDrawer navigation={headerItems} />
              </Reveal>
            </div>
          </div>

          <div className="mt-10 flex h-full flex-col gap-5 lg:mt-14 xl:mt-0 xl:justify-center xl:gap-8">
            <Reveal>
              <div className="bg-primary/20 w-fit border border-[#D1F57B]/10 px-2 py-1">
                <p className="text-sm font-medium text-[#D1F57B] xl:text-base">
                  Early bird prices available at $100
                </p>
              </div>
            </Reveal>
            <div className="hidden md:block">
              <TextReveal
                words={`Practical \nSustainability Summit \nfor Change Makers`}
                duration={0.9}
                className="font-heading text-3xl font-extrabold text-white xl:text-4xl 2xl:text-5xl"
              />
            </div>
            <div className="md:hidden">
              <TextReveal
                words={`Practical Sustainability Summit for Change Makers`}
                duration={0.9}
                className="font-heading text-3xl font-extrabold text-white xl:text-4xl 2xl:text-5xl"
              />
            </div>
            <Reveal
              delay={1}
              className="max-w-xs self-center max-md:text-start md:max-w-xl lg:max-w-xl"
              filter
            >
              <p className="text-default-200 max-w-xl text-lg font-normal max-xl:text-sm">
                This year we bring together business leaders, sustainability
                professionals and decision makers for practical discussion
                around sustainability strategy, implementation and impact.
              </p>
            </Reveal>

            <Reveal delay={1.2}>
              <DateLocation />
            </Reveal>
            <Reveal delay={1.4} filter>
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
                Register now
              </Button>
            </Reveal>
          </div>

          {/* show globe */}

          <div className="hidden items-center justify-center md:flex lg:hidden">
            <Reveal delay={0.8}>
              <RemixImage src="/geo-globe.svg" layout="fullWidth" />
            </Reveal>
          </div>
        </div>
        {/* right side */}
        <div className="hidden px-10 py-8 lg:col-span-3 lg:block">
          <div className="flex items-center justify-between">
            <nav>
              <StaggerContainer
                staggerDelay={0.2}
                className="flex items-center gap-5 text-white"
              >
                {headerItems.map((item, index) => (
                  <StaggerItem key={index}>
                    <NavLink
                      key={index}
                      to={item.path}
                      className="hover:text-primary-300 flex items-center gap-1 text-base font-medium text-white transition-all duration-150"
                    >
                      {item.name}
                    </NavLink>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </nav>
            {/* cta */}
            <Reveal delay={0.2} filter>
              <div className="flex gap-2">
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
                  Register now
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <Reveal delay={0.6}>
              <RemixImage src="/geo-globe.svg" layout="fullWidth" />
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}

function DateLocation() {
  return (
    <div className="flex flex-col gap-5">
      {/* date */}
      <div className="flex items-center gap-2.5">
        <div className="border-primary/20 size-10 overflow-hidden rounded-lg border">
          <div className="bg-primary/20 flex items-center justify-center">
            <p className="text-xs text-white uppercase">FEB</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-sm text-white">12</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-white">Thursday, February 12</p>
          <p className="text-default-200 text-sm">7:00 am - 06:00 pm</p>
        </div>
      </div>

      {/* location */}
      <div className="flex items-center gap-2.5">
        <div className="border-primary/20 flex size-10 items-center justify-center overflow-hidden rounded-lg border">
          <Icon
            name="icon-[fluent--location-28-regular]"
            className="text-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-white">Melbourne Park</p>
          <p className="text-default-200 text-sm">Australia</p>
        </div>
      </div>
    </div>
  );
}
