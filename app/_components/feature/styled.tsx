import tw from 'tailwind-styled-components'

const FeatureContainer = tw.div`
  h-screen
  w-full
  bg-[url('/images/lobby-light.jpg')]
  bg-contain
  md:bg-cover
  bg-no-repeat
`

const TopSection = tw.section`
  h-[calc(100vh-30%)]
  w-full
  md:py-16
  grid
  grid-cols-5
`

const TopPrimary = tw.section`
  col-span-1
  h-full
  items-center
  justify-center
  px-6
  
`

const TopPrimaryContent = tw.div`
  h-full
  w-full
  backdrop-blur-lg
  items-center
  justify-center
  p-5
`

const TopSecondary = tw.section`
  h-full
  col-span-4
`

const BottomSection = tw.section`
  h-[calc(100vh-70%)]
  w-full
  flex
`

export {
	FeatureContainer,
	TopSection,
	TopPrimary,
	TopPrimaryContent,
	TopSecondary,
	BottomSection,
}
