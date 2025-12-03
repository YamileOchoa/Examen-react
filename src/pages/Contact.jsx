import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message)
            return alert("All fields required");
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {success && (
                <p className="text-green-500 mb-4">Message sent successfully!</p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-gray-500 text-white py-2 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;