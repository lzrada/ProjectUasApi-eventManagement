import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/images/bg-login.jpg" alt="bg-login" className="bg-image" fill={true} />
      <div className="bg-white p-0 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4 ">
          <Image src="/images/bg-login.jpg" alt="image-login" width={800} height={800} className="object-cover w-full h-48 rounded-t-lg" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text- mb-4">Login</h2>
          <div className="mb-2">
            <div className="flex items-center py-2">
              <FontAwesomeIcon icon={faUser} className="text-pink-500 mr-2 fa-sm " style={{ fontSize: 2, width: 20 }} />
              <input type="text" placeholder="Username" className="appearance-none bg-pink-500  rounded-xl border-none w-full placeholder-white  text-white mr-3 py-1.5 px-2 leading-tight focus:outline-none " />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center py-2">
              <FontAwesomeIcon icon={faKey} className="text-pink-500 mr-2 fa-sm " style={{ fontSize: 2, width: 20 }} />
              <input type="password" placeholder="Password" className="appearance-none bg-pink-500 rounded-xl border-none w-full text-white placeholder-white mr-3 py-1.5 px-2 leading-tight focus:outline-none" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-500" />
              <span className="ml-2 text-sm text-gray-600">remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              forgot password
            </a>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-4">Login</button>
          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
