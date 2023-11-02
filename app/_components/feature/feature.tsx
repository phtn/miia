import { RefObject, useEffect } from 'react'
import {
	BottomSection,
	FeatureContainer,
	TopPrimary,
	TopPrimaryContent,
	TopSecondary,
	TopSection,
} from './styled'
import { motion, useAnimate, useInView } from 'framer-motion'
import { PrimaryBanner, SecondaryBanner } from '../widgets/widgets'

type FeatureProps = {
	featureRef: RefObject<HTMLDivElement>
}

const Feature = ({ featureRef }: FeatureProps) => {
	return (
		<FeatureContainer ref={featureRef}>
			<TopPanel />
			<BottomSection>
				<div className='border h-full w-64 items-center justify-center flex'>
					<span className='text-accent'>Voucher</span>
				</div>
				<div className='border h-full w-64 items-center justify-center flex'>
					<span className='text-accent'>Voucher</span>
				</div>
			</BottomSection>
		</FeatureContainer>
	)
}

const TopPanel = () => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView) {
			animate(scope.current, { height: 500 }, { duration: 1.2, delay: 0.5 })
		}
	}, [isInView])

	return (
		<TopSection>
			<motion.section
				initial={{ height: 0, overflow: 'hidden' }}
				ref={scope}>
				<TopPrimary>
					<TopPrimaryContent>
						<PrimaryBanner text='Westin' />
						<SecondaryBanner text='Singapore' />
					</TopPrimaryContent>
				</TopPrimary>
			</motion.section>
			<TopSecondary></TopSecondary>
		</TopSection>
	)
}

export default Feature
