import Image from 'next/image'
import mainImg from '../assets/farm_frances-gunn.jpg'

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="bg-beige-100 max-w-[1440px] m-auto">
      <Header />
      <main className="relative pb-12">
        <Image className='max-h-[679px] w-full object-cover' src={mainImg} alt="Celeiro Vermelho em uma área verde" />
        <p className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[88px] leading-[110px] max-w-[714px] text-center text-brown-700 bg-beige-100/50 rounded-lg ">
          Bem vindo à Fazenda Coração! 
        </p>
      </main>
    </div>
  )
}
