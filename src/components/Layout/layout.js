import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/sideBar.js'
import './layout.scss';
import Halo from '../Animations/vanta/halo.js'

const Layout = () => {
    return (
    <div className="App">
        <div className='halo-element'>
            <Halo />
        </div>
        <SideBar />
            <div className="page">
                <Outlet />
        </div>
    </div>
    )
    
}

export default Layout