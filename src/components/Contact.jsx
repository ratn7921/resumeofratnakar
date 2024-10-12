// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        // Add your Web3Forms access key here
        formData.append("access_key", "4d637aa0-c008-4a4e-a517-76ef9d89e40f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset(); // Reset the form after successful submission
            } else {
                setResult(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setResult("Failed to send the message");
        }
    };

    return (
        <section className="py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold">Name:</label>
                        <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email:</label>
                        <input type="email" id="email" name="email" className="border rounded w-full py-2 px-3" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold">Message:</label>
                        <textarea id="message" name="message" className="border rounded w-full py-2 px-3" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
                </form>
                <div className="mt-4 text-sm">{result}</div>
            </div>
        </section>
    );
};

export default Contact;
