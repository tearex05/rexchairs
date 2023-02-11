import {useState} from 'react'
import ChairIcon from '../assets/ChairIcon'
import MenuIcon from '../assets/MenuIcon'

function Nav() {
	const [style, setStyle] = useState({
		nav: '-translate-x-full',
		rot: 'rotate-0'
	})
	const clickHandler = () => {
		if(style.nav === '-translate-x-full'){
			setStyle({
				nav: '-translate-x-0',
				rot: 'rotate-90'
			})
		} else {
			setStyle()
			setStyle({
				nav: '-translate-x-full',
				rot: 'rotate-0'
			})
		}
	}
	return (
		<>
		<span onClick={clickHandler} className={`fixed text-white top-0 right-0 z-20 w-1/12 md:hidden flex items-center justify-around m-3 cursor-pointer ${style.rot}`}>
			<MenuIcon />
		</span>
		<div className={`bg-black md:hidden flex flex-col fixed z-30 text-white h-screen w-1/2 items-center justify-around text-2xl font-black ${style.nav}`}>
			<p href="#chairs" className="hover:-rotate-6 cursor-pointer">Chairs</p>
			<p href="#contact-us" className="hover:-rotate-6 cursor-pointer">Contact US</p>
			<p href="#buy" className="hover:-rotate-6 cursor-pointer bg-white text-black p-2 rounded">Buy Now</p>
		</div>
		<header className="fixed bg-black z-10 top-0 p-4 md:flex items-center justify-between w-screen hidden">
			<a href="#home" className="text-white text-3xl font-black w-1/12 flex items-center justify-around"><ChairIcon /></a>
			<section className="text-white flex w-5/12 items-center justify-around">
				<a href="#chairs" className="cursor-pointer hover:text-slate-200">Chairs</a>
				<a href="#contact-us" className="cursor-pointer hover:text-slate-200">Contact Us</a>
				<a href="#buy" className="bg-white text-black rounded-2xl py-1 px-2 hover:bg-slate-200 cursor-pointer">Buy Now</a>
			</section>
		</header>
		</>
	)
}

export default Nav