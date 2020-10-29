import CarBlock from '../components/cars/car-block'
import currencyConverter from '../utils/currency-converter'

export const CarBlockContainer = ({ data }) => (
  <div>
    <CarBlock>{ data }</CarBlock>
  </div>
)