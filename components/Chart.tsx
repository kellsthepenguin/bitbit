import React, { useEffect } from 'react'
import { createChart } from 'lightweight-charts'

function Chart() {
  useEffect(() => {
    const chart = createChart('chart', { width: 700, height: 600 })
    const lineSeries = chart.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#838ca1',
      wickUpColor: '#838ca1',
    })
    lineSeries.setData([
        { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
        { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 }
    ])
    lineSeries.update({ time: '2018-12-21', open: 200, high: 700, low: 100, close: 500 })
  }, [])

  return (
    <>
      <div id='chart' />
    </>
  )
}

export default Chart
