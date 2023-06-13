import { useState } from "react";
import Forms from "./components/Forms.tsx";
import "./index.css";
import Preview from "./components/Preview.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <h1 className="flex justify-center items-center py-1 shadow-md bg-neutral-focus">
                <a className="btn btn-ghost btn-sm py-0 font-mono text-lg">CV-Project</a>
            </h1>
            <div className="flex-grow flex flex-wrap justify-center">
                <div className="flex-grow flex justify-center items-center">
                    <Forms />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow flex justify-center items-center">
                    <Preview />
                </div>
            </div>
        </div>
    );
}

export default App;
