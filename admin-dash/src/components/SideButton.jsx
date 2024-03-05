import './SideButton.css'


export default function SideButton({icon, title, size = 25}) {
    return(
        <div className='button-container'>
            <div className='button-img'>
            </div>
            <div className='button-text'>
                {title}
            </div>
        </div>
    )
}