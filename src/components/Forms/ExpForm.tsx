import { cvState } from "../../App";

export default function ExpForm({cvState}: {cvState: cvState}) {
    return (
        <div className="card bg-base-200 py-2 px-6 pb-6">
            <label className="label text-sm p-1" htmlFor="company-name">
                Company name
            </label>
            <input className="input" id="company-name" type="text" />
            <label className="label text-sm p-1" htmlFor="pos-title">
                Position Title
            </label>
            <input className="input" id="pos-title" type="text" />
            <label className="label text-sm p-1" htmlFor="tasks">
                Main tasks at the job
            </label>
            <textarea className="input" id="tasks" />
        </div>
    );
}
