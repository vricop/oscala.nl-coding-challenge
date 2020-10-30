const opt = { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, }

const currencyConveter = (amount='0', locale='nl-NL', options=opt) => {
  return new Intl.NumberFormat(locale, options).format(amount);
}

export default currencyConveter