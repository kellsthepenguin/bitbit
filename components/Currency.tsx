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
    <div className='px-5 py-3 ml-4 border rounded-lg border-gray-400 w-64 overflow-hidden'>
      <div className='text-sm text-gray-500'>
        <div className='col-span-12'>
          {props.icon} <a href='#' className='inline-block rounded-full text-black text-large font-bold'>
            {props.name}
          </a>
        </div>
      </div>
      <div className='font-bold text-lg'>{props.moneyText}</div>
    </div>
  )
}

export default Currency