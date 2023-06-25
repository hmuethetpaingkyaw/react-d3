import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Layout from "./layouts/DefaultLayout";
import routes from "./routes";

function App() {
  return (
    // <PieChart />
    //<BarChart />
    //  <RefractorBarChart/>
    // <ScatterPlotChart />
    //<LineChart/>
    //<ScatterPlotWithMenuChart />
    //<ColorScatterChart />
    // <LegendColorScatterChart />
    //<InteractiveScatterChart />
    //<PointOnMap />
    //<MonthBarChart/>
    //<MyanmarMap/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route path={route.path} element={<Component />} key={index} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
