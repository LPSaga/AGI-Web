import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {  Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Logo from '@/public/images/logo-white.png'
import Image from 'next/image'

export const Navbar = () => {
  return (
        <NextUINavbar maxWidth="xl" position="sticky">
          <NavbarBrand>
            <Image className="mx-auto" src={Logo} width={100} height={40} alt="Hero" />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="#" aria-current="page">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  AIDAPP Store
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  AIDAPP Build Platform
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  Develop
                </Button>
              </NavbarItem>                    
              <NavbarItem>
                <Link color="foreground" href="#">
                  Profile
                </Link>
              </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
  );
};
