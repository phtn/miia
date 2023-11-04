import tw from 'tailwind-styled-components'

const PrimaryPaint = tw.div`
  h-14
  bg-accent
  skew-x-[10deg]
  border
  border-foreground
  items-center
  justify-center
  flex
  overflow-hidden
`

const PrimaryLabel = tw.div`
  skew-x-[-10deg]
  text-[2rem]
  font-thin
`

const SecondaryPaint = tw.div`
  h-10
  bg-foreground
  skew-x-[10deg]
  border
  border-accent
  items-center
  justify-center
  flex
  overflow-hidden
  relative
  mt-[-6px] 
`

const SecondaryLabel = tw.div`
  skew-x-[-10deg]
  text-xs
  font-medium
  text-accent
  uppercase
  tracking-widest
`

export { PrimaryPaint, PrimaryLabel, SecondaryLabel, SecondaryPaint }
