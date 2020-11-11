import React from 'react'

const CarContainer = ({ children, className }) => (
  <section className={`container mx-auto my-12 py-20 px-10 | rounded-lg | shadow-xl | stack-gap-y-19 | bg-white | ${className || ''}`}>
    {children}
  </section>
)

export default CarContainer