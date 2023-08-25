import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/index.css"
import {createRoot} from "react-dom/client";
import List from "./components/List";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
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