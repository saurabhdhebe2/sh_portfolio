// components/GetInTouchForm.js
import { useState, useContext, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FlashMessage from './Flashmessage';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [flashMessage, setFlashMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        'service_kehoo69', // Service ID
        'template_n0wn01w', // Template ID
        {
          to_name: 'Shubham',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: '_PiVoUCRYoGlv6Z7u',
        }
      );

      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        setFlashMessage({
          message: 'Email sent successfully!',
          type: 'success',
        });
      } else {
        setFlashMessage({
          message: 'Error sending email. Please try again later.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFlashMessage({
        message: 'Error sending email. Please try again later.',
        type: 'error',
      });
    }
  };

  useEffect(() => {
    let timer;
    if (flashMessage) {
      timer = setTimeout(() => {
        setFlashMessage(null);
      }, 2000); // 2 seconds
    }
    return () => clearTimeout(timer);
  }, [flashMessage]);

  return (
    <div
      id="contact"
      className="bg-[#372F33] p-20 mx-32"
      // style={{
      //   backgroundImage: `url(/assets/images/contact-image.avif)`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {flashMessage && (
        <FlashMessage message={flashMessage.message} type={flashMessage.type} />
      )}
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="mr-4 flex-grow">
              <label
                htmlFor="name"
                className="block text-gray-200 mb-2 font-semibold"
              >
                NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 border-gray-800 rounded-sm focus:outline-none focus:border-blue-600"
                placeholder="Enter your name"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="email" className="block mb-2 font-semibold">
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 border-gray-800 rounded-sm focus:outline-none focus:border-blue-600"
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              MESSAGE:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Start typing here..."
              className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 border-gray-800 rounded-sm focus:outline-none focus:border-blue-600"
              rows={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchForm;
