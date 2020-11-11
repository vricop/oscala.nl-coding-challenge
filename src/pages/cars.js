import React, { useState } from 'react'
import data from '../data/cars.json'

import Icon from '../components/icon'
import CarCardContainer from '../containers/car-card-container'
import CarBlockContainer from '../containers/car-block-container'

const Cars = () => {
  const [layout, setLayout] = useState('grid')

  return (
    <section className="container mx-auto py-12 px-8">
      <div className="text-gray-500 | flex justify-end | mb-4">
        <button
          onClick={({ target }) => (setLayout('grid'))}
          aria-expanded="true"
          aria-label="Activate grid view"
          title="Activate grid view"
          className="bg-transparent text-current-color focus:text-success-500 | p-0 | w-8 h-8 | flex">
          <Icon name="grid-view" width="18" className="m-auto" />
        </button>
        <button
          onClick={({ target }) => (setLayout('list'))}
          aria-expanded="false"
          aria-label="Activate list view"
          title="Activate list view"
          className="bg-transparent text-current-color focus:text-success-500 | p-0 | w-8 h-8 | flex">
          <Icon name="list-view" width="18" className="m-auto" />
        </button>
      </div>

      { (layout === 'grid') && <CarCardContainer data={data} /> }
      { (layout === 'list') && <CarBlockContainer data={data} /> }
    </section>
  )
}

export default Cars