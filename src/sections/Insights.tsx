'use client';

import { TitleText, TypingText } from '@/components/CustomText';
import InsightCard from '@/components/InsightCard';
import { insights } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { motion, stagger } from 'framer-motion'



const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Insights' textStyles='text-center' />
        <TitleText title={<>Insight about metaverse</>} textStyles='text-center' />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {
            insights.map((insight, index) => (
              <InsightCard
                key={`insight-${index}`}
                {...insight}
                index={index + 1}
              />
            ))
          }
        </div>


      </motion.div>
    </section>
  )
}

export default Insights