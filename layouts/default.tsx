import { Head } from "./head";

import { Navbar } from "@/components/navbar";

import HeroBannerBg from '@/public/images/home-banner-bg.png'
import Image from 'next/image'
import BottomBgImage from '@/public/images/bottom-bg.png'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import FooterImg from '@/public/images/footer.png'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const hkgrotesk = localFont({
  src: [
    {
      path: '../public/fonts/HKGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/HKGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/HKGrotesk-ExtraBold.woff2',
      weight: '800',
    },        
  ],
  variable: '--font-hkgrotesk',
  display: 'swap',  
})

export const metadata = {
  title: 'AGI',
  description: '',
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${hkgrotesk.variable} font-inter antialiased text-slate-200 tracking-tight`}>
      <Head />
      <Navbar />
      <Image
        className="mx-auto"
        src={HeroBannerBg}
        width={1920}
        alt="Hero"
        style={{
          position: 'absolute',
          height: '650px', // 设置固定高度
          objectFit: 'cover', // 控制图片填充方式
        }}
      />

    <div className="absolute bottom-0">
        <Image
          className="mx-auto"
          src={BottomBgImage}
          alt="Hero"
          style={{
            position: 'absolute',
            width:'1920px',
            height: '1220px', // 设置固定高度
            objectFit: 'cover', // 控制图片填充方式
          }}/>
      </div>

      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>

      <Image className="" src={FooterImg} width={1920} height={304} alt="Hero" />

    </div>
  );
}
