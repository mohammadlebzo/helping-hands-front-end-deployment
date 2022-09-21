// import Login from "../pages/login"
// import Signup from "../pages/signup"
import Image from "next/image"

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useAuth } from "../contexts/Auth";
import { useRouter } from "next/router";

export default function Hero() {
  const { tokens } = useAuth();
  const router = useRouter();
  // onClick={() => router.push("/signup")}
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="m-10 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome to Helping Hands
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              New platform provides opportunities for many local volunteer
              opportunities in Jordan.
              {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem/> */}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                onClick={() => router.push("/login")}
                class="px-8 py-3 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/signup")}
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Register
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/image/card.jpg"
              alt=""
              className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* heading */}

      <section class="text-black-600 body-font">
        <div class="container px-5  mx-auto">
          <div class="text-center mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900  ">
              Volunteer Work
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Volunteerism is defined as an unpaid activity for people to assist
              institutions, non-profit organizations, or individuals
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Enhance your social skills while helping others.
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Create new relationships, continuously meet people
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Take on new activities that you would like to try out.
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Volunteer in the fields of writing or design
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}

      <div class="my-10 bg-white py-11">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <p class="mt-20 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A better way to volunteer
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Find the campaigns for volunteering
            </p>
          </div>
          <div className="flex">
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <Image
                    class="rounded-lg "
                    src="/image/petra.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Find campaigns in Jordan</p>
                </figcaption>
              </figure>
            </div>
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <Image
                    class="rounded-lg"
                    src="/image/volunteer.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Join volunteering campaigns</p>
                </figcaption>
              </figure>
            </div>
            <div className="m-10">
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <Image
                    class="rounded-lg"
                    src="/image/helping.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                  <p>Help others and make a difference</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* slider component */}

      {/* Install pure-react-carousel using -> npm i pure-react-carousel */}
      <div className="">
        <div className="flex items-center justify-between   w-full absolute z-0">
          <div className="w-1/3 bg-white  " />
          <div className="w-4/6 ml-16 bg-gray-100 h-full" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
              Volunteers make a
              <br />
              <span className="text-blue-500">
                <strong>DIFFERENCE</strong>
              </span>
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
              Volunteers make a{" "}
              <span className="text-blue-500">
                <strong>DIFFERENCE</strong>
              </span>
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <Image
                        src="/image/martinKing.jpg"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <Image
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 mt-28 flex flex-col">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Lifes most persistent and urgent question is, What
                          are you doing for others?
                        </h1>
                      
                      </div>
                      <div className=" mt-14 ">
                        <p className="text-base   font-medium leading-4 text-gray-800">
                          -Martin Luther King. Jr.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className="flex relative"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <Image
                        src="/image/elizabeth.jpg"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <Image
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 mt-28 flex flex-col">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Volunteers do not necessarily have the time; they just
                          have the heart.
                        </h1>
                      </div>
                      <div className="mt-14">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          -Elizabeth Andrew
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
