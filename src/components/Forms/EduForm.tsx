import { cvState } from "../../App";

export default function EduForm({cvState}: {cvState: cvState}) {
    return (
        <div className="card bg-base-200 py-2 px-6 pb-6">
            <label className="label text-sm p-1" htmlFor="school-name">
                School name
            </label>
            <input className="input" id="school-name" type="text" />
            <label className="label text-sm p-1" htmlFor="study-title">
                Title of study
            </label>
            <input className="input" id="study-title" type="text" />
            <label className="label text-sm p-1" htmlFor="study-date">
                Date of study
            </label>
            <input className="input" id="study-date" type="date" />
        </div>
    );
}
