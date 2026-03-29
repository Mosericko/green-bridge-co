import { HeroUIProvider } from "@heroui/react";
import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    // Animation frame loop
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <LenisProvider>{children}</LenisProvider>
    </HeroUIProvider>
  );
}
