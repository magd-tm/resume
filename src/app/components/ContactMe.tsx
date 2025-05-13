'use client'
import { useEffect, useState } from 'react';

export default function ContactMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load Web3Forms script
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      // Submit to Web3Forms
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contactme">
      <div className="mx-auto mt-8 m-3">
        <h1 className="text-3xl font-bold mt-8 m-3 text-gray-800">
          Contact Me
        </h1>
        <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="bg-white border-t-4 border-gray-600 rounded-lg shadow-lg p-6">
              {isSubmitted ? (
                // Success Message Card
                <div className="text-center p-6">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Thank you for contacting me. I&aposll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                // Original Form
                <form 
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="access_key" value="453f8a57-7f48-46e0-837d-090fb50ed728" />
                  {/* Remove redirect since we're handling it client-side */}
                
                  
                  {/* Form fields remain the same as before */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="h-captcha" data-captcha="true"></div>
                  <button
                    type="submit"
                    className="w-full flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}