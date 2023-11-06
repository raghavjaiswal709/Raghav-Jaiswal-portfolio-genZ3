import React, { useRef } from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronBarDown} from "react-icons/bs"
import me from "../assets/photo_2023-10-24_11-54-59.jpg"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

const Home = () => {

    const clientCount = useRef(null);

    const animateClientsCount = ()=>{
        animate(100,0,{
            duration: 1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
        })
    }

    const projectsCount = useRef(null);

    const animateProjectsCount = ()=>{
        animate(100,5,{
            duration: 1,
            onUpdate:(v)=>(projectsCount.current.textContent = v.toFixed())
        })
    }

    const animations={
        h1:{
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
                x:0,opacity:1,
            },
        },

        button:{
            initial:{
                y:"-100%",
                opacity: 0,
            },
            whileInView:{
                y:0,opacity:1,
            }
        }
    }
  return (
    <div id='home'>
      <section>
        <div>
        <motion.h1{...animations.h1}>
            Hi, I Am <br /> Raghav Jaiswal
        </motion.h1>

        <Typewriter options={{
            strings: ["A Developer", "A Designer" , "A Creator"],
            autoStart: true,
            loop: true,
            wrapperClassName:"typewriterpara"

        }}/>
        <div>
        <a href="mailto:raghavjaiswal0000@gmail.com">
            Hire Me.
        </a>
        <a href="#work">
            Projects_ <BsArrowUpRight />
        </a>
        </div>
        <article>
            <p>
                +<motion.span whileInView={animateClientsCount} ref={clientCount}></motion.span>
            </p>
            <span>Clients WorldWide</span>
        </article>

        <aside>
        <article>
            <p>
                +<motion.span whileInView={animateProjectsCount} ref={projectsCount}></motion.span>
            </p>
            <span>Projects Made</span>
        </article>

        <article data-special>
            <p>
                Contacts
            </p>
            <span>raghavjaiswal0000@gmail.com</span>
        </article>
        </aside>
        </div>

      </section>
      <section>
        <img src={me} alt='Raghav' />
      </section>
      <BsChevronBarDown />
    </div>
  )
}

export default Home
