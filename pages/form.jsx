import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md mb-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-medium mb-4">Contact Me</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full p-3 bg-gray-200 rounded-lg "
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-3 bg-gray-200 rounded-lg"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full p-3 bg-gray-200 rounded-lg"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white font-medium py-3 px-4 rounded-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
