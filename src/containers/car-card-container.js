import {
  CarCard,
  Thumbnail,
  Panel,
  Title,
  Price,
  Details,
  Item,
  Notice
} from '../components/cars/car-card'

import currencyConverter from '../utils/currency-converter'

export default ({ data }) => (
  <div className="grid grid-cols-4-auto-fit col-gap-5 row-gap-6">
    {data.map(car => {
      const { autotelex_id, images, brand, model, sell_price, bought_year, mileage, body } = car

      return (
        <CarCard key={autotelex_id}>
          <Thumbnail src={images[0]} alt="" />
          <Panel>
            <Title>{brand} {model}</Title>
            <Price>{currencyConverter(sell_price)}</Price>
            <Details>
              <Item icon="calendar">{bought_year}</Item>
              <Item icon="tachometer">{mileage} Km</Item>
              <Item icon="car">{car.body}</Item>
            </Details>
            <Notice />
          </Panel>
        </CarCard>
      )
    })}
  </div>
)