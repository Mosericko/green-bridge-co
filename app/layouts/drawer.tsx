import Icon from "@/components/icon";
import Logo from "@/components/logo";
import SocialLinks from "@/components/socials";
import { Button, cn } from "@heroui/react";
import { motion } from "framer-motion";

import { useState } from "react";
import { NavLink } from "react-router";

import { Drawer } from "vaul";

const animation = {
  hide: { y: 18, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration: 0.8,
      },
    },
  },
};

export default function SideDrawer({
  navigation,
}: {
  navigation: { name: string; path: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <Drawer.Trigger className="flex items-center justify-center rounded-md">
        <Icon
          name="icon-[hugeicons--menu-two-line]"
          className={"text-primary-300 size-8 cursor-pointer"}
        />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="bg-primary-900/40 fixed inset-0 z-50" />
        <Drawer.Content className="fixed top-0 right-0 bottom-0 left-0 z-150 flex outline-none">
          <div className="border-primary/20 m-2 flex w-screen grow flex-col justify-between rounded-xl border bg-[#133026] p-5">
            <Drawer.Title className="flex items-center justify-between gap-2">
              {/* <p className="text-default-900 text-xs">Menu</p> */}
              <Logo variant="light" />
              <Button
                className="bg-transparent"
                isIconOnly
                onPress={() => setOpen(false)}
              >
                <Icon
                  name="icon-[ic--baseline-close]"
                  className="text-default-500 size-6"
                />
              </Button>
            </Drawer.Title>
            <Drawer.Description />

            <div className="mt-10 flex h-full flex-col items-start justify-start">
              <motion.ul
                className="flex w-fit flex-col items-start gap-5"
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delayChildren: 0.6,
                  staggerChildren: 0.1,
                }}
              >
                {navigation.map((nav, i) => {
                  return (
                    <motion.li key={i + nav.name} variants={animation}>
                      <NavLink
                        to={nav.path}
                        onClick={() => setOpen(false)}
                        className={"text-white"}
                      >
                        {nav.name}
                      </NavLink>
                    </motion.li>
                  );
                })}
                <motion.li variants={animation} className="mt-5">
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
                </motion.li>
              </motion.ul>
            </div>

            <SocialLinks />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
