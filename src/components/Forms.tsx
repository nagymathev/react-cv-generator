import GeneralForm from "./Forms/GeneralForm.tsx";
import EduForm from "./Forms/EduForm.tsx";
import ExpForm from "./Forms/ExpForm.tsx";
import { useState } from "react";

export default function Forms() {
    const forms = [<GeneralForm />, <EduForm />, <ExpForm />];
    const tabs = ["General Info", "Education", "Work"];
    const [activeForm, setActiveForm] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="tabs">
                {tabs.map((tab, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveForm(idx)}
                        className={
                            idx === activeForm ? "tab tab-lifted tab-active" : "tab tab-lifted"
                        }>
                        {tab}
                    </div>
                ))}
            </div>
            {forms[activeForm]}
        </div>
    );
}
