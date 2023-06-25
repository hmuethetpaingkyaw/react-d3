import React from 'react';
import ReactDOM from 'react-dom';
import { useData } from './useData';
import { Marks } from './Marks';
import './index.css'
const width = 960;
const height = 500;

const MyanmarMap = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};

export default MyanmarMap
