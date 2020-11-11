import React from 'react'
import Icon from '../components/icon'

export const BulletList = ({ children }) => (
  <ul className="p-0 m-0 | list-none">
    {children}
  </ul>
)

export const BulletItem = ({ children }) => (
  <li className="relative | pl-6 | flex items-center">
    <Icon
      className="absolute | -ml-6 mr-4 | text-success-600"
      name="check-circle" />
    {children}
  </li>
)