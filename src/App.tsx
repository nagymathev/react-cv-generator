import { useState } from "react";
import Forms from "./components/Forms.tsx";
import "./index.css";
import Preview from "./components/Preview.tsx";

export interface CVData {
    general: {
        name: string,
        email: string,
        phone: number,
    },
    education: {
        name: string,
        title: string,
        date: number,
    }[],
    work: {
        name: string,
        title: string,
        tasks: string,
        date: number,
    }[],
};

export type cvState = [CVData, React.Dispatch<React.SetStateAction<CVData>>]

function App() {
    const cvState = useState<CVData>({
        general: {
            name: "",
            email: "",
            phone: 0,
        },
        education: [{
            name: "",
            title: "",
            date: 0,
        }],
        work: [{
            name: "",
            title: "",
            tasks: "",
            date: 0,
        }],
    });

    return (
        <div className="min-h-screen flex flex-col">
            <h1 className="flex justify-center items-center py-1 shadow-md bg-neutral-content/10">
                <a className="btn btn-ghost btn-sm py-0 font-mono text-lg">CV-Project</a>
            </h1>
            <div className="flex-grow flex flex-wrap justify-center">
                <div className="flex-grow flex justify-center items-center">
                    <Forms cvState={cvState} />
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
