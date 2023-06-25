import Home from "./pages/Home";
import BarChart from './viz/BarChart'
import PieChart from './viz/PieChart'
import RefractorBarChart from './viz/refractorBarChart'
import ScatterPlotChart from './viz/ScatterPlotChart'
import LineChart from './viz/LineChart'
import ScatterPlotWithMenuChart from './viz/ScatterPlotWithMenuChart'
import ColorScatterChart from './viz/ColorScatterChart'
import LegendColorScatterChart from './viz/LegendColorScatterChart'
import InteractiveScatterChart from './viz/InteractiveScatterChart'
 import MonthBarChart from './viz/MonthBarChart'
import MyanmarMap from "./viz/MyanmarMap";
import PointOnMap from './viz/PointOnMap'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    } ,
    {
        name: 'Line Chart',
        path: '/line-chart',
        component: LineChart
    } ,
    {
        name: 'Bar Chart',
        path: '/bar-chart',
        component: BarChart
    } ,
    {
        name: 'Pie Chart',
        path: '/pie-chart',
        component: PieChart
    } ,
    {
        name: 'RefractorBar Chart',
        path: '/refractorbar-chart',
        component: RefractorBarChart
    } ,
    {
        name: 'ScatterPlot Chart',
        path: '/scatterPlot-chart',
        component: ScatterPlotChart
    } ,
    {
        name: 'ScatterPlotWithMenu Chart',
        path: '/ScatterPlotWithMenu-chart',
        component: ScatterPlotWithMenuChart
    } ,
    {
        name: 'ColorScatter Chart',
        path: '/ColorScatter-chart',
        component: ColorScatterChart
    } ,
    {
        name: 'LegendColorScatter Chart',
        path: '/LegendColorScatter-chart',
        component: LegendColorScatterChart
    } ,
    {
        name: 'InteractiveScatter Chart',
        path: '/InteractiveScatter-chart',
        component: InteractiveScatterChart
    } ,
    {
        name: 'MyanmarMap Chart',
        path: '/MyanmarMap-chart',
        component: MyanmarMap
    } ,
    {
        name: 'PointMap Chart',
        path: '/PointMap-chart',
        component: PointOnMap
    } ,
    {
        name: 'MonthBarChart Chart',
        path: '/MonthBarChart-chart',
        component: MonthBarChart
    } ,
]

export default routes;