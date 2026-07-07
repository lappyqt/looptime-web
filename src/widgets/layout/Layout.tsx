import { Outlet } from 'react-router';
import Header from './Header';
import FullScreenMenu from '../../features/FullScreenMenu/FullScreenMenu';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Header />
            <FullScreenMenu />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    );
}

export default Layout;