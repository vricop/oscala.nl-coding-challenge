import React, { useState, useEffect } from 'react'
import Glide from '@glidejs/glide'
import currencyConverter from '../utils/currency-converter'

/*
 * TABLE OF CONTENTS
 *
 *  1. Header
 *  2. Gallery
 *  3. Thumbnail
 *  4. Carousel
 *  5. Panel
 *  6. Title
 *  7. Price
 *  8. InfoList
 *  9. Item
 * 10. Button
 * 11. Footer
 * 12. InfoForm
 */

export const Header = ({ children }) => (
  <header className="grid lg:grid-cols-2 row-gap-12 col-gap-12">{children}</header>
)

/* Gallery
*******************************************************************/

export const Gallery = ({ children }) => (
  <div className="flex flex-col stack-gap-y-8 | overflow-hidden">
    {children}
  </div>
)

/* Thumbnail
*******************************************************************/

export const Thumbnail = ({ src, alt }) => (
  <figure className="relative | overflow-hidden | aspect-ratio-4:3">
    <img src={src} alt={alt} className="block | absolute inset-0 | w-full h-full | object-cover" />
  </figure>
)

/* Carousel
*******************************************************************/

export const Carousel = ({ images, alt }) => {
  const [slider] = useState(new Glide('.glide'), {
    type: 'slider'
  })

  useEffect(() => {
    slider.mount()
    // cleanup when unmounting component
    return () => slider.destroy()
  })

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides | m-0 p-0">
          {images.map((src, index) => (
            <li key={`car-${index}`} className="glide__slide">
              <div className="aspect-ratio-4:3 | relative | overflow-hidden">
                <img className="absolute inset-0 | max-w-full h-full block | object-cover" src={src} alt={`${alt}-${index + 1}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left | w-12 h-12"
          style={{borderRadius:'100vh'}}
          data-glide-dir="<">
            &lt;&mdash;
        </button>
        <button
          className="glide__arrow glide__arrow--right | w-12 h-12"
          style={{borderRadius:'100vh'}}
          data-glide-dir=">">
            &mdash;&gt;
        </button>
      </div>
    </div>
  )
}

/* Panel
*******************************************************************/

export const Panel = ({ children }) => (
  <div
    style={{fontFeatureSettings: "'zero', 'tnum', 'ss01'"}}
    className="flex flex-col items-start | stack-gap-y-4">
    {children}
  </div>
)

/* Title
*******************************************************************/

export const Title = ({ children }) => (
  <h1 className="m-0 | text-3xl font-extra | leading-tight">
    {children}
  </h1>
)

/* Price
*******************************************************************/

export const Price = ({ children, inc }) => (
  <div>
    <span className="text-2xl text-info-500 | font-medium tracking-tighter">
      {currencyConverter(children)}
    </span>&nbsp;
    <span className="text-sm font-semi-bold | text-gray-500">Inc. {inc}</span>
  </div>
)

/* InfoList
*******************************************************************/

export const InfoList = ({ children }) => (
  <ul className="p-0 m-0 | w-full | children:py-2 | stack-rule-y stack-rule-gray-300 | list-none | flex flex-col | text-gray-700">
    {children}
  </ul>
)

/* Item
*******************************************************************/

export const Item = ({ children }) => <li>{children}</li>

export const Button = ({ children }) => (
  <a
    className="px-8 py-3 | text-sm text-white bg-gray-900 font-semi-bold uppercase tracking-wider | focus:shadow-focus | antialiased | inline-block | rounded-lg"
    href="#0">
    {children}
  </a>
)

/* Footer
*******************************************************************/

export const Footer = ({ children }) => (
  <footer className="grid md:grid-cols-2 row-gap-12 col-gap-8">
    {children}
  </footer>
)

/* InfoForm
*******************************************************************/

export const InfoForm = ({ children, className='' }) => (
  <div className={className}>
    <h3 className="text-gray-900 text-base font-medium | mx-0 mt-0 mb-8 py-4">
      Verdere informatie
    </h3>
    <form className="flex flex-col items-start | stack-gap-y-8">
      {children}
    </form>
  </div>
)