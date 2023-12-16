'use client'

import Image from 'next/image'
import mainImage from '/public/images/main02.png'
import { AboutMeSection } from '@/components'
import Projects from '@/components/Projects/Projects'
import { MainText } from './_components'

export default function Home() {
  return (
    <main>
      <div className="w-full h-[100vh] flex flex-row items-center">
        <div className="mb-[4rem] ml-[4rem]">
          <Image src={mainImage} width={500} height={400} alt="main 이미지" />
        </div>
        <MainText />
      </div>
      <div className="h-[100vh]">
        <AboutMeSection />
      </div>
      <div className="h-[100vh] mt-[4rem] flex flex-row justify-between">
        <div className=" text-[2rem]">
          <div>프로젝트에 대한 설명구간</div>
        </div>
        <Projects />
      </div>
    </main>
  )
}
