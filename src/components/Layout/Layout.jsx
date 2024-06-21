import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Layout.scss';

const Layout = () => {
    return (
        <div className='Layout'>
            <Outlet/>
            <MobileMenu />
        </div>
    )
}

export { Layout }