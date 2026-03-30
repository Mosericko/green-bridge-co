import Container from "@/components/container";
import Icon from "@/components/icon";
import Logo from "@/components/logo";
import SocialLinks from "@/components/socials";
import { headerItems } from "@/sections/home/hero";
import { Button, Input } from "@heroui/react";
import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#133026] pt-10 md:pt-20">
      <Container>
        <div className="grid min-h-96 grid-cols-1 gap-5 md:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <Logo variant="light" />

              <p className="text-default-200 max-w-lg text-sm">
                Green Bridge Co is a leading Australian sustainability
                consultancy that specializes in bridging the gap between
                high-level ESG strategy and practical, commercial
                implementation. We serve as a strategic partner for
                organizations looking to move beyond theoretical commitments
                toward measurable impact.
              </p>

              <SocialLinks />
            </div>

            <div className="mt-10 flex flex-col gap-2 lg:mt-0">
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Email"
                  variant="bordered"
                  color="primary"
                  className="max-w-sm"
                  classNames={{
                    inputWrapper: "border border-default-700",
                    input:
                      "text-default-200 font-semibold placeholder:text-default-500 placeholder:font-normal",
                  }}
                />
                <Button color="primary">Subscribe</Button>
              </div>

              <p className="text-default-300 max-w-sm text-xs">
                By subscribing to our newsletter, you agree to our{" "}
                <span className="cursor-pointer text-white underline">
                  terms of service & conditions
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-end justify-between">
            <div className="hidden w-full max-w-lg flex-col items-start lg:flex">
              <h4 className="text-xl text-[#D1F57B]">Quick Links</h4>
              <div className="mt-2 flex flex-col gap-3">
                {headerItems.map((item, index) => (
                  <Link
                    key={index + item.name}
                    to={item.path}
                    className="flex items-center gap-1 text-white"
                  >
                    <Icon
                      name="icon-[si--arrow-right-fill]"
                      className="text-6"
                    />

                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-20 lg:mt-0">
              <p className="text-default-200 max-w-lg text-sm">
                In the spirit of reconciliation we acknowledge the Traditional
                Custodians of country throughout Australia and their connections
                to land, sea and community. We pay our respect to their elders
                past and present and extend that respect to all Aboriginal and
                Torres Strait Islander peoples today.
              </p>
            </div>
          </div>
        </div>

        <div className="border-primary-800 mt-5 flex flex-col gap-5 border-t py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-baseline gap-1 md:items-center">
            <p className="text-default-300">&copy;</p>
            <p className="text-default-300 text-xs">
              {new Date().getFullYear()}. Green Bridge Co. All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-default-300 cursor-pointer text-xs hover:underline">
              Terms
            </p>
            <p className="text-default-300 cursor-pointer text-xs hover:underline">
              Privacy
            </p>
            <p className="text-default-300 cursor-pointer text-xs hover:underline">
              Cookie policy
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
