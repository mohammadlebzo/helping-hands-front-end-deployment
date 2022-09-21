import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../contexts/Auth';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Signup(props) {
  const { Signup } = useAuth();
  const router = useRouter();

  function handleSignup(e) {
    e.preventDefault();
    let userInput = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      phone: e.target.phone.value,
      location: e.target.location.value
    }
    Signup(userInput);
    router.push('/login');
  }

  const [locations, setLocations] = useState([]);

  // const locationsURL = "http://127.0.0.1:8000/api/v1/campaign/location/"
  const locationsURL = "https://helping-hands-api.herokuapp.com/api/v1/campaign/location/"

  useEffect(() => {
    (async () => {
      const data = await axios.get(locationsURL);
      setLocations(data.data);
    })();
    // console.log(locations);
  }, []);

  return (
    <>
      <section class="my-20 g-white dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* <button
              className='w-12 hover:opacity-75'
              onClick={() => props.render(false)}
            >
              <p className='text-2xl text-gray-900 md:text-2xl dark:text-white'>&#x2190;</p>
            </button> */}
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up
              </h1>
              <form
                onSubmit={handleSignup}
                wtx-context="9855C790-E4BE-4AD0-86FD-09FA92788929"
              >
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                  ></input>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="firstname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required=""
                      wtx-context="96737BDE-1F6C-4BC8-8065-F2E122F2915D"
                    ></input>
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="lastname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required=""
                      wtx-context="4FC071DC-A20D-45DC-80DB-9F7CFC7860A2"
                    ></input>
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-45-678"
                      required=""
                      wtx-context="774AC80A-74F6-427B-8A50-004F1AA4AF89"
                    ></input>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Location
                    </label>
                    <select
                      name="location"
                      id="location"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {locations.map((item) => {
                        return (
                          <option key={item.id} value={item.city_name}>
                            {item.city_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required=""
                    wtx-context="E87975BD-86A1-405A-836F-B5E9D4363ABD"
                  ></input>
                </div>
                <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required=""
                    wtx-context="EA36D926-A118-4933-B9DF-EDB6AC0B5748"
                  ></input>
                </div>
                <div class="mb-6">
                  <label
                    for="confirm_password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirmpassword"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required=""
                    wtx-context="88D5C7B6-2C4E-4E1F-8D6A-8E5CA56877BB"
                  ></input>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                      wtx-context="D194C4D5-94C6-40CE-AE67-D97922517D11"
                    ></input>
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      class="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}