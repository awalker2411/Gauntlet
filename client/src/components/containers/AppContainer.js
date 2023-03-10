import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
// import Footer from '../Footer'; // May not end up using a footer component.

export default function AppContainer() {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}