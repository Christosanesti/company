import React from 'react'
import "./contact.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const variants={
	initial:{
		y:500,
		opacity:0
	},
	animate:{
		y:0,
		opacity:1,
		transition:{
			duration:0.5,
			staggerChildren: 0.1,
		},
	},
};

const svgVariants = {
	hidden: { rotate: -180 },
	visible: { 
		rotate: 0,
		transition: { duration: 1 } 
	}
}

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 4.5,
			ease: "easeInOut"
		}
	}
}



const Contact = () => {

	const form = useRef();

	
	const ref = useRef();
	const isInView = useInView(ref,{margin:"100px"});

	


	const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs
	      .sendForm('service_m2n9qxu', 'template_a37imye', form.current, {
	        publicKey: 'FZmoluKjF8o9drMUz',
	      })
	      .then(
	        (result) => {
	          toast.success('پیغام شما با موفقیت ارسال شد!', { theme: "dark" })
	          e.target.reset();
	        },
	        (error) => {
	          toast.error('در ارسال پیام خطایی رخ داده! لطفا مجددا تلاش کنید.', { theme: "dark" })
	        },
	      );
	  };
	
	
	return (
		<motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}>با ما دیده شوید</motion.h1>
				<motion.div variants={variants} className="item">
					<h2>ایمیل</h2>
					<span>navophoto@protonmail.com</span>
				</motion.div>
				<motion.div variants={variants} className="item">
					<h2>آدرس</h2>
					<a href="geo:35.700438337976244, 51.31952143107724" target="_blank">
						<span>تهران، بعد از ایستگاه مترو بیمه، پلاک ۱۳، کارخانه نوآوری آزادی</span>
					</a>
				</motion.div>
				<motion.div variants={variants} className="item">
					<h2>تلفن</h2>
					<a href="tel:+982144640251"><span>۰۲۱-۴۴۶۴۰۲۵۱</span></a>
					
				</motion.div>
			</motion.div>

			<div className="formContainer">
				
				<motion.div className="phoneSvg" initial={{ opacity:1 }} whileInView={{opacity:0}} transition={{ delay:3, duration:1 }}>
					
					<motion.svg variants={svgVariants} initial="hidden" whileInView="visible" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
							 width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
						<g>
							<motion.path variants={pathVariants} initial="hidden" whileInView="visible" fill="#231F20" d="M59,29H47c-1.657,0-3,1.344-3,3s1.343,3,3,3h12c1.657,0,3-1.344,3-3S60.657,29,59,29z M59,33H47
								c-0.553,0-1-0.447-1-1s0.447-1,1-1h12c0.553,0,1,0.447,1,1S59.553,33,59,33z"/>
							<motion.path variants={pathVariants} initial="hidden" whileInView="visible" fill="#231F20" d="M57.312,44.57l-11.275-4.104c-1.559-0.566-3.279,0.236-3.846,1.793c-0.566,1.556,0.235,3.277,1.793,3.845
								l11.276,4.105c1.558,0.565,3.278-0.238,3.845-1.793C59.672,46.858,58.87,45.137,57.312,44.57z M57.227,47.731
								c-0.189,0.521-0.763,0.786-1.281,0.598l-11.277-4.104c-0.52-0.189-0.786-0.762-0.598-1.281c0.189-0.52,0.763-0.788,1.282-0.599
								l11.276,4.104C57.148,46.638,57.416,47.212,57.227,47.731z"/>
							<motion.path variants={pathVariants} initial="hidden" whileInView="visible" fill="#231F20" d="M46.036,23.53l11.276-4.104c1.557-0.566,2.359-2.289,1.793-3.843c-0.566-1.558-2.288-2.362-3.846-1.796
								l-11.275,4.105c-1.559,0.566-2.36,2.289-1.794,3.846C42.757,23.294,44.479,24.098,46.036,23.53z M44.668,19.772l11.276-4.104
								c0.519-0.188,1.093,0.079,1.281,0.599c0.189,0.52-0.078,1.092-0.597,1.281l-11.277,4.104c-0.52,0.189-1.093-0.078-1.281-0.598
								C43.881,20.534,44.148,19.962,44.668,19.772z"/>
							<motion.path variants={pathVariants} initial="hidden" whileInView="visible" fill="#231F20" d="M21,22h9c2.211,0,4-1.789,4-4V4c0-2.211-1.789-4-4-4H14c-0.52,0-1.039,0.105-1.527,0.309
								c-0.492,0.203-0.938,0.496-1.309,0.871C10.766,1.578,2,12,2,32s8.316,29.688,8.672,30.219c0.113,0.172,0.262,0.309,0.395,0.457
								c0.062,0.066,0.109,0.137,0.176,0.199c0.328,0.316,0.699,0.562,1.102,0.742c0.086,0.043,0.176,0.07,0.266,0.102
								C13.055,63.883,13.52,64,13.992,64C13.996,64,14,64,14,64h12h4c2.211,0,4-1.789,4-4V46c0-2.211-1.789-4-4-4h-9
								c-0.553,0-1-0.447-1-1V23C20,22.447,20.447,22,21,22z M26,2h4c1.103,0,2,0.897,2,2v14c0,1.103-0.897,2-2,2h-4V2z M22,2h2v18h-2V2z
								 M26,44h4c1.103,0,2,0.897,2,2v14c0,1.103-0.897,2-2,2h-4V44z M22,44h2v18h-2V44z M18,22v20c0,1.104,0.896,2,2,2v18h-6.008
								c-0.175,0-0.407-0.053-0.726-0.17l-0.09-0.031c-0.006-0.002-0.012-0.005-0.018-0.008c-0.18-0.08-0.338-0.183-0.493-0.323
								c-0.04-0.047-0.08-0.095-0.123-0.141c-0.045-0.05-0.091-0.1-0.138-0.148c-0.03-0.032-0.062-0.063-0.071-0.072
								c-0.031-0.047-0.099-0.14-0.203-0.274C9.687,57.643,4,48.447,4,32c0-19.467,8.524-29.346,8.586-29.414
								c0.179-0.18,0.397-0.324,0.655-0.431C13.488,2.053,13.744,2,14,2h6v18C18.896,20,18,20.896,18,22z"/>
						</g>
					</motion.svg>

				</motion.div>

				<motion.form ref={form} onSubmit={sendEmail} initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration:1 }}>
					<input type="text" required placeholder="نام" name="name" onInvalid={e => e.target.setCustomValidity('لطفا تمامی فیلدهای ارتباطی را کامل نمایید')}  />
					<input type="email" required placeholder="ایمیل" name="email" onInvalid={e => e.target.setCustomValidity('لطفا تمامی فیلدهای ارتباطی را کامل نمایید')} />
					<textarea rows={8} placeholder="پیغام" name="message" onInvalid={e => e.target.setCustomValidity('لطفا تمامی فیلدهای ارتباطی را کامل نمایید')} />
					<button type="submit" value="Send">ارسال</button>


					<ToastContainer rtl={true} />
					
				</motion.form>

			</div>
		</motion.div>
	)
}

export default Contact