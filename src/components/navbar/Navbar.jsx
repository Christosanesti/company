import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
	return (
		<div className="navbar">
			{/*Sidebar*/}
			<Sidebar />
			<div className="wrapper">
				<motion.span 
					initial={{ opacity:0, scale:0.5 }} 
					animate={{ opacity:1, scale:1 }}
					transition={{ duration: 0.7 }}>RADiX. 
				</motion.span>
				<div className="social">
					
					<a href="https://www.instagram.com/radix_iran/" target="_blank"><img src="/insta.png" alt="This image has been downloaded from www.icons8.com" /></a>
					
					<a href="https://www.linkedin.com/company/iranradix/" target="_blank"><img src="/linkedin.png" alt="This image has been downloaded from www.icons8.com" /></a>



				</div>
			</div>
		</div>
	)
}

export default Navbar