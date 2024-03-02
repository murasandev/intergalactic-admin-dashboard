import './Dashboard.css'

export default function Dashboard() {
    return(
        <div className="dash-container">
            <div className="dash-header-container">
                <div className="dash-header">
                    <h1>Dashboard</h1>
                </div>
                <div className='dash-breadcrumb-container'>
                    breadcrumbs
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