import React, { useState, useEffect } from "react";
import { csv, scaleBand, scaleLinear} from "d3";
import * as d3 from 'd3';

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const width = 1160;
const height = 500;
const margin = { top: 20, right: 200, bottom: 20, left: 200 };

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleLinear()
    .domain(d3.extent(data, (d)=> d.Population))
    .range([innerHeight, 0]);

  const xScale = scaleBand()
    .domain(data.map((d)=> d.Country))
    .range([0, innerWidth]);

  return (
    <div
    >
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}> 
        <AxisBottom xScale={xScale} yScale={yScale} />
        <AxisLeft yScale={yScale} />
          
          {data.map((d) => (
            <rect
              key={d.Country}
              x={xScale(d.Country)}
              y={yScale(d.Population)}
              height={innerHeight - yScale(d.Population)}
              width={xScale.bandwidth()}
              fill="#69b3a2"
              opacity={0.5}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BarChart;

// eslint-disable-next-line react/prop-types
const AxisBottom = ({xScale, yScale}) => {
  // eslint-disable-next-line react/prop-types
  const [xStart, xEnd] = xScale.range();
  // eslint-disable-next-line react/prop-types
  const [yStart, yEnd] = yScale.range();
  // eslint-disable-next-line react/prop-types
  const ticks = xScale.domain();

  return <> 
         <line x1={xStart} x2={xEnd} y1={yStart} y2={yStart} stroke="blue" />
  <g className="ticks">
          {ticks.map((t, i) => {
            const x = xScale(t);
            return (
              <React.Fragment key={i}>
                <line x1={x} x2={x} y1={yStart} y2={yStart + 5} stroke="black" />
                <text
                  x={x}
                  y={yStart + 20}
                  fill="red"
                  textAnchor="middle"
                  fontSize={10}
                >
                  {t}
                </text>
              </React.Fragment>
            );
          })}
        </g>
  </>

}

// eslint-disable-next-line react/prop-types
const AxisLeft = ({yScale}) => {
  // eslint-disable-next-line react/prop-types
  const [yStart, yEnd] = yScale.range();
  // eslint-disable-next-line react/prop-types
  const ticks = yScale.ticks();

  return <> 
  <line y1={yEnd} y2={yStart} stroke="blue" /> 
  <g className="ticks">
          {ticks.map((t, i) => {
            const y = yScale(t);
            return (
              <React.Fragment key={i}>
                <line x1={-5} y1={y} y2={y} stroke="black" />
                <text
                 x={-30}
                  y={y}
                  fill="red"
                  textAnchor="middle"
                  fontSize={10}
                >
                  {t}
                </text>
              </React.Fragment>
            );
          })}
        </g>
  </>

}


