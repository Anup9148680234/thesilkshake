import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about" >
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Best Milkshakes</p>
			<h2>
		       		At The Silk Shake we are dedicated to delivering the ultimate milkshake experience 
		
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 We are passionate about crafting the perfect milkshake experience. Our team of expert mixologists meticulously selects the finest ingredients, ensuring that every sip delivers a burst of flavor and satisfaction. From classic favorites to innovative creations, we take pride in our attention to detail, from the muddle to the garnish, to create unforgettable milkshake moments for our customers.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +12000 customers
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt1.png" alt="grid-img-1" />
		</div>
		
		<div className="md:col-span-6">
		 <div  className="noisy" />
		 <img src="/images/about1.avif" alt="grid-img-2" />
		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/about3.jpg" alt="grid-img-5" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src="/images/about2.avif" alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src="/images/abt4.png" alt="grid-img-4" />
		</div>
	 </div>
	 
	</div>
 )
}
export default About