import Image from 'next/image'

import { Header } from "../components/Header";
import { Carousel } from '../components/Carousel'

import mainImg from '../assets/farm_frances-gunn.jpg'
import horsesImg from '../assets/horses-lucia-macedo.jpg'

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

      <section className="relative h-[840px] bg-brown-400 py-[72px] px-12 flex gap-12">
        <div className="before:content-[''] before:h-[6px] before:absolute before:top-12 before:right-12 before:left-12 before:bg-beige-100 before:rounded-[3px] text-4xl leading-[45px] text-beige-100 flex flex-col gap-12">
          <p>A Fazenda coração, fundada 1675 pelo grande Heart Banner foi sempre conhecida como sinonimo de paz e alegria.</p>
          <p>Com 347 anos de tradição o que era bom ficou ainda melhor! Sua culinária já característica nos lembra a íconica frase da música de Luiz Gonsaga: “Panela velha é que faz comida boa”.</p>
          <p>Além disso, em seus mais de 1375 hectares podemos encontrar lindas paisagens, represas naturais e belos animais.</p>
        </div>
        <Image className="max-w-[566px] object-cover object-left rounded-lg" src={horsesImg} alt="2 Cavalos atrás de uma cerca" />
      </section>

      <section className="relative h-[840px] bg-beige-100 py-[72px] px-12 flex flex-col gap-6">
        <div className="before:content-[''] before:h-[6px] before:absolute before:top-12 before:right-12 before:left-12 before:bg-brown-700 before:rounded-[3px] text-[32px] leading-[40px] text-brown-700 flex flex-col gap-4">
          <p>Além de provar alimentos característicos da região, na fazenda coração, você faz muito mais.</p>
          <p>Lindas trilhas para poder se achegar ainda mais à sua família.</p>
          <p>Represas naturais para poder se refrescar nos momentos de calor.</p>
          <p>Além de contato direto com os mansos animais do campo para momentos inesquecíveis</p>
        </div>

        <Carousel />
      </section>

    </div>
  )
}
