import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/Auth";
import Image from "next/image"

export default function SelectedCampaign() {
  const router = useRouter();
  const data = router.query;

  const [items, setItems] = useState([]);
  const [category, setcategory] = useState([]);
  const [location, setlocation] = useState([]);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
      setcategory(items.category);
      setlocation(items.location);
      setuserInfo(items.organizer);
    }
  }, []);

  return (
    <>
      <section class="text-gray-600 body-font -mt-16 ">
        <div class="container px-5 py-24   flex flex-col">
          <div class="border mx-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                class="object-cover object-center h-60 w-full border "
                src="https://cdn.pixabay.com/photo/2017/09/08/18/54/volunteers-2729723_960_720.jpg"
              />
            </div>
            <div class="flex flex-col sm:flex-row  ">
              <div class="sm:w-1/3 text-center sm:pr-8  ">
                <p class="items-left justify-left mr-64 mb-2"> Organizrer </p>
                <div class="flex ml-10 ">
                  <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="font-medium title-font text-gray-900 text-lg pl-4 mt-1">
                    {" "}
                    <span class="text-xs font-medium text-black-600 uppercase"></span>
                    {userInfo.username}
                  </h2>
                </div>

                <div class="w-full h-1 bg-indigo-500 rounded mt-2 mb-4 mx-3"></div>
                <p class="  mr-52 mb-2">
                  Campaign Details 
                </p>

                <div class="flex flex-col items-center text-left justify-left">
                  <div class="flex items-center justify-between px-4   overflow-hidden">
                  <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-black-600 uppercase ">
                      Category:
                      <span class="lowercase px-1">{category.title} </span>
                    </span>
                  </div>

                  <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-black-600 uppercase">
                      location:
                      <span class="lowercase px-1"> {location.city_name}</span>
                    </span>
                  </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-4  overflow-hidden">
                  <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-black-600 uppercase">
                      Available_seats:{" "}
                      <span class="lowercase px-1">
                        {" "}
                        {items.available_sets}
                      </span>
                    </span>
                  </div>

                  <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-black-600 uppercase">
                      Date: <span class="lowercase px-1">{items.date}</span>
                    </span>
                  </div>
                  </div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8   sm:border-l border-gray-200 sm:border-t-0 border-t     sm:mt-0 text-center sm:text-left">
                <h2 class="font-medium title-font   text-gray-900 text-lg">
                  Title: {items.title}
                </h2>
                <br></br>
                <p class="leading-relaxed text-lg mb-4">{items.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
