import React, { useState, useEffect } from "react";
import { json } from "d3";
import { feature, mesh } from "topojson";
import myanmarTopology from "./output.json";

export const useData = () => {
  const district = myanmarTopology.objects["district"];
  const [data, setData] = useState(feature(myanmarTopology, district));
  
  return data;
};
