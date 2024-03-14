'use client'
import { MotionConfig, useScroll, useTransform } from 'framer-motion';
import { MotionValue } from 'framer-motion/dom';
import Image, { StaticImageData } from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion';


const Section: React.FC<{
    image: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({ image, tag, title, description }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])

    return (
        <section ref={sectionRef} className='relative h-screen overflow-hidden '>
            <motion.div className="w-full absolute h-[120%] -z-10 " style={{ top: y}} >
                <div className=' absolute bg-black/30 z-10 inset-0' />
                <Image src={image} alt={title} fill className=' object-cover' />
            </motion.div>
            <div className=" flex flex-col gap-4 p-24">
                <span className=' uppercase text-xs'>{tag}</span>
                <h1 className=' font-serif text-4xl max-w-[25ch]'>{title}</h1>
                <p className=' max-w-[50ch]'>{description}</p>
            </div>
        </section>
    )
}

export default Section