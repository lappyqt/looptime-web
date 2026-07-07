import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../widgets/layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;