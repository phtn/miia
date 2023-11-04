import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  h-10
  flex
  w-full
  px-3
  py-10
  lg:p-10
  absolute
  items-center 
  justify-between
`

const Brand = tw.section`
  w-54
  flex
  md:w-64
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
  rounded-md
  md:px-3
  md:py-2
  px-1
  py-1
`

const BrandSecondary = tw.h1`
  skew-x-[-16deg]
  md:bg-accent 
  md:px-3
  px-1
  py-2
`

const Menubar = tw.section`
  h-8  
  lg:flex
  font-medium
  items-center
  cursor-pointer
  hidden
`

const MenuListItem = tw.div`
  px-4
  py-2
  text-xs
  uppercase
  duration-700
  transition-all
  skew-x-[-16deg]
  hover:text-accent
  hover:bg-foreground 
  dark:text-background
`

type MenuItemProps = {
	title: string
}
const Item = tw.div`
  font-bold
  skew-x-[16deg]
  tracking-widest
`
const MenuItem = ({ title }: MenuItemProps) => <Item>{title}</Item>

export {
	Brand,
	BrandName,
	BrandPrimary,
	BrandSecondary,
	Menubar,
	MenuItem,
	MenuListItem,
	NavContainer,
}
