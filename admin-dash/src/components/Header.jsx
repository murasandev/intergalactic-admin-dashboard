import './Header.css'
import profileImg from '../assets/images/profile-pic.png'
import Divider from '@semcore/ui/divider';
import Button from '@semcore/ui/button';
import Dot from '@semcore/ui/dot'
import CalendarL from '@semcore/ui/icon/Calendar/l'

export default function Header() {
    return(
        <div className='header-container'>
            <div className='left-header'></div>
            <div className='right-header'>
                <div className='header-profile-name'>Dylan</div>
                <div className='header-profile-pic'>
                    <img
                        src={profileImg}
                        // alt={title}
                        height={50 + "px"}
                        width={50 + "px"}
                    />
                </div>
                <div className='header-divider'>
                    <Divider 
                        orientation='vertical'
                        hMin={50 + "px"}
                    />
                </div>
                <div className='header-notification'>
                        
                    <Button
                        active={false}
                        disabled={false}
                        loading={false}
                        size="s"
                        theme="invert"
                        use="secondary"
                        >
                        <CalendarL />
                            <Dot
                            aria-label="You have unread notification"
                            hidden={false}
                            size="l"
                            up={true}
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}