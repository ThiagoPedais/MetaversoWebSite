'use client';

import { TitleText, TypingText } from '@/components/CustomText';
import NewFeatures from '@/components/NewFeatures';
import styles from '@/styles';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { motion, stagger } from 'framer-motion'


const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| People on the World' textStyles='text-center' />
        <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center' />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='relative mt-[68px] flex w-full h-[550px]'
        >
          <img
            src="/map.png"
            alt="map"
            className='w-full h-full object-cover'
          />

          {/* <div className="absolute top-1/2 left-[15%] w-[270px] h-[170px] p-[6px] rounded-md bg-[#5d6680]">
            <img
              src="/Rectangle.png"
              alt="card"
              className='w-full h-full'
            />
          </div> */}

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/people-03.png"
              alt="people"
              className='w-full h-full'
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/people-02.png"
              alt="people"
              className='w-full h-full'
            />
          </div>
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/people-01.png"
              alt="people"
              className='w-full h-full'
            />
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default World