export default function ContactMe() {
  return (
    <div className="mt-8 m-3">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      
        <div className="flex justify-center">
        <div className="block w-full mt-6 pt-3 px-5 pb-6 bg-gray-200 border-gray-300 border-t-4 border-t-gray-600 rounded-lg shadow-md">
        
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
          </div>
          <div className="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="your.email@example.com" required />
          </div>
          <div className="mb-5">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message here..."></textarea>
          </div>
        
          <button type="submit" className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
        </form>
        
              </div>
        </div>
      </div>
  )
}
