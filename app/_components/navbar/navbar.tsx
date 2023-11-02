'use client'

import { Brand, BrandName, NavContainer } from "./styled";
import { Switch } from "@/components/ui/switch";
import useToggleMode from "@/app/_hooks/useToggleMode";
import { CrownIcon, DiamondIcon, GemIcon } from "lucide-react";
import { CrestIcon } from "../icons/custom-icons";

const Navbar = () => (
  <NavContainer>
    <Brand>
      <CrestIcon size={32} />
      <BrandName>
        <span className="bg-foreground text-accent px-1">Only</span>
        <span className="bg-accent text-foreground py-1 px-2">Members</span>
      </BrandName>
    </Brand>

    <ModeToggle />
  </NavContainer>
)

const ModeToggle = () => {
  const { checked, toggleMode } = useToggleMode()
  return < Switch checked={checked} onCheckedChange={toggleMode} />
}

export default Navbar