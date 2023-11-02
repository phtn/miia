'use client'

import { Brand, BrandName, BrandPrimary, BrandSecondary, MenuItem, Menubar, NavContainer } from "./styled";
import { Switch } from "@/components/ui/switch";
import useToggleMode from "@/app/_hooks/useToggleMode";
import { CrownIcon, DiamondIcon, FramerIcon, GemIcon } from "lucide-react";
import { CrestIcon } from "../icons/custom-icons";
import { IMenuItem } from "./types";

const menuItems: IMenuItem[] = [
  { id: 1, title: "benefits of a mentee", link: '' },
  { id: 2, title: "meet a mentor", link: '' },
  { id: 3, title: "join a class", link: '' },
  { id: 4, title: "services", link: '' },
  { id: 5, title: "contact", link: '' },
]

const Navbar = () => (
  <NavContainer>
    <Brand>
      <FramerIcon className="rotate-90 h-8 w-8 text-accent dark:text-foreground stroke-[1.5px]" />
      <BrandName>
        <BrandPrimary>
          <div className="skew-x-[16deg]">
            <span className="text-accent">Make it in</span>
          </div>
        </BrandPrimary>
        <BrandSecondary>
          <div className="skew-x-[16deg]">
            <span className="text-foreground">Australia</span>
          </div>
        </BrandSecondary>
      </BrandName>
    </Brand>

    <Menubar>
      {menuItems.map(item => (
        <MenuItem key={item.id}>
          <div className="skew-x-[16deg] font-bold tracking-widest">{item.title}</div>
        </MenuItem>
      ))}
    </Menubar>

    <ModeToggle />
  </NavContainer>
)

const ModeToggle = () => {
  const { checked, toggleMode } = useToggleMode()
  return < Switch checked={checked} onCheckedChange={toggleMode} />
}

export default Navbar