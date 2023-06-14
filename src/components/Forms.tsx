import GeneralForm from "./Forms/GeneralForm.tsx";
import EduForm from "./Forms/EduForm.tsx";
import ExpForm from "./Forms/ExpForm.tsx";
import { useState } from "react";
import { cvState } from "../App.tsx";

export default function Forms({cvState}: {cvState: cvState}) {
    const forms = [<GeneralForm cvState={cvState}/>, <EduForm cvState={cvState}/>, <ExpForm cvState={cvState}/>];
    const tabs = ["General Info", "Education", "Work"];
    const [activeForm, setActiveForm] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="tabs">
                {tabs.map((tab, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveForm(idx)}
                        className={`tab tab-lifted ${idx === activeForm ? "tab-active" : ""}`}>
                        {tab}
                    </div>
                ))}
            </div>
            {forms[activeForm]}
        </div>
    );
}
