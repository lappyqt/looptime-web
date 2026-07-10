import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Layout from '../widgets/layout/Layout';
import Calendar from '../pages/Calendar/Calendar';

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />}>
                        
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;