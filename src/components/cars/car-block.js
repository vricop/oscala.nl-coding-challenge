import React from 'react'
import Icon from '../icon'
import '../assets/img/master.svg'

export const CarBlock = ({ children }) => (
  <div className="grid grid-cols-3 | rounded-lg | overflow-hidden | shadow-md border border-gray-200">
    {children}
  </div>
)

export const Thumbnail = ({className, ...restProps}) => {
  return (
    <figure className="col-span-1">
      <div className="relative overflow-hidden | aspect-ratio-4:3">
        <img className={`absolute inset-0 | block | w-full h-full max-w-full | object-cover | ${className}`} {...restProps} />
      </div>
    </figure>
  )
}

export const Panel = ({ children }) => {
  const style = {
    fontVariantNumeric: 'tabular-nums diagonal-fractions slashed-zero',
  }

  return (
    <div style={style} className="flex flex-col | col-span-2 | py-12 px-16 | text-gray-500 font-sm font-medium">
      {children}
    </div>
  )
}

export const Header = ({ children }) => {
  return <header className="flex items-center | text-2xl font-bold tracking-tight">{children}</header>
}

export const Title = ({ children }) => (
  <h2 className="text-2xl leading-tight text-gray-900 | m-0">
    {children}
  </h2>
)

export const Price = ({ includes, children }) => (
  <span className="block | text-info-400 | ml-auto">
    {children}<sup>*</sup>
  </span>
)

export const Details = ({ children }) => {
  return (
    <ul className="list-none | grid grid-cols-3 gap-4 items-center | my-auto px-0 | font-semi-bold tracking-tight">
      {children}
    </ul>
  )
}

export const Item = ({ children, icon }) => {
  return (
    <li className="flex items-center">
      <Icon name={icon} width="24" className="mr-2 text-gray-600" /> {children}
    </li>
  )
}

export const Notice = () => <p className="m-0 | text-sm"><sup>*</sup>incl. BPM, BTW</p>