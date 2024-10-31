import Image from 'next/image'
// import Icon01 from '@/public/images/integration-icon-01.svg'
// import Icon02 from '@/public/images/integration-icon-02.svg'
// import Icon03 from '@/public/images/integration-icon-03.svg'
// import Icon04 from '@/public/images/integration-icon-04.svg'
// import Icon05 from '@/public/images/integration-icon-05.svg'
// import Icon06 from '@/public/images/integration-icon-06.svg'
import Icon01 from '@/public/images/card-1.png'
import Icon02 from '@/public/images/card-2.png'
import Icon03 from '@/public/images/card-3.png'
import Icon04 from '@/public/images/card-4.png'
import Icon05 from '@/public/images/card-5.png'
import Icon06 from '@/public/images/card-6.png'
import icons from '@/public/images/icons.png'

export default function Integrations() {
  return (
    <section className="relative bg-black">
      {/* Bottom vertical line */}
      {/* <div className="hidden md:block absolute w-0.5 h-8 bottom-0  left-1/2 -translate-x-1/2" aria-hidden="true" /> */}
      {/* Hero content */}
      <div className="max-w-3xl mx-auto">

      <div className="max-w-6xl">
        <div className=" border-slate-800">    
          {/* Integration boxes */}
          <div className="relative max-w-xs sm:max-w-md mx-auto md:max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 md:mt-20">
            {/* Top vertical line */}
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon01} width={213} height={261} alt="Icon 01" />
              </div>
            </div>
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon02} width={213} height={261} alt="Icon 02" />
              </div>
            </div>
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon03} width={213} height={261} alt="Icon 03" />
              </div>
            </div>
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon04} width={213} height={261} alt="Icon 04" />
              </div>
            </div>
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon05} width={213} height={261} alt="Icon 05" />
              </div>
            </div>
            <div className="relative flex justify-center items-center  aspect-square p-2" data-aos="fade-up">
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-213 h-261 rounded-full flex justify-center items-center">
                {/* Icon */}
                <Image src={Icon06} width={213} height={261} alt="Icon 06" />
              </div>
            </div>
          </div>

          <div className="pt-32 md:pt-40">
            <h3 className="h4 font-hkgrotesk mb-6" data-aos="fade-up">
              AGI Open Network Community
            </h3>
            <div className="w-full md:w-1/2">
              <p className="text-xxl text-gray-400 mb-10" data-aos="fade-up" data-aos-delay="100">
              Learn about AGI Open Network, discuss with the team and other members in the community
              </p>
            </div>
          </div>

          <div className="pt-10 md:pt-10" data-aos="fade-up" data-aos-delay="300">
              <Image className="mx-auto" src={icons} width={1360} height={90} alt="Hero" />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}