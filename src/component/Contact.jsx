import React from 'react'
import Navbar from './Navbar'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9c17b7fe-a4b9-4b98-8ce7-af515a44ad88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <div className="min-h-screen w-full bg-[#212121] text-[#fbf2f2] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16">
  <div className="bg-[#212121] text-white p-6 rounded-lg w-full max-w-lg shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
    <span className="text-2xl font-bold block mb-4 text-center">Contact Me</span>
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label className="mb-2 text-lg">Name:</label>
      <input type="text" name="name" required className="p-2 rounded-md mb-4 bg-[#88868671] focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-300 focus:scale-105" />

      <label className="mb-2 text-lg">Email:</label>
      <input type="email" name="email" required className="p-2 bg-[#88868671] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-300 focus:scale-105" />

      <label className="mb-2 text-lg">Message:</label>
      <textarea required name="message" className="p-2 bg-[#88868671] rounded-md mb-4 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-300 focus:scale-105"></textarea>

      <button type="submit" className="bg-pink-500 text-white py-2 rounded-md text-lg w-full transition-transform duration-300 hover:scale-110">
        Submit
      </button>
    </form>
    <span className="block text-center mt-4">{result}</span>
  </div>
  <Navbar />
</div>

    </>
  )
}

export default Contact