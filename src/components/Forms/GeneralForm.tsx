export default function GeneralForm() {
    return (
        <div className="card bg-base-200 py-2 px-6 pb-6">
            <label className="label text-sm p-1" htmlFor="name">
                Name
            </label>
            <input className="input" id="name" type="text" />
            <label className="label text-sm p-1" htmlFor="email">
                Email
            </label>
            <input className="input" id="email" type="email" />
            <label className="label text-sm p-1" htmlFor="phone">
                Phone number
            </label>
            <input className="input" id="phone" type="number" />
        </div>
    );
}
