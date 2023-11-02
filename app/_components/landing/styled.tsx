import { Button, ButtonProps } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

const BodyContainer = tw.div`
  flex
  flex-col
  bg-[url('/images/sydney-v1.jpg')]
  bg-cover
  h-screen
  w-full
`

const HeroContainer = tw.div`
  flex
  items-end
  justify-center
  h-[calc(100vh-40%)]
  md:h-[calc(100vh-65%)]
  w-full
`

const HeroContent = tw.section`
  flex
  flex-col
  items-center
  justify-center
  w-[calc(100vw-10%)]
`

const HeroPrimary = tw.div`
  animate-in
  h-12
  flex
  items-center
  bg-accent
  skew-x-[-16deg]
  px-10
  md:h-24
  md:px-0
  flex-nowrap
  md:hover:px-16
  transition-all
  duration-1000
`

const HeroSecondary = tw.div`
  animate-in
  h-12
  flex
  items-center
  justify-between
  bg-foreground
  skew-x-[-16deg]
  px-6
  border-accent
  md:h-16
  md:px-24
  md:hover:px-32
  transition-all
  duration-1000
  

`
const HeroLabelContainer = tw.div`
  skew-x-[16deg]
  flex
`

const PrimaryLabel = tw.h2`
  text-foreground
  text-xl
  font-extrabold
  md:text-[3.5rem]
`

const SecondaryLabel = tw.h2`
  text-accent
  md:text-[1.5rem]
  font-medium
  px-6
  md:px-6
  uppercase
`

const Ornament = tw.div`
  skew-x-[-8deg]
  border-[1px]
  border-card/25
  rounded-full
  flex
  items-center
  justify-center
  md:p-2
  p-1
`

const ActionContainer = tw.section`
  flex
  items-center
  justify-center
  w-full
  py-12
`

const ActionButton = tw(Button) <ButtonProps>`
`

const WidgetContainer = tw.div`
  flex
  items-end
  justify-end
  md:h-[calc(100vh-52%)]
  py-3
  px-4
`

export {
  ActionButton,
  ActionContainer,
  BodyContainer,
  HeroContainer,
  HeroContent,
  HeroPrimary,
  HeroLabelContainer,
  HeroSecondary,
  PrimaryLabel,
  SecondaryLabel,
  Ornament,
  WidgetContainer,
}