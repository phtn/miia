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
import { ArrowDownCircleIcon, ArrowRightCircleIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { ActionProps, LandingProps } from './types'

const Landing = ({ scrollToFeature }: LandingProps) => {
	return (
		<BodyContainer>
			<Hero />
			<Action onClick={scrollToFeature} />
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
		<motion.div
			className='flex items-end justify-end h-[calc(100vh-40%)] md:h-[calc(100vh-52%)] py-3 px-4'
			initial={{ opacity: 0, x: 300 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.2, delay: 1.2 }}>
			<div className='flex backdrop-blur-md bg-foreground/25 h-32 w-44 rounded-lg ml-4 items-center justify-center'>
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
	)
}
export default Landing
