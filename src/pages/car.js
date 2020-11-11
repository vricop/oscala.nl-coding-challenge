import React from 'react'
import CarContainer from '../containers/car-container'
import InputText from '../components/input-text'
import parse from 'html-react-parser'

import { 
  Button,
  Carousel,
  Footer,
  Gallery,
  Header,
  InfoForm,
  InfoList,
  Item,
  Panel,
  Price,
  Title,
} from '../components/car-info'

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../components/tabs'
import { getFuelString } from '../utils/convert-labels-to-strings'
import { useParams } from 'react-router-dom'
import data from '../data/cars'


const Car = ({ props }) => {
  const { id } = useParams()

  // Use one of these values as and ID: meldcode, autotelex_id or plate_number 
  // whichever returns first
  const carData =
    data.find(car => car.meldcode === id) ||
    data.find(car => car.autotelex_id === id) ||
    data.find(car => car.plate_number === id)

  const {
    bought_year, sell_price, cylinder_capacity, fuel, details,
    images, brand, model, mileage, power_kw, power_pk, accessories,
  } = carData

  return (
    <CarContainer>
      <Header>
        <Gallery>
          <Carousel images={images} alt={`${brand} ${model}`} id={id} />
        </Gallery>

        <Panel>
          <Title>{brand} {model}</Title>
          <Price inc="BPM/BTW">
            {sell_price}
          </Price>
          <InfoList>
            <Item>{bought_year}</Item>
            <Item>{mileage} km</Item>
            <Item>{cylinder_capacity} cc ({cylinder_capacity / 1000} l)</Item>
            <Item>{power_pk} pk ({power_kw} kw)</Item>
            <Item>{getFuelString(fuel)}</Item>
          </InfoList>
          <Button>Kopen</Button>
        </Panel>
      </Header>

      <Footer>
        <Tabs className="md:pr-6">
          <TabList>
            {/* Todo: implement key within Tablist content */}
            <Tab active key="1" id="1">Omschrijving</Tab>
            <Tab key="2" id="2">Accessoires</Tab>
          </TabList>
        
          <TabPanels>
            {/* Todo: implement key within TabPanels content */}
            <TabPanel key="1" target="1">
              <p className="m-0">
                {parse(details)}
              </p>
            </TabPanel>
            <TabPanel key="2" target="2">
              <ul className="pl-4 m-0">
                {accessories.map((item, i) => <li key={`accessory-${i}`}>{item}</li>)}
              </ul>
            </TabPanel> 
          </TabPanels>
        </Tabs>

        <InfoForm className="md:pl-6">
          <InputText label="Naam" />
          <InputText label="E-mail" />
          <InputText label="Telefoon" />
          <Button>bericht versturen</Button>
        </InfoForm>
      </Footer>
    </CarContainer>
  )
}

export default Car