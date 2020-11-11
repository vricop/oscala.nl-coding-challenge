import {
  CarBlock,
  Thumbnail,
  Panel,
  Header,
  Title,
  Price,
  Details,
  Item,
  Notice
} from '../components/cars/car-block'

import currencyConverter from '../utils/currency-converter'
import { getFuelString, getTransmissionString } from '../utils/convert-labels-to-strings'

const CarBlockContainer = ({ data }) => (
  <div className="grid grid-rows-auto col-gap-5 row-gap-6">
    {data.map(car => {
      const {
        body, fuel, power_kw, power_pk, transmission, co2_emission, plate_number,
        meldcode, autotelex_id, images, brand, model, sell_price, bought_year, mileage,
      } = car

      const id = plate_number || autotelex_id || meldcode;

      return (
        <CarBlock key={id}>
          <Thumbnail src={images[0]} alt={`${brand} ${model}`} />
          <Panel>
            <Header>  
              <Title id={id}>{brand} {model}</Title>
              <Price>{currencyConverter(sell_price)}</Price>
            </Header>
            <Details>
              <Item icon="calendar">{bought_year}</Item>
              <Item icon="car">{body}</Item>
              <Item icon="gas-pump">{getFuelString(fuel)}, {power_pk} pk ({power_kw} kW)</Item>
              <Item icon="tachometer">{mileage} Km</Item>
              <Item icon="cogs">{getTransmissionString(transmission)}</Item>
              <Item icon="wind">O<sup>2</sup>-uitstoot: {co2_emission} g/km</Item>
            </Details>
            <Notice />
          </Panel>
        </CarBlock>
      )
    })}
  </div>
)

export default CarBlockContainer