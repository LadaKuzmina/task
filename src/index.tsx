import * as React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css"
import {createRoot} from "react-dom/client";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn/>}/>
                    <Route path="sign/*" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);