import Image from 'next/image'
import LogoImage from '/public/images/white-logo.png'
import { Nav } from '..'

export const Header = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <Image src={LogoImage} width={130} height={130} alt="로고이미지" />
        <Nav />
      </div>
    </div>
  )
}
