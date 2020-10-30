const fuelWords = {
  'E': 'Elektrisch',
  'D': 'Diesel',
  'H': 'Hybride',
  'B': 'Benzine',
}

export const getFuelString = (fuelLabels => (
  fuelLabels
    .split(/,\s*/)
    .map(label => (fuelWords[label]))
    .join('/')
))

const tranmissionWords = {
  'A': 'Automaat',
  'S': 'Semi-automaat',
  'H': 'Handgeschakeld',
}

export const getTransmissionString = (transmissionLabels => (
  transmissionLabels
    .split(/,\s*/)
    .map(label => (tranmissionWords[label]))
    .join('/')
))