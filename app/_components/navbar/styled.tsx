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
  flex
  items-center
  justify-between
  w-44
`

const BrandName = tw.h1`
  font-extrabold
  hidden
  border
  border-accent
  text-md
`

export { Brand, BrandName, NavContainer }