'use client'

import { useRef } from 'react'
import Landing from '../landing'
import Feature from '../feature'

const Body = () => {
	const featureRef = useRef<HTMLDivElement>(null)

	const scrollToFeature = () => {
		featureRef.current?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<>
			<Landing scrollToFeature={scrollToFeature} />
			<Feature featureRef={featureRef} />
		</>
	)
}

export default Body
