import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  h-10
  flex
  w-full
  items-center 
  justify-between
  p-2
  lg:p-10
  absolute
`

const Brand = tw.section`
  w-64
  flex
  items-center
  justify-between
  font-extrabold
  cursor-pointer
`

const BrandName = tw.header`
  items-center
  flex
  h-8
`

const BrandPrimary = tw.h1`
  skew-x-[-16deg]
  bg-foreground 
  px-3
  py-2
`

const BrandSecondary = tw.h1`
  skew-x-[-16deg]
  bg-accent 
  px-3
  py-2
`

const Menubar = tw.section`
  h-8  
  flex
  font-medium
  items-center
  cursor-pointer
`

const MenuItem = tw.div`
  px-4
  py-2
  skew-x-[-16deg]
  hover:bg-foreground 
  hover:text-accent
  transition-all
  duration-700
  text-xs
  dark:text-background
  uppercase
`

export { Brand, BrandName, BrandPrimary, BrandSecondary, Menubar, MenuItem, NavContainer }