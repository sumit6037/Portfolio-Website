import { Outlet } from 'react-router-dom'
import './index.scss';
import Sidebar from '../Sidebar'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>Data Science</span>
            <Outlet />

            <span className='tags bottom-tags'>
            Artificial Intelligence
            <br />
            <span className='bottom-tag-html'>Machine Learning</span>
            </span>
        </div>
    </div>
    )
}

export default Layout
