// import * as XLSX from 'xlsx/xlsx.mjs';

import { useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  // const exportToExcel = (data) => {
  //   const workbook = XLSX.utils.book_new();

  //   // Create a sheet for each region
  //   data.forEach((region) => {
  //     const { name, townships } = region;
  //     const worksheet = XLSX.utils.json_to_sheet(townships);
  //     XLSX.utils.book_append_sheet(workbook, worksheet, name);
  // })

  //   // Export the workbook as an Excel file
  //   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   saveAsExcelFile(excelBuffer, 'regions_data.xlsx');
  // };

  // const saveAsExcelFile = (buffer, fileName) => {
  //   const data = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //   if (typeof window !== 'undefined') {
  //     const url = window.URL.createObjectURL(data);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = fileName;
  //     link.click();
  //   }
  // };

  // // Usage
  // const data = [
  //   { name: 'Region 1', townships: [{ name: 'Township 1' }, { name: 'Township 2' }] },
  //   { name: 'Region 2', townships: [{ name: 'Township 3' }, { name: 'Township 4' }] },
  // ];

  // exportToExcel(data);
  const [show, setShow] = useState(false);

  const { data, error, isLoading, refresh } = useFetch(
    "https://fakestoreapi.com/products"
  );

  console.log(isLoading);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <ul>
        {data?.map((value, index) => (
          <li key={index}>{value?.title}</li>
        ))}
      </ul>
      <button
        className="btn-success btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Call API again
      </button>
      <button
        className="btn-warning btn"
        onClick={() => {
          refresh();
          setShow(!show);
        }}
      >
        Remove cache
      </button>
      <h1>Hello, This is my react d3 practice playground.</h1>
    </div>
  );
}
