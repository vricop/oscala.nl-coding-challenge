import React from 'react'
import cars from '../data/cars.json'
import currencyConverter from '../utils/currency-converter'
import {
  CarCard,
  Thumbnail,
  Panel,
  Title,
  Price,
  Details,
  Item,
  Notice
} from '../components/car-card'

export default () => (
  <div className="container mx-auto pt-12 px-8 | grid grid-cols-4-auto-fit col-gap-5 row-gap-6">
      {cars.map(car => {
        return ( 
          <CarCard key={car.autotelex_id}>
            <Thumbnail src={car.images[0]} alt={''}/>
            <Panel>
              <Title>{car.brand} {car.model}</Title>
              <Price>{currencyConverter(car.sell_price)}</Price>
              <Details>
                <Item icon='calendar'>{car.bought_year}</Item>
                <Item icon='tachometer'>{car.mileage} Km</Item>
                <Item icon={'car'}>{car.body}</Item>
              </Details>
              <Notice />
            </Panel>
          </CarCard>
        )
      })}
  </div>
)