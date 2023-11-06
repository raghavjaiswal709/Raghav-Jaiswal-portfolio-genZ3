import React from 'react'
import {motion} from "framer-motion"  
import { FaReact, FaNodeJs} from 'react-icons/fa';
import { SiExpress,SiMongodb} from 'react-icons/si';
// import { icons } from 'react-icons/lib'

const Services = () => {

    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },

        one:{
            opacity: 0,
            x: "-100%"
        },

        twoandthree:{
            opacity: 0,
            y: "-100%"
        },

        four:{
            opacity: 0,
            x: "100%"
        },
    }
  return (
    <div id='services'>
      <h2>Technologies i use</h2>
      <section>
        <motion.div className='serviceBox1'
        whileInView={animations.whileInView}
        initial={animations.one}>
        <p>Years of Experience</p>
        <h3>Fresher</h3>
        </motion.div>

        <motion.div className='serviceBox2'
        whileInView={animations.whileInView}
        initial={animations.twoandthree}>
        <FaReact />
        <span>React</span>
        </motion.div>

        <motion.div className='serviceBox3'
        whileInView={animations.whileInView}
        initial={animations.twoandthree}
        transition={{
            delay:0.2,
        }}>

        <div className='node'>
        <FaNodeJs />
        <SiExpress />
        </div>
        <span>Node and Express JS</span>
        </motion.div>

        <motion.div className='serviceBox4'
        whileInView={animations.whileInView}
        initial={animations.four}>
        <SiMongodb />
        <span>Mongo DB</span>
        </motion.div>

       
      </section>
    </div>
  )
}

export default Services
