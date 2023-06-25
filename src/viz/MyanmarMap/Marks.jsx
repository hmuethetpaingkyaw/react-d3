import { geoMercator, geoPath } from "d3";
import { scaleOrdinal } from "d3-scale";
import { useRef } from "react";

const projection = geoMercator().center([96, 21]).scale(1200);
const path = geoPath(projection);

export const Marks = ({ data }) => {
  const colorScale = scaleOrdinal()
    .domain(data.features.map((d) => d.properties.DT))
    .range(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]);
  return (
    <>
      <g className="marks">
        {data.features.map((feature) => (
          <>
            <path
              d={path(feature)}
              fill={colorScale(feature.properties.DT)}
             
            >
              <title>{feature.properties.DT}</title>
            </path>
            {/* <text
          key={feature.properties.DT}
          transform={`translate(${path.centroid(feature)})`}
          dy=".35em"
          className="DT-label"
        >
          {feature.properties.DT}
        </text> */}
          </>
        ))}
      </g>
    </>
  );
};
