'use client';

import { TitleText, TypingText } from '@/components/CustomText';
import ExploreCard from '@/components/ExploreCard';
import { exploreWorlds } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion'
import { useState } from 'react';


const Explore = () => {

  const [active, setActive] = useState('world-2')


  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className='md:block hidden' /> to explore</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {
            exploreWorlds.map((world, index) => (
              <ExploreCard
                index={1}
                key={world.id}
                {...world}
                active={active}
                handleClick={setActive}
              />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Explore