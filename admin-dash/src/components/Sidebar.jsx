import './Sidebar.css'
import logoImg from '../assets/images/stat-io.png'

export default function Sidebar() {
    return(
        <div className='sidebar-container'>
            <div className='sidebar-header-container'>
                <button>
                    <img
                        src={logoImg}
                        // alt={title}
                        height={"auto"}
                        width={100 + "px"}
                    />
                </button>
            </div>
            <div className='sidebar-nav-container'>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
            </div>
            <div className='sidebar-profile-container'>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
                <div className='sidebar-nav-link'></div>
            </div>
        </div>
    )
}