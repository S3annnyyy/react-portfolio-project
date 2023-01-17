import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/sideBar.js'
import './layout.scss';
import Halo from '../vanta/halo.js'

const Layout = () => {
    return (
    // Test layout
    <div className="App">
        <Halo />
        <SideBar />
            <div className="page">
                <Outlet />
        </div>
    </div>
    )
    
}

export default Layout