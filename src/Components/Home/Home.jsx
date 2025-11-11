import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className='body row container-fluid'>
            <div className='col-sm-12 col-lg-2'>
                <Sidebar />
            </div>
            <div className='col-sm-12 col-lg-10'>
                <Outlet />
            </div>
        </div>
    )
}
