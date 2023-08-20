import * as React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css"
import {createRoot} from "react-dom/client";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import RecoveryPassword from "./components/RecoveryPassword";
import List from "./components/List";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="header/*" element={<LogIn/>}/>
                    <Route path="sign/*" element={<SignUp/>}/>
                    <Route path="recovery/*" element={<RecoveryPassword/>}/>
                    <Route path="/" element={<List/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);