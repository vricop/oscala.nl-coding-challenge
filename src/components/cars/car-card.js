import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../icon'
import '../assets/img/master.svg'

export const CarCard = ({ children }) => (
  <div className="flex flex-col | relative | rounded-lg | overflow-hidden | shadow-md">
    {children}
  </div>
)

export const Thumbnail = ({className, ...restProps}) => {
  return (
    <figure>
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

  return <div style={style} className="flex flex-col h-full | p-6 | text-gray-500 font-sm font-medium">{children}</div>
}

export const Title = ({ children }) => (
  <h2 className="text-base leading-tight text-gray-900 font-bold | m-0">
    <Link to="/car" className="link-stretch">
      {children}
    </Link>
  </h2>
)

export const Price = ({ includes, children }) => (
  <span className="block | text-info-400">
    {children}<sup>*</sup>
  </span>
)

export const Details = ({ children }) => {
  return (
    <ul className="list-none my-6 p-0 text-sm font-semi-bold tracking-tight uppercase | stack-gap-y-1">
      {children}
    </ul>
  )
}

export const Item = ({ children, icon }) => {
  return (
    <li className="flex items-center">
      <Icon name={icon} className="mr-2 text-gray-600" /> {children}
    </li>
  )
}

export const Notice = () => <p className="mt-auto mb-0 | text-sm"><sup>*</sup>incl. BPM, BTW</p>