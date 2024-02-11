import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import Header from '../../components/Header.jsx'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy.js';
import { useStateContext } from '../../context/ContextProvider.js';

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Chart" title="Inflation Rate Percantage" />
    <ChartComponent
    id='area-chart'
    height='500px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{ border: { width:0 }}}
    tooltip={{ enable: true }}
    >
      <Inject services={[ DateTime, Legend, SplineAreaSeries ]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area