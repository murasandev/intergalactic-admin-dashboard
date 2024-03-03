import './Dashboard.css'
import Breadcrumbs from '@semcore/ui/breadcrumbs';

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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='dash-row-2'>
                    <div></div>
                    <div></div>
                </div>
                <div className='dash-row-3'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
    
}