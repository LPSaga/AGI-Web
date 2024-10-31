export const metadata = {
  title: 'AGI',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Integrations from '@/components/integrations'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'
import {NextUIProvider} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Logo from '@/public/images/logo-white.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <NextUIProvider>
    {/* <Navbar sticky
          classNames={{
            base: 'bg-transparent bg-black/50',
            item: [
              "flex",
              "relative",
              "h-full",
              "items-center",
              "data-[active=true]:after:content-['']",
              "data-[active=true]:after:absolute",
              "data-[active=true]:after:bottom-0",
              "data-[active=true]:after:left-0",
              "data-[active=true]:after:right-0",
              "data-[active=true]:after:h-[2px]",
              "data-[active=true]:after:rounded-[2px]",
              "data-[active=true]:after:bg-white",
            ],
          }}
          >
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
                    <DropdownItem
                      key="autoscaling"
                      description="ACME scales apps to meet user demand, automagically, based on load."
                    >
                      Autoscaling
                    </DropdownItem>
                    <DropdownItem
                      key="usage_metrics"
                      description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    >
                      Usage Metrics
                    </DropdownItem>
                    <DropdownItem
                      key="production_ready"
                      description="ACME runs on ACME, join us and others serving requests at web scale."
                    >
                      Production Ready
                    </DropdownItem>
                    <DropdownItem
                      key="99_uptime"
                      description="Applications stay on the grid with high availability and high uptime guarantees."
                    >
                      +99% Uptime
                    </DropdownItem>
                    <DropdownItem
                      key="supreme_support"
                      description="Overcome any challenge with a supporting team ready to respond."
                    >
                      +Supreme Support
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                Profile
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar> */}
      <main className="dark text-foreground bg-background">
        <Hero />
      </main>
    </NextUIProvider>
  </>
    // <>
    //   <Hero />
    //   {/* <Testimonials /> */}
    //   {/* <Features /> */}
    //   {/* <Features02 /> */}
    //   {/* <Integrations /> */}
    //   {/* <Pricing /> */}
    //   {/* <Faqs /> */}
    //   {/* <Cta /> */}
    // </>
  )
}
