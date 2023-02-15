import React from 'react'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

//! IMAGES
import flowersMain from "@/public/decoration/flowers-main.png.webp";
import leaving from "@/public/slider/leaving.png";
import arholma from "@/public/slider/arholma.png";
import sunset from "@/public/slider/sunset.png";
import whisky from "@/public/slider/whisky.png";
import walks from "@/public/slider/walks.png";
import mountain from "@/public/slider/mountain.png";
import venice from "@/public/slider/venice.png";
import jacket from "@/public/slider/jacket.png";
import austria from "@/public/slider/austria.png";
import chloeplace from "@/public/slider/chloeplace.png";
import walks2 from "@/public/slider/walks2.png";
import climbers from "@/public/slider/climbers.png";
import water from "@/public/slider/water.png";
import smart from "@/public/slider/smart.png";
import hyde from "@/public/slider/hyde.png";
import henge from "@/public/slider/henge.png";

const Slider = () => {

	const [sliderRef] = useKeenSlider(
		{
		  loop: true
		},
		[
		  (slider) => {
			let timeout;
			let mouseOver = false;
			function clearNextTimeout() {
			  clearTimeout(timeout);
			}
			function nextTimeout() {
			  clearTimeout(timeout);
			  if (mouseOver) return;
			  timeout = setTimeout(() => {
				slider.next();
			  }, 4000);
			}
			slider.on("created", () => {
			  slider.container.addEventListener("mouseover", () => {
				mouseOver = true;
				clearNextTimeout();
			  });
			  slider.container.addEventListener("mouseout", () => {
				mouseOver = false;
				nextTimeout();
			  });
			  nextTimeout();
			});
			slider.on("dragStarted", clearNextTimeout);
			slider.on("animationEnded", nextTimeout);
			slider.on("updated", nextTimeout);
		  }
		]
	  );


  return (
	<div ref={sliderRef} className='keen-slider'>
	<Image
	  src={mountain}
	  alt='mountain'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={walks2}
	  alt='walks2'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={sunset}
	  alt='sunset'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={chloeplace}
	  alt='chloeplace'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={henge}
	  alt='henge'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={hyde}
	  alt='hyde'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={climbers}
	  alt='climbers'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={mountain}
	  alt='mountain'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={water}
	  alt='water'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={arholma}
	  alt='arholma'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={austria}
	  alt='austria'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={jacket}
	  alt='jacket'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={leaving}
	  alt='leaving'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={walks}
	  alt='walks'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={venice}
	  alt='venice'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={whisky}
	  alt='whisky'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
	<Image
	  src={smart}
	  alt='smart'
	  className='keen-slider__slide number-slidex'
	  height={400}
	  width={1000}
	/>
  </div>
  )
}

export default Slider