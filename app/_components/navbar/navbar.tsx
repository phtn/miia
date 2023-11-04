'use client'

import {
	Brand,
	BrandName,
	BrandPrimary,
	BrandSecondary,
	MenuItem,
	MenuListItem,
	Menubar,
	NavContainer,
} from './styled'
import { Switch } from '@/components/ui/switch'
import useToggleMode from '@/app/_hooks/useToggleMode'
import { ArrowRight, FramerIcon } from 'lucide-react'
import { IMenuItem } from './types'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const menuItems: IMenuItem[] = [
	{ id: 1, title: 'benefits of a mentee', link: '/benefits-of-a-mentee' },
	{ id: 2, title: 'meet a mentor', link: '/meet-a-mentor' },
	{ id: 3, title: 'join a class', link: '/join-a-class' },
	{ id: 4, title: 'services', link: '/services' },
	{ id: 5, title: 'contact', link: '/contact' },
]

const Navbar = () => (
	<NavContainer>
		<BrandModule />
		<MenubarModule />
		<ToggleMode />
	</NavContainer>
)

const BrandModule = () => (
	<Link href={'/'}>
		<Brand>
			<FramerIcon className='rotate-90 h-0 w-0 md:h-8 md:w-8 text-accent dark:text-foreground stroke-[1.5px]' />
			<BrandName>
				<BrandPrimary>
					<div className='skew-x-[16deg]'>
						<span className='text-accent'>Make it in</span>
					</div>
				</BrandPrimary>
				<BrandSecondary>
					<div className='skew-x-[16deg]'>
						<span className='text-foreground'>Australia</span>
					</div>
				</BrandSecondary>
			</BrandName>
		</Brand>
	</Link>
)

const MenubarModule = () => {
	const pathname = usePathname()
	return (
		<Menubar>
			{menuItems.map((item) => (
				<MenuListItem
					key={item.id}
					className={cn(pathname === item.link ? 'border-b-2' : 'border-b-0')}>
					<Link href={item.link}>
						<MenuItem title={item.title} />
					</Link>
				</MenuListItem>
			))}
		</Menubar>
	)
}

const ToggleMode = () => {
	const { checked, toggleMode } = useToggleMode()
	return (
		<div className='flex items-center justify-center'>
			<span className='text-xs bg-background px-2 py-1 rounded-full'>
				color modes
			</span>
			<ArrowRight className='h-4 w-4 dark:text-background mx-1' />
			<Switch
				checked={checked}
				onCheckedChange={toggleMode}
			/>
		</div>
	)
}

export default Navbar
