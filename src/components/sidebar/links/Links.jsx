import React from 'react'
import { motion } from "framer-motion"

const Links = () => {
	const variants = {
		open:{
			transition:{
				staggerChildren:0.1

			}
		},

		closed:{
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1
			}

		}
	}

	const itemVariants = {
		open: {
			y:0,
			opacity: 1,

		},

		closed: {
			y:50,
			opacity: 0,
		},

	}
	
	

	return (
		<motion.div className="links">
			<motion.a href="#Homepage" variants={itemVariants} transition={{ delay: 0.03 }} whileHover={{ scale:1.1 }} whileTap={{ scale:.95 }}>صفحه اصلی</motion.a>
			<motion.a href="#Services" variants={itemVariants} transition={{ delay: 0.06 }} whileHover={{ scale:1.1 }} whileTap={{ scale:.95 }}>خدمات</motion.a>
			<motion.a href="#About" variants={itemVariants} transition={{ delay: 0.09 }} whileHover={{ scale:1.1 }} whileTap={{ scale:.95 }}>درباره ما</motion.a>
			<motion.a href="#Contact" variants={itemVariants} transition={{ delay: 0.12 }} whileHover={{ scale:1.1 }} whileTap={{ scale:.95 }}>تماس</motion.a>
			

		</motion.div>
		
		
	)
}

export default Links