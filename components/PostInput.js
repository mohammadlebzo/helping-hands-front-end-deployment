import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth } from '../contexts/Auth'

export default function PostInput(props) {

  const { tokens, refreshToken, isAuth } = useAuth();

  const [showInput, setShowInput] = useState(false);
  const [config, setConfig] = useState(tokens ? {
    headers: {
        'Authorization': `Bearer ${tokens.access}`
    }
} : null);

  let postsURL = "https://helping-hands-api.herokuapp.com/api/v1/user-post/"

  useEffect(() => {
    (async () => {
      if (tokens) {
        await refreshToken()
      }
    })();
  }, []);

  async function handleCreatePost(e) {
    e.preventDefault();

    // if (!isAuth()) {
    //   await refreshToken()
    // }

    // setTimeout(async () => {

    let userInput = {
      author: parseInt(props.userData.id),
      title: e.target.postTitle.value,
      intro: e.target.postTitle.value,
      body: e.target.postBody.value,
      image: null
    }

    console.log(config);
    await axios.post(postsURL, userInput, config).then(res => props.setPosts([...props.posts, res.data]))
    // }, 3000);

    setShowInput(false)
  }

  // console.log(props.userData.id);

  return (
    <>
      <button
        class="flex items-center w-full h-full text-3xl bg-gradient-to-t from-blue-400 via-blue-200 to-blue-100 rounded-full"
        onClick={() => setShowInput(true)}
      >
        <a className="w-full h-full">+</a>
      </button>

      {showInput ? (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Post Input
                      </h3>

                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <div>
                    <div class="flex flex-col flex-grow border-l border-r border-gray-300 ">
                      <form onSubmit={handleCreatePost}>
                        <div class="mb-4 w-full bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                          <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input type="text" id="postTitle" name="postTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                            <textarea id="postBody" name="postBody" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                          </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Post
                          </button>
                          <button
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowInput(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
