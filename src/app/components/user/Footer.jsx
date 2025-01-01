// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold"></h2>
            <p className="mt-2">Subscribe to our newsletter!</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-lg"
              />
              <button className="bg-purple-500 px-4 py-2 rounded-r-lg">Subscribe</button>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Useful Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="mt-2">+02 574 328 301</p>
          </div>
        </div>
      </footer>
    );
  }
  