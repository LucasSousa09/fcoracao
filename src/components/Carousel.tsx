import Image from 'next/image'

import { MouseEvent, useRef, useState } from 'react'

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

import pizzaImg from '../assets/chad-montano-food.jpg'
import trailImg from '../assets/jeffrey-keenan-trail.jpg'
import lakeImg from '../assets/aaron-burden-lake.jpg'
import cattleImg from '../assets/david-dolenc-cattle.jpg'

const carouselImgs = [
  {
    src: pizzaImg,
    alt: 'Pizza em cima de uma táboa de cortar'
  },
  {
    src: trailImg,
    alt: 'Trilha de pedras em uma floresta'
  },
  {
    src: lakeImg,
    alt: 'Um pier de madeira em um lago'
  },
  {
    src: cattleImg,
    alt: 'Cinco vacas pastando'
  },    
]

export function Carousel(){
  const carousel = useRef<HTMLDivElement>(null)

  const [ carouselMove, setCarouselMove ] = useState(false)
  const [ mousePosition, setMousePosition ] = useState(0)

  function handleClickLeft(){
    if(carousel.current){
      carousel.current.scrollLeft -= 487
    }  
  }

  function handleClickRight(){
    if(carousel.current){
      carousel.current.scrollLeft += 487
    }  
  }

  function handleMouseDown(){
    if(carousel.current){
      carousel.current.style.cursor = 'grabbing'
    }
    setCarouselMove(true)
  }

  function handleMouseUp(){
    if(carousel.current){
      carousel.current.style.cursor = 'grab'
    }
    setCarouselMove(false)
  }

  function handleMouseMove(e: MouseEvent){
    
    setMousePosition(e.clientX)
    if(carousel.current && carouselMove){
      if(e.clientX > mousePosition){
        carousel.current.scrollLeft -= e.clientX - mousePosition
      }
      if(e.clientX < mousePosition){
        carousel.current.scrollLeft -= e.clientX - mousePosition
      }
    }
  }

  function handleMouseEnter(){
    if(carousel.current){
      carousel.current.style.cursor = 'grab'
    }
  }

  return (
    <div className='relative pt-12'>
      <button className="absolute right-12 top-0" onClick={handleClickLeft}>
        <ArrowCircleLeft className='text-brown-700' size={40} weight='fill'/>
      </button>
      <button className="absolute right-0 top-0" onClick={handleClickRight}>
        <ArrowCircleRight className='text-brown-700' size={40} weight='fill'/>
      </button>
      <div 
        className="flex gap-8 overflow-hidden scroll-smooth hover:scroll-auto"
        ref={carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCarouselMove(false)}
        onMouseEnter={handleMouseEnter}
      >
        {
          carouselImgs.map((img) => <Image draggable={false} className="min-w-[455px] w-[455px] h-[440px] object-cover object-center rounded-lg" src={img.src} alt={img.alt} />)
        }
      </div>
    </div>
)}