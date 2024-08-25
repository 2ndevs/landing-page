"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useParamsHash } from "@/lib/hooks/useParamsHash";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Box } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const hash = useParamsHash() ?? ""

  return (
    <NavigationMenu className="fixed left-1/2 top-4 -translate-x-1/2 px-2 py-1 bg-muted/20 backdrop-blur-sm rounded-lg border border-muted">
      <NavigationMenuList>
        <NavigationMenuItem className="relative dark:hover:bg-none hover:bg-none">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-2")}
            >
              <Box />
            </NavigationMenuLink>
          </Link>

          {!hash?.length && (
            <motion.div
              layoutId="navigation-background"
              className={cn("absolute inset-0 bg-muted -z-10 rounded")}
            />
          )}
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <Link href="#highlights" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "dark:hover:bg-none hover:bg-none"
              )}
            >
              Highlights
            </NavigationMenuLink>
          </Link>

          {hash === "#highlights" && (
            <motion.div
              layoutId="navigation-background"
              className={cn("absolute inset-0 bg-muted -z-10 rounded")}
            />
          )}
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "dark:hover:bg-none hover:bg-none"
              )}
            >
              Projects
            </NavigationMenuLink>
          </Link>

          {hash === "#projects" && (
            <motion.div
              layoutId="navigation-background"
              className={cn("absolute inset-0 bg-muted -z-10 rounded")}
            />
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
