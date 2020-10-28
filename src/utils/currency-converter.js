const opt = { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, }

export default (amount='0', locale='nl-NL', options=opt) => {
  return new Intl.NumberFormat(locale, options).format(amount);
}