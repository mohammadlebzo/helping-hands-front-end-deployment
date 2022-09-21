/* eslint-disable react/jsx-key */
import useSWR from "swr";
import axios from "axios";
import Image from "next/image"

export default function CampaignsAsPosts(props) {
  // console.log(props.posts);

  return (
    <>
      {props.posts.length === 0 && <p className="my-20 text-center" >No posts for now</p>}
      {
        props.posts.map(post => {
          return (
            <div class="flex w-full p-8 border-b border-gray-300">
              <Image src="https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?pid=ImageDet&rs=1" class="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full" />
              <div class="flex flex-col flex-grow ml-4">
                <div class="flex">
                  <span class="font-semibold"> {post.auther}</span>

                  {/* <span class="ml-auto text-sm">Just now</span> */}
                </div>

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.intro}
                </h5>

                <p class="mt-1">
                  {post.body}.{" "}

                </p>
                {/* </div> */}
                <div class="flex mt-2">
                  <button class="text-sm font-semibold">Like</button>
                  <button class="ml-2 text-sm font-semibold">Reply</button>
                  <button class="ml-2 text-sm font-semibold">Share</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </>

  )
}
