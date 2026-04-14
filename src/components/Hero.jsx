import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent:  100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200, rotate: 100 }, 0)
	.to(".left-leaf", { y: -200, rotate: -100 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 40%" : "center 70%";
	const endValue = isMobile ? "160% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: "+=200%",
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration * 1.5,
	 });
	};
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title">Strawberry Milkshake</h1>
		
		<img
		 src="/images/strawberry.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/strawberry1.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-10 hidden md:block">
			 <p>Thick. Creamy. Delicious.</p>
			 <p className="subtitle">
				Sip on your
				<br />
				 childhood
				</p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Discover our signature milkshakes, crafted with love and the finest ingredients,
				 designed to delight your taste buds and evoke sweet memories.
			 </p>
			 <a href="#cocktails">View Milkshakes</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video absolute inset-0" >
		<video
	     ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/final.mp4"
		/>
	 </div>
	</>
 );
};

export default Hero;