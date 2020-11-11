
const InputText = ({ label='', className='', ...restProps }) => (
  <label className="relative | inline-block | w-full">
    <span className="absolute | left-0 top-0 | ml-4 px-1 | transform -translate-y-1/2 | inline-block | bg-white | text-sm uppercase text-gray-600">{label}</span>
    <input className={`px-4 w-full | leading-10 | rounded-md | border-2 border-gray-600 | text-gray-800 | outline-none focus:shadow-focus ${className}`} {...restProps}/>
  </label>
)

export default InputText