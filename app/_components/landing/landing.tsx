import { Button } from '@/components/ui/button'
import {
	ActionContainer,
	BodyContainer,
	HeroContainer,
	HeroContent,
	HeroLabelContainer,
	HeroPrimary,
	HeroSecondary,
	Ornament,
	PrimaryLabel,
	SecondaryLabel,
	WidgetContainer,
} from './styled'
import {
	ArrowDownCircleIcon,
	ArrowRightCircleIcon,
	MessageCircleIcon,
	MessageSquareIcon,
	MessagesSquareIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { ActionProps, LandingProps } from './types'
import useMenuAnimation from '@/app/_hooks/useMenuAnimation'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Landing = ({ scrollToFeature }: LandingProps) => {
	return (
		<BodyContainer>
			<Hero />
			<Action onClick={scrollToFeature} />
			<ChatModule />
		</BodyContainer>
	)
}

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<motion.div
					initial={{ opacity: 0, x: -75 }}
					animate={{ opacity: 1, x: -25 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<HeroPrimary>
						<HeroLabelContainer>
							<PrimaryLabel>You can make it</PrimaryLabel>
						</HeroLabelContainer>
					</HeroPrimary>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 75 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<HeroSecondary>
						<HeroLabelContainer>
							<SecondaryLabel>in Australia</SecondaryLabel>
						</HeroLabelContainer>
					</HeroSecondary>
				</motion.div>
			</HeroContent>
		</HeroContainer>
	)
}

const Action = ({ onClick }: ActionProps) => {
	return (
		<ActionContainer>
			<motion.div
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.2, delay: 1 }}>
				<Button
					variant='secondary'
					size='fat'
					onClick={onClick}>
					<span className='text-foreground pr-6 '>Sign up today</span>
					<ArrowRightCircleIcon className='h-7 w-7 text-foreground stroke-[1.5px]' />
				</Button>
			</motion.div>
		</ActionContainer>
	)
}

const WidgetModule = () => {
	return (
		<WidgetContainer>
			<motion.div
				className='flex items-end'
				initial={{ opacity: 0, x: 300 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.2, delay: 1.2 }}>
				<div className='flex backdrop-blur-md bg-foreground/25 h-24 w-32 rounded-lg ml-4 items-center justify-center'>
					<span className='text-secondary text-lg font-bold bg-foreground px-4'>
						Widget - 1
					</span>
				</div>
				<div className='flex backdrop-blur-md bg-foreground/25 h-32 w-44 rounded-lg ml-4 items-center justify-center'>
					<span className='text-secondary text-lg font-bold bg-foreground px-4'>
						Widget - 2
					</span>
				</div>
			</motion.div>
		</WidgetContainer>
	)
}

const ChatModule = () => {
	const [isOpen, setIsOpen] = useState(false)
	const scope = useMenuAnimation(isOpen)

	return (
		<div
			className='flex flex-col h-full justify-end items-end'
			ref={scope}>
			<ul
				className='w-96 bg-foreground mr-16'
				style={{
					pointerEvents: isOpen ? 'auto' : 'none',
					clipPath: 'inset(10% 50% 90% 50% round 10px)',
				}}>
				<li className='h-16 text-background text-sm p-4 flex items-center'>
					<Avatar>
						<AvatarImage
							src='https://github.com/phtn.png'
							alt='@shadcn'
						/>
						<AvatarFallback>JO</AvatarFallback>
					</Avatar>
					<div className='h-8 px-3 justify-center flex flex-col'>
						<span className='text-lg font-extrabold'>Jun</span>
						<span className='text-xs text-lime-500'>online</span>
					</div>
				</li>
				<li className='h-16 text-foreground text-sm p-4'>
					<span className='bg-accent p-2 rounded-lg'>Hello there! 👋</span>
				</li>
				<li className='h-16 text-sm p-3'>
					<Input placeholder='type a message' />
				</li>
			</ul>{' '}
			<motion.button
				className='w-32 py-4 px-6 bg-accent border-[0.5px] border-foreground/5 drop-shadow-lg backdrop-blur-sm mr-16 mb-14 mt-2 flex items-center justify-between rounded-lg'
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}>
				<span className='text-lg text-foreground font-bold'>Chat</span>

				<MessagesSquareIcon className='text-foreground/50' />
			</motion.button>
		</div>
	)
}
export default Landing
