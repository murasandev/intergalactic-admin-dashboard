import './Dashboard.css'
import Breadcrumbs from '@semcore/ui/breadcrumbs';
import DataLegend from './DataLegend'
import BubbleChart from './BubbleChart'
import BarChart from './BarChart'
import RadarChart from './RadarChart'
import LineChart from './LineChart'
import DonutChart from './DonutChart'

export default function Dashboard() { 
    return(
        <div className="dash-container">
            <div className="dash-header-container">
                <div className="dash-header">
                    <h1>Dashboard</h1>
                </div>
                <div className='dash-breadcrumb-container'>
                    <Breadcrumbs>
                        <Breadcrumbs.Item href="#">
                            Home
                        </Breadcrumbs.Item>
                        <Breadcrumbs.Item href="#">
                            Dashboard
                        </Breadcrumbs.Item>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="dash-body">
                <div className='dash-row-1'>
                    <div><DataLegend /></div>
                    <div><DataLegend /></div>
                    <div><DataLegend /></div>
                    <div><DataLegend /></div>
                </div>
                <div className='dash-row-2'>
                    <div><BubbleChart /></div>
                    <div><RadarChart /></div>
                </div>
                <div className='dash-row-3'>
                    <div><DonutChart /></div>
                    <div><LineChart /></div>
                </div>
            </div>
        </div>
    )
}