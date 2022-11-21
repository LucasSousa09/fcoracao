import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { ListItem } from './ListItem'

export function Header(){
  return (
    <header className="flex py-5 px-12 items-center justify-between">
      <Image src={logoImg} alt="Logo Fazenda Coração" />
      <nav className="flex list-none gap-10 items-center">
        <ListItem linkName='Sobre' linkRef='#' />
        <ListItem linkName='Atividades' linkRef='#'/>
        <ListItem linkName='Pacotes' linkRef='#'/>
        <ListItem linkName='Login' linkRef='#'/>
        <ListItem linkName='Faça a sua Reserva' linkRef='#' variant='booking'/>
      </nav>
    </header>
  )
}