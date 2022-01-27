import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

interface CoinProps {
  name: string,
  icon: JSX.Element,
  type: string
}


const Coin = (props: CoinProps) => {
  return (
    <div className='px-5 py-3 ml-4 border rounded-lg border-gray-400'>
      <div className='text-sm text-gray-500'>
        <div className='col-span-12'>
          {props.icon} <a href='#' className='inline-block rounded-full text-black text-large font-bold'>
            {props.name}
          </a>
        </div>
      </div>
      <div className='font-bold text-lg'>₩44,074,000</div>
      <span className='text-red-500'>▲ 2.48%</span>
    </div>
  )
}

export default Coin
