import React from 'react'
import "./services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const variants ={
	initial:{
		x:-500,
		y:100,
		opacity: 0

	},
	animate:{
		x:0,
		opacity:1,
		y: 0,
		transition:{
			duration: 1,
			staggerChildren: 0.1,
		},

	},
};

const Services = () => {

	const ref = useRef();

	const isInView = useInView(ref,{margin:"100px"});

	return (
		<motion.div className="service" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"} >
			<motion.div className="textContainer" variants={variants}>
				<p>نوآوری در بازار آنلاین و تمرکز در <br/>فروش دیجیتال</p><hr/>
			</motion.div>
			
			<motion.div className="titleContainer" variants={variants}>
				
				<div className="title">
					<img src="/people.webp" alt=""/>
					<h1>
						<motion.b whileHover={{color: "orange"}}>ایده </motion.b>
						پردازی برای
					</h1>
				</div>

				<div className="title">
					
					<h1>
						
						کسب و کار 
						<motion.b whileHover={{color: "orange"}}> نو پا </motion.b>
					</h1>
					<a href="#Contact"><button>ثبت درخواست مشاوره</button></a>
				</div>

			</motion.div>


			<motion.div className="listContainer" variants={variants}>

				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>برنامه نویسی</h2>
					<p>طراحی سایت های Ticketing, Booking, Reservation, Blog, Forum در اشل های فرانت و بک اند با/بدون Database.</p>
					
				</motion.div>

				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>Wordpress</h2>
					<p>طراحی و اجرای سایت های فروشگاهی و ویترینی. Landing Page ترکیبی و استاتیک. </p>
					
				</motion.div>

				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>برند سازی و تبلیغات</h2>
					<p>هویت سازی و افزایش آمار بازدید. طراحی اختصاصی Figma. لوگوی تجاری و بروشور. افزایش بازدید در اینستاگرام و ساخت رباتهای تلگرامی.</p>
					
				</motion.div>

				<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
					<h2>تولید محتوا</h2>
					<p>ترجمه و تولید محتوا به زبانهای فارسی و انگلیسی با/بدون هوش مصنوعی. SEO و مشاوره.</p>
					
				</motion.div>

			</motion.div>
			
		</motion.div>
	)
}

export default Services