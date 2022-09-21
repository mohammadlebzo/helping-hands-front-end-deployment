import Feed from "./Feed";
import PersonalInfo from "./PersonalInfo";
import Campaigns from "./Campaigns";
import CampaignsAsPosts from "./CampaignsAsPosts";
import { useAuth } from '../contexts/Auth'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import PostInput from "./PostInput";
import { useRouter } from "next/router";
// import Image from "next/image"
import Link from "next/link"


export default function MyPosts() {

  const { userInfo } = useAuth();

  const userInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/users/"
  let postsURL = "https://helping-hands-api.herokuapp.com/api/v1/user-post/"
  const campaignInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/campaign/"
  const connectionInfoURL = "https://helping-hands-api.herokuapp.com/api/v1/connection/member-campaigns/slug?id="

  const [savedData, setSavedData] = useState({});
  const router = useRouter();
  const filterData = async (id) => {
    let res = await axios.get(campaignInfoURL + id)
    // console.log(res.data)
    let storge = await localStorage.setItem('items', JSON.stringify(res.data));
    router.push({
      pathname: "/SelectedCampaign",
      query: { storge }
    })
  }

  // console.log(66, savedData)

  const [userData, setUserData] = useState();
  const [connections, setConnections] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      if (Number.isInteger(userInfo)) {
        const userdata = await axios.get(userInfoURL + userInfo);
        const connectiondata = await axios.get(connectionInfoURL + userInfo);
        const postsdata = await axios.get(postsURL);

        setUserData(userdata.data);
        setConnections(connectiondata.data);
        setPosts(postsdata.data.filter(item => item.author === userInfo))
      }
      else {
        const userdata = await axios.get(userInfoURL + userInfo.user_id);
        const connectiondata = await axios.get(connectionInfoURL + userInfo.user_id);
        const postsdata = await axios.get(postsURL);

        setUserData(userdata.data);
        setConnections(connectiondata.data);
        setPosts(postsdata.data.filter(item => item.author === userInfo.user_id))
      }


    })();
  }, []);

  // console.log(userData);

  // console.log(posts.filter(item => item.author === userInfo));

  let createdCampaigns = connections.filter(element => element.campaign.organizer.id === userData.id)
  let joinedCampaigns = connections.filter(element => element.campaign.organizer.id != userData.id)
  // console.log("c", createdCampaigns);
  // console.log("j", joinedCampaigns);

  if (createdCampaigns.length > 3) {
    createdCampaigns = createdCampaigns.slice(0, 3)
  }

  if (joinedCampaigns.length > 3) {
    joinedCampaigns = joinedCampaigns.slice(0, 3)
  }
  // console.log('User info here', userData);

  return (
    <>
      <button
        className="absolute top-24 left-10 w-16 h-10 hover:opacity-90 rounded-full"
      >
        <PostInput userData={userData} setPosts={setPosts} posts={posts} />
      </button>

      {/* Left Section */}
      <div class="flex justify-center h-screen px-4 text-gray-700">
        <div class="flex w-full max-w-screen-lg">
          {/* if the user Image the home button on the left we will display the feed component
            and if the user Image the campaigns component we will display the campaignsAsPosts component
          */}

          <div class="flex flex-col flex-grow border-l border-r border-gray-300">
            {userData &&
              <div class="flex-grow h-0 overflow-auto">
                {/* Personal info here  */}

                <div class="rounded-3xl overflow-hidden shadow-xl w-auto my-3  bg-gradient-to-t from-blue-400 via-blue-200 to-white  ">
                  <div class="flex justify-center mt-10">
                    {/* image here is a link from google  */}
                    <img src="https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?pid=ImageDet&rs=1" class="rounded-full border-solid border-white border-2 -mt-3 w-32 h-32" />
                  </div>
                  <div class="text-center px-3 pb-6 pt-2 ">

                    <h3 class="text-black text-lg bold font-sans"> {userData.username}</h3>
                    <p class="mt-2 font-sans font-light text-black"> {userData.location}</p>
                  </div>
                  <div class="flex justify-center pb-3 text-black">
                    <div class="text-center mr-3 border-r pr-3">
                      <h2> {connections.filter(element => element.campaign.organizer.id != userData.id).length} </h2>
                      <span>Joined Campaigns</span>
                    </div>
                    <div class="text-center">
                      <h2>{connections.filter(element => element.campaign.organizer.id === userData.id).length}</h2>
                      <span>Created Campaigns</span>
                    </div>
                  </div>
                </div>

                {/* posts here  */}
                <CampaignsAsPosts posts={posts} />
              </div>
            }
          </div>

          {/* if the user Image on the profile button we will display the personal info component */}
          {/* <PersonalInfo/> */}

          {/*################# Changing component #########################*/}

          {/* Right */}
          <div class="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
            <div>

              <h3 class="mt-6 font-bold">My Campaigns <span><Link href="Createcampain" className="text-sm text-blue-400 hover:text-blue-600">Create +</Link></span></h3>

              <h4 class="mt-6 font-semibold">Created <span><Link href="/" className="text-blue-400 hover:text-blue-600">see more</Link></span> </h4>

              {createdCampaigns.length === 0 && <p>No created campaigns for now</p>}

              {
                createdCampaigns.map(item => {
                  return (
                    <div key={item.id} class="flex w-full py-4 border-b border-gray-300">
                      <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
                        <img src="/image/hand-13.jpg"></img>
                      </span>
                      <div class="flex flex-col flex-grow ml-2">
                        <div
                          class="flex text-sm"
                        >
                          <span
                            onClick={() => filterData(item.campaign.id)}
                            class="font-semibold cursor-pointer"
                          >
                            {item.campaign.title}</span>
                          <span class="ml-1 opacity-50">{item.campaign.date}</span>
                        </div>
                        <p class="mt-1 text-sm">
                          {item.campaign.description.length > 55 ? item.campaign.description.substr(0, 55) + "...." : item.campaign.description}
                        </p>
                      </div>
                    </div>
                  )
                })
              }

              <h4 class="mt-6 font-semibold">Joined <span><Link href="/" className="text-blue-400 hover:text-blue-600">see more</Link></span> </h4>

              {joinedCampaigns.length === 0 && <p>No joined campaigns for now</p>}

              {
                joinedCampaigns.map(item => {
                  return (
                    <div key={item.id} class="flex w-full py-4 border-b border-gray-300">
                      <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
                        <img src="/image/hand-13.jpg"></img>
                      </span>
                      <div class="flex flex-col flex-grow ml-2">
                        <div class="flex text-sm">
                          <span
                            onClick={() => filterData(item.campaign.id)}
                            class="font-semibold cursor-pointer"
                          >
                            {item.campaign.title}</span>
                          <span class="ml-1 opacity-50">{item.campaign.date}</span>
                        </div>
                        <p class="mt-1 text-sm">
                          {item.campaign.description.length > 55 ? item.campaign.description.substr(0, 55) + "...." : item.campaign.description}
                        </p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div >
      <br></br>
      <br></br>
    </>
  );
}
