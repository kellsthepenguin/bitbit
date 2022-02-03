import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

interface CurrencyProps {
  name: string,
  moneyText: string
  icon: JSX.Element,
}

const Currency = (props: CurrencyProps) => {
  return (
    <div className='px-5 py-3 border rounded-lg border-gray-400 md:w-64 w-48 overflow-hidden'>
      <div className='text-sm text-gray-500'>
        <div className='col-span-12'>
          {props.icon} <p className='inline-block rounded-full text-black text-large font-bold'>
            {props.name}
          </p>
        </div>
      </div>
      <div className='font-bold text-lg'>{props.moneyText}</div>
    </div>
  )
}

export default Currency
