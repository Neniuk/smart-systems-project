// References:
// - https://reactrouter.com/en/main/start/overview
// - https://youtu.be/Ul3y1LXxzdU?si=thVgQljPJao9XeYo

import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<h1>Activities</h1>} />
            <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
    );
}

export default App;
