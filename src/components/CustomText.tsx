'use client'

import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';
import { ReactNode } from 'react'

interface TypingTextProps {
    title: string;
    textStyles: ReactNode;
}

interface TitleTextProps {
    title: ReactNode;
    textStyles?: ReactNode;
}



export const TypingText = ({ title, textStyles }: TypingTextProps) => {
    return (
        <motion.p
            variants={textContainer}
            className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
        >

            {
                Array.from(title).map((letter, index) => (
                    <motion.span
                        variants={textVariant2}
                        key={index}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))
            }
        </motion.p>
    )
}

export const TitleText = ({ title, textStyles }: TitleTextProps) => {
    return (
        <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
        >
            {title}
        </motion.h2>
    )
}