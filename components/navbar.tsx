import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "@/public/images/logo-white.png";
import Image from "next/image";
import useWidthMonitor from "@/layouts/web-monitor";

export const Navbar = () => {
  const AIAPI = "https://develop.agiopen.network/model-market";
  const AIDAPP = "https://builder.agiopen.network/";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "AI APP",
    "AIDAPP Build Platform",
    "Docs",
    "Portal",
  ];
  const isWeb = useWidthMonitor();

  const handleMenuClick = (index: number) => {
    if (index == 0) {
      return "#";
    } else if (index == 1) {
      return AIAPI;
    } else if (index == 2) {
      return AIDAPP;
    } else if (index == 3) {
      return "https://docs.agiopen.network/";
    } else if (index == 4) {
      return "https://develop.agiopen.network/developer-portal";
    }
  };

  return (
    <div>
      {isWeb ? (
        <NextUINavbar maxWidth="full" position="sticky">
          <NavbarBrand>
            <Image className="" src={Logo} width={100} height={40} alt="Hero" />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-14" justify="center">
            <NavbarItem isActive>
              <Link color="foreground" href="#" aria-current="page">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href={AIAPI} target="_blank">
                AI APP
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href={AIDAPP} target="_blank">
                AIDAPP Build Platform
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                  >
                    Develop
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="Developer portal">
                  <Link
                    color="foreground"
                    href="https://develop.agiopen.network/developer-portal"
                    target="_blank"
                  >
                    Developer portal
                  </Link>
                </DropdownItem>
                <DropdownItem key="Developer docs">
                  <Link
                    color="foreground"
                    href="https://docs.agiopen.network/"
                    target="_blank"
                  >
                    Developer docs
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* <NavbarItem>
          <Link color="foreground" href="#">
            Profile
          </Link>
        </NavbarItem> */}
          </NavbarContent>
        </NextUINavbar>
      ) : (
        <NextUINavbar
          maxWidth="full"
          position="sticky"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand>
            <Image className="" src={Logo} width={100} height={40} alt="Hero" />
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={index === 0 ? "primary" : "foreground"}
                  className="w-full"
                  href={handleMenuClick(index)}
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NextUINavbar>
      )}
    </div>
  );
};
