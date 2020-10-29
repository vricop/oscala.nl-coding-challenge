import React from 'react'
import CarCardContainer from '../containers/car-card-container'
import Icon from '../components/icon'

import data from '../data/cars.json'
import { CarBlockContainer } from '../containers/car-block-container'

export default () => (
  <section className="container mx-auto pt-12 px-8">
    <div class="text-gray-500 | flex justify-end | mb-4">
      <button
        onClick={({ target }) => (console.log(target))}
        aria-expanded="true"
        aria-label="Activate grid view"
        title="Activate grid view"
        class="bg-transparent text-current-color focus:text-success-500 | p-0 | w-8 h-8 | flex">
        <Icon name="grid-view" width="18" className="m-auto" />
      </button>
      <button
        onClick={({ target }) => (console.log(target))}
        aria-expanded="false"
        aria-label="Activate list view"
        title="Activate list view"
        class="bg-transparent text-current-color focus:text-success-500 | p-0 | w-8 h-8 | flex">
        <Icon name="list-view" width="18" className="m-auto" />
      </button>
    </div>

    <CarCardContainer data={data} />
    <CarBlockContainer data="Hello there!" />
    { 
      // # GOAL
      //
      // Create a folder structure for car components
      //
      // ./components
      //  +--/cars
      //     +--car-card.js  <== Layout 1
      //     +--car-block.js <== Layout 2
      //     +--index.js <== 1. Import both layouts and wrapp'em with different
      //                        containers (grid/list)
      //                     2. Export <CarCardContainer /> and
      //                        <CarBlockContainer /> components
      //
      // 1. In './pages/cars' import '../components/cars
      // 2. Display <CarCardContainer /> or <CarBlockContainer /> based on a
      //   $layout state (posible values are 'grid' & 'list').
      // 3. Then based on $layout state show one component or the other
      // 4. And pass JSON data via `data` prop. e.g
      // 
      // if $layout is 'grid' => <CarCardContainer data={JSONData} />
      // otherwise => <CarBlockContainer data={JSONData} />
      //
      // **Note**: $layout state will be updated from two different buttons
    }
  </section>
)