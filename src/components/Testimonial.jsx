import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonials</h2>

      <section>
        <TestimonialCard name={"Raghav"} feedback={"your creations are awesome"} />
        
      </section>
    </div>
  )
}

const TestimonialCard=({name, feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='raghav'/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
