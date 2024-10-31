'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Image from 'next/image'
import Header from '@/components/ui/header'
import Illustration from '@/public/images/hero-illustration.svg'
import Footer from '@/components/ui/footer'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Logo from '@/public/images/logo-white.png'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      {/* <Header /> */}
      {/* <Navbar 
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
          ></Navbar> */}
      <main className="grow">

        {children}

      </main>

      {/* <Footer /> */}
    </>
  )
}
