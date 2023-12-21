'use client'
import Media from '@/types/media';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Props {
    preHeading?: string;
    heading?: string;
    text?: ReactNode;
    media?: Media;
}

function TextAndMedia({
    preHeading,
    heading,
    text,
    media,
}: Props) {
    const imageContainerRef = useRef(null);
    const {scrollYProgress} = useScroll({ 
        target: imageContainerRef,
        offset: ["start end", "end start"],
    })
    const imageTransform = useTransform(() => 1 + (scrollYProgress.get() * 0.1));
    const imageInView = useInView(imageContainerRef, { margin: '0px 0px -20% 0px' })

    return (
        <div className='relative z-20'>
            <div className="grid grid-cols-2">
                <div className=' max-w-[540px] mr-16'>
                    {preHeading && (
                        <div className="-translate-y-[0.3em] text-[1.375rem] tracking-[0.125em] text-gray-500 uppercase font-sans mb-6">
                            {preHeading}
                        </div>
                    )}
                    {heading && (
                        <div className=" mt-6 mb-9 text-4xl text-gray-900 font-bold font-sans-tight">
                            {heading}
                        </div>
                    )}
                    {(preHeading || heading) && (
                        <hr className='border-gray-400 max-w-[154px] mt-9 mb-11' />
                    )}
                    {text && (
                        <div className="text-gray-800 font-serif text-2xl leading-normal">
                            {text}
                        </div>
                    )}
                </div>
                <div>
                    <div ref={imageContainerRef} className='relative overflow-hidden border border-gray-400 pt-[100%]'>
                        {!!media && (media.isVideo ? <></> : (
                            <div className="absolute inset-0" /* style={{ transform: `translateY(-${imageDistance}px)` }} */>
                                <motion.img
                                    src={media.src}
                                    alt={media.alt}
                                    width={media.width}
                                    height={media.height}
                                    className='w-full origin-center'
                                    style={{
                                        scale: imageTransform
                                    }}
                                />
                            </div>
                        ))}
                        <div className="absolute inset-0 w-full h-full">
                            <motion.div
                                className="w-[200%] h-[200%] bg-white/50 transition-transform duration-[2000ms]"
                                style={{
                                    x: imageInView ? '35.5%' : '-25%',
                                    y: imageInView ? '35.5%' : '-25%',
                                    rotate: 45,
                                }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextAndMedia