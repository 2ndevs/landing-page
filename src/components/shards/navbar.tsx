'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Box } from "lucide-react"
import { cn } from '@/lib/utils'
import Link from "next/link"
import { motion } from 'framer-motion'
import { useParams } from "next/navigation"
import { useEffect } from "react"

export const Navbar = () => {
  const params = useParams()
  const itemId = window.location.hash;

  useEffect(() => {
    console.log(params, itemId)
  }, [params])

  return (
    <NavigationMenu className="fixed left-1/2 top-4 -translate-x-1/2 px-2 py-1 bg-muted/20 backdrop-blur-sm rounded-lg border border-muted">
      <NavigationMenuList>
        <NavigationMenuItem className="relative dark:hover:bg-none hover:bg-none">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-2")}>
              <Box />
            </NavigationMenuLink>
          </Link>

          {!itemId?.length && <motion.div layoutId="navigation-background" className={cn("absolute inset-0 bg-muted -z-10 rounded")} />}
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <Link href="#highlights" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "dark:hover:bg-none hover:bg-none")}>
              Highlights
            </NavigationMenuLink>
          </Link>

          {itemId === '#highlights' && <motion.div layoutId="navigation-background" className={cn("absolute inset-0 bg-muted -z-10 rounded")} />}
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "dark:hover:bg-none hover:bg-none")}>
              Projects
            </NavigationMenuLink>
          </Link>

          {itemId === '#projects' && <motion.div layoutId="navigation-background" className={cn("absolute inset-0 bg-muted -z-10 rounded")} />}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
