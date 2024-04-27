import React from 'react';
import { ChartLegendTable } from '@semcore/d3-chart';
import { Text } from '@semcore/typography';
import Divider from 'intergalactic/divider';
import './DataLegend.css'

// fetch('http://localhost:5000/dataLegend1/')
//   .then(response => response.json())
//   .then(data => console.log(data.overall))
//   .catch(error => console.log(error));

// async function Overall() {
//   const response = await fetch("http://localhost:5000/dataLegend1/");
//   const data = await response.json();
//   return data;
// }

let file = "http://localhost:5000/dataLegend1/"

fetch (file)
.then(response => response.json())
.then(data => document.getElementById("demo").innerHTML = data.overall);

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
        <h2 id='demo'>71,826</h2>
        <p id='title'>value name: 1234123</p>
        <Divider />;
      <ChartLegendTable items={lines} />
    </div>
  );
};

export default Demo;