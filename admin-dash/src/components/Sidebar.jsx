import './Sidebar.css'
import logoImg from '../assets/images/stat-io.png'
import HomeL from '@semcore/ui/icon/Home/l'
import DesktopChartL from '@semcore/ui/icon/DesktopChart/l'
import GitHubInvertL from '@semcore/ui/icon/color/GitHubInvert/l'
import BookL from '@semcore/ui/icon/Book/l'
import DocumentL from '@semcore/ui/icon/Document/l'
import UserL from '@semcore/ui/icon/User/l'
import ChatQuestionL from '@semcore/ui/icon/ChatQuestion/l'
import SettingsL from '@semcore/ui/icon/Settings/l'
import LikeL from '@semcore/ui/icon/Like/l'

export default function Sidebar() {
    return(
        <div className='sidebar-container'>
            <div className='sidebar-header-container'>
                <a href='#'>
                    <img
                        src={logoImg}
                        // alt={title}
                        height={"auto"}
                        width={100 + "px"}
                    />
                </a>
            </div>
            <div className='sidebar-nav-container'>
                <a href='#' className='sidebar-nav-link'>
                    <HomeL />
                    <h5>Home</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <DesktopChartL />
                    <h5>Dashboard</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <DocumentL />
                    <h5>Documentation</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <BookL />
                    <h5>Libraries</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <GitHubInvertL />
                    <h5>GitHub</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <ChatQuestionL />
                    <h5>Contact</h5>
                </a>
            </div>
            <div className='sidebar-profile-container'>
                <a href='#' className='sidebar-nav-link'>
                    <UserL />
                    <h5>Account</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <SettingsL />
                    <h5>Settings</h5>
                </a>
                <a href='#' className='sidebar-nav-link'>
                    <LikeL />
                    <h5>Preferences</h5>
                </a>
            </div>
        </div>
    )
}