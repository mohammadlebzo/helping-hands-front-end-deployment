/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth } from '../contexts/Auth'
import { useRouter } from 'next/router';
// import { Dropdown, Nav } from 'react-bootstrap'
import { Dropdown } from "flowbite-react";
import Image from "next/image"

export default function Header(props) {
  const userInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/users/"

  const { tokens, logout, userInfo } = useAuth()
  const router = useRouter();


  // ******************Modal***************** //
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState();

  console.log('hi ', userData)

  useEffect(() => {
    (async () => {
      if (userInfo) {
        if (Number.isInteger(userInfo)) {
          const data = await axios.get(userInfoURL + userInfo);
          setUserData(data.data.username);
        }
        else{
          const data = await axios.get(userInfoURL + userInfo.user_id);
          setUserData(data.data.username);
        }
      }
    })();
  }, []);


  return (
    <>
      <nav className="bg-gradient-to-r from-white via-blue-200 to-white-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="\image\hand-13.jpg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            ></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Helping Hands
            </span>

          </a>
          <div className="flex md:order-2">


            {tokens ?
              <>
                <Dropdown
                  class="hover:opacity-75"
                  label={userData}>
                  <Dropdown.Item

                    onClick={() => {
                      setShowModal(true);
                      // logout()
                      // router.push('/')
                    }}>
                    <p class="text-red-500"> Sign out</p>
                  </Dropdown.Item>
                </Dropdown>
              </>
              : <>
                <button
                  onClick={() => router.push("/login")}
                  class="px-6 py-3 text-sm text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </>}

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                wtx-context="635A6E11-48E4-417A-B027-B9071281EEBA"
              ></input>
            </div>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className={router.pathname == "/" ? "text-blue-700" : "text-gray-700"} >
                <a
                  href="/"

                  className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className={router.pathname == "/About" ? "text-blue-700" : "text-gray-700"}>
                <a
                  href="About"

                  className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li className={router.pathname == "/Campaigns" ? "text-blue-700" : "text-gray-700"} >
                <a
                  href="Campaigns"
                  className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Campaigns
                </a>
              </li>
              {tokens && (
                <li className={router.pathname == "/Profile" ? "text-blue-700" : "text-gray-700"}>
                  <a
                    href="Profile"
                    className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profile
                  </a>
                </li>
              )}
            </ul>
          </div >
        </div >
      </nav >

      {
        showModal ? (
          <div
            class="relative z-10"
            aria- labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          class="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Logout
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            Are you sure you want to logout?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setShowModal(false);
                        logout();
                      }}
                      type="button"
                      class="inline-flex w-full justify-center rounded-md border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 bg-blue-100 shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div >
        ) : null
      }
    </>
  );
}