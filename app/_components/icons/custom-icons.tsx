import Image from 'next/image'
import CrestSVG from '../../../public/svg/crest.svg'
import RookSVG from '../../../public/svg/rook.svg'
import TrophySVG from '../../../public/svg/trophy.svg'

type CustomIconProps = {
  size: number
}

const CrestIcon = ({ size }: CustomIconProps) => (
  <Image alt='crest' src={CrestSVG} height={size} width={size} />
)

const RookIcon = ({ size }: CustomIconProps) => (
  <Image alt='trophy' src={RookSVG} height={size} width={size} />
)

const TrophyIcon = ({ size }: CustomIconProps) => (
  <Image alt='trophy' src={TrophySVG} height={size} width={size} />
)

export { CrestIcon, RookIcon, TrophyIcon }


