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

const CarCardContainer = ({ data }) => (
  <div className="grid grid-cols-4-auto-fit col-gap-5 row-gap-6">
    {data.map(car => {
      const { 
        model, sell_price, bought_year, mileage, body,
        plate_number, autotelex_id, meldcode, images, brand,
      } = car

      const id = plate_number || autotelex_id || meldcode;

      return (
        <CarCard key={id}>
          <Thumbnail src={images[0]} alt={`${brand} ${model}`} />
          <Panel>
            <Title id={id}>{brand} {model}</Title>
            <Price>{currencyConverter(sell_price)}</Price>
            <Details>
              <Item icon="calendar">{bought_year}</Item>
              <Item icon="tachometer">{mileage} Km</Item>
              <Item icon="car">{body}</Item>
            </Details>
            <Notice />
          </Panel>
        </CarCard>
      )
    })}
  </div>
)

export default CarCardContainer