import React from 'react'
import "./hero.scss"
import { motion } from "framer-motion"




const textVariants = {
	initial: {
		x: 1000,
		opacity: 0,
	},

	animate: {
		x: 0,
		opacity:1,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
		},
	},
	scrollButton:{
		opacity: 0,
		y:10,
		transition:{
			duration:2,
			repeat: Infinity,
		}
	}
}

const sliderVariants = {
	initial: {
		x:-4500,
	},
	animate: {
		x:"220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,

		},
	},
	
}

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
					<motion.h2 variants={textVariants} >گروه متخصصان رادیکس</motion.h2>
					<motion.h1 variants={textVariants} >تبلیغات || طراحی || فناوری || ایده پردازی</motion.h1>
					<motion.div className="buttons" variants={textVariants}>
						
						
						
						<a href="#About"><motion.button variants={textVariants}>میخواهم بیشتر بدانم</motion.button></a>
					</motion.div>
					<motion.img animate="scrollButton" variants={textVariants} src="/scroll.png" alt="" />
				</motion.div>
			</div>

			<motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
				تبلیغات افزایش فروش جذب مشتری 
			</motion.div>		

			<div className="imageContainer">
				<img src="/radix.png" alt="" />
			</div>
		</div>
	)
}

export default Hero