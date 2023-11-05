import { Button, ButtonProps } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

const BodyContainer = tw.div`
  flex
  flex-col
  bg-[url('/images/sydney-v1.jpg')]
  md:bg-cover
  bg-[length:600px_400px]
  bg-no-repeat
  h-screen
  w-full
`

const HeroContainer = tw.div`
  flex
  items-end
  justify-center
  h-full
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
  h-10
  flex
  animate-in
  items-center
  bg-gradient-to-br
  from-accent
  to-accent
  skew-x-[-16deg]
  px-10
  md:h-24
  md:px-0
  flex-nowrap
  md:hover:px-8
  transition-all
  duration-700
  backdrop-blur-md
`

const HeroSecondary = tw.div`
  animate-in
  h-8s
  flex
  items-center
  justify-between
  bg-foreground
  md:bg-foreground
  skew-x-[-16deg]
  px-6
  border-accent
  md:h-16
  md:px-24
  md:hover:px-28
  transition-all
  duration-500
`
const HeroLabelContainer = tw.div`
  skew-x-[16deg]
  flex
`

const PrimaryLabel = tw.h2`
  text-foreground
  text-md
  tracking-tight
  font-extrabold
  md:text-[3.5rem]
`

const SecondaryLabel = tw.h2`
  text-accent
  text-sm
  py-1
  md:text-[1.5rem]
  px-6
  md:px-6
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
  py-10
`

const ActionButton = tw(Button)<ButtonProps>`
`

const WidgetContainer = tw.div`
  flex
  items-end
  justify-end
  h-full
  py-3
  px-4
  overflow-hidden
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
