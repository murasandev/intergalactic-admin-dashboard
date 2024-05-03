import React from 'react';
import { ChartLegendTable } from '@semcore/d3-chart';
import { Text } from '@semcore/typography';
import Divider from 'intergalactic/divider';
import './DataLegend.css'

let test;
let file= "http://localhost:5000/dataLegend1/";
// switch(test){
//   case 1:
//     file = "http://localhost:5000/dataLegend1/";
//     break;
//   case 2:
//     file = "http://localhost:5000/dataLegend2/";
//     break;
//   case 3:
//     file = "http://localhost:5000/dataLegend3/";
//     break;
// }
let a;
fetch (file)
.then(response => response.json())
.then(data => a = data.overall);

fetch (file)
.then(response => response.json())
.then(title => document.getElementById("title").innerHTML = title.title);

const data = [...Array(5).keys()].map((d, i) => ({
  x: i,
  Line1: Math.random() * 10,
  Line2: Math.random() * 10,
  Line3: Math.random() * 10,
  Line4: Math.random() * 10,
  Line5: Math.random() * 10,
}));

const Demo = () => {
  const lines = Object.keys(data[0])
    .filter((key) => key !== 'x')
    .map((item, index) => {
      return {
        id: item,
        label: `Item ${index + 1}`,
        checked: true,
        color: `chart-palette-order-${index + 1}`,
        columns: [
          <Text color='white'>{(42 * (index + 3)) / 10}%</Text>, //use={'secondary'} --> original
          <Text color='light-blue'>{42 * (index + 3)}</Text>, //use={'primary'}
        ],
      };
    });

  return (
    <div style={{ width: '200px' }}>
        <h2 id='demo'>{a}</h2>
        <p id='title'>value name: 1234123</p>
        <Divider /> 
      <ChartLegendTable items={lines} />
    </div>
  );
};

export default Demo;