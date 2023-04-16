import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePages from './views/hompage/HomePages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <HomePages/>
  )
}
