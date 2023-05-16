import React, { useEffect, useState } from "react";
import { getPostsDetailsFromDb } from "../Firebase/GetPosts";

const PostsList = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [visiblePostCount, setVisiblePostCount] = useState(3);

  useEffect(() => {
    async function getPostDetails() {
      setPostDetails([]);
      const postData = await getPostsDetailsFromDb();
      postData.forEach((post) => {
        setPostDetails((prv) => [...prv, { ...post.data() }]);
      });
    }
    getPostDetails();
  }, []);

  const loadMorePosts = () => {
    setVisiblePostCount((prevCount) => prevCount + 3);
  };

  const visiblePosts = postDetails.slice(0, visiblePostCount);

  return (
    <section class="w-screen py-5">
      <h1 class="mb-2 text-center font-sans text-5xl font-bold my-14">
        Our Blog
      </h1>
      <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {visiblePosts.map((post, index) => (
          <article
            class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
            key={index}
          >
            <img
              class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
              src={post.imgURL}
              alt="blog"
            />
            <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
              Cities
            </h2>
            <div class="py-1 px-6">
              <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                {post.title}
              </h1>
              <p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                {post.content}
              </p>
            </div>
            <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
              <div class="flex flex-wrap text-sm text-gray-500">
                <span class="mr-1">Oct 30, 2022</span>
                <span class="">· 9 min read</span>
              </div>
              <div class="mt-1">
                <span class="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  3.5K
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visiblePostCount < postDetails.length && (
        <div class="m-8 text-center sm:mt-12 ">
          <button
            type="button"
            class="focus:shadow inline-flex cursor-pointer items-center justify-center rounded text-xs font-bold uppercase tracking-widest text-gray-500 transition-all duration-200 ease-in-out hover:text-gray-900"
          >
            <svg
              class="mr-3 block h-4 w-4 align-middle uppercase tracking-wider"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                class="uppercase"
              ></path>
            </svg>
            <button onClick={loadMorePosts}>Load More Articles</button>
          </button>
        </div>
      )}
    </section>
  );
};

export default PostsList;
