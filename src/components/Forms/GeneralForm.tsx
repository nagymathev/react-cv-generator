import { cvState } from "../../App";

export default function GeneralForm({ cvState }: { cvState: cvState }) {
    const [cvData, setCVData] = cvState;

    return (
        <div className="card bg-base-200 py-2 px-6 pb-6 shadow-md">
            <label className="label text-sm p-1" htmlFor="name">
                Name
            </label>
            <input
                onChange={(e) => {
                    setCVData((prevState) => {
                        prevState.general.name = e.target.value;
                        return { ...prevState };
                    });
                }}
                value={cvData.general.name}
                className="input"
                id="name"
                type="text"
            />
            <label className="label text-sm p-1" htmlFor="email">
                Email
            </label>
            <input
                onChange={(e) => {
                    setCVData((prevState) => {
                        prevState.general.email = e.target.value;
                        return { ...prevState };
                    });
                }}
                value={cvData.general.email}
                className="input"
                id="email"
                type="email"
            />
            <label className="label text-sm p-1" htmlFor="phone">
                Phone number
            </label>
            <input
                onChange={(e) => {
                    setCVData((prevState) => {
                        prevState.general.phone = parseInt(e.target.value);
                        return { ...prevState };
                    });
                }}
                value={cvData.general.phone}
                className="input"
                id="phone"
                type="number"
            />
        </div>
    );
}
