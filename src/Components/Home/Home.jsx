import React from 'react'
import './Home.css'
import Movies from '../Movies/Movies'
import Sidebar from '../Sidebar/Sidebar'

export default function Home() {
    return (
        <div className='body row container-fluid'>
            <div className='col-2'>
                <Sidebar/>
            </div>
            <div className='col-10'>
                <Movies />
            </div>
        </div>
    )
}
