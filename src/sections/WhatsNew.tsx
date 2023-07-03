'use client';

import { TitleText, TypingText } from '@/components/CustomText';
import NewFeatures from '@/components/NewFeatures';
import { newFeatures } from '@/constants';
import styles from '@/styles';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { motion, stagger } from 'framer-motion'


const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >       

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title="| What's new?" textStyles='text-center' />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {
              newFeatures.map((feature) => (
                <NewFeatures
                  key={feature.title}
                  {...feature}
                />
              ))
            }
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="/whats-new.png"
            alt="whats-new"
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew