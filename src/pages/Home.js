import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";

// import { PostCardMapping } from "../components/Postcard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showmore, setShowmore] = useState(false);

  const Location = useLocation();
  console.log(Location);
  const cat = useLocation().search;

  const toggleshowmore = () => {
    setShowmore(!showmore);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://myblog-api-icp2.onrender.com/api/posts${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <div className="container mx-auto justify-center mt-8 md:mt-10 text-justify">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl text-center">
          Recent Blog Posts
        </h2>
      </div>
      <div className="mx-auto grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 lg:mt-6 justify-center text-justify">
        {posts.map((post) => (
          <div className="py-6 text-gray-800 w-auto h-auto sm:px-6">
            <img
              style={{
                // height: "25vw",
                // width: "30rem",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              src={`../upload/${post.postimg}`}
              className="mb-5 sm:w-[30rem] sm:max-h-[30rem]     mod:h-auto  mod:w-full"
              alt="..."
            />

            <h5 className="mb-3 text-lg font-bold mt-3 leading-6 text-indigo-600">
              {post.title}
            </h5>
            <p className="text-sm mb-6 leading-6 text-gray-600">
              {/* {getText(post.desc)} */}
              {/* {getText(post.desc)} */}
              {showmore
                ? getText(post.desc)
                : `${getText(post.desc).substring(0, 200)}`}
              <span className={post.desc.length < 200 ? "hidden" : " "}>
                {showmore ? "" : "...."}
              </span>
            </p>

            <Link
              to={`/single/${post.id}`}
              className="border border-indigo-600 px-3.5 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Read More{" "}
              <span className="ml-2" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
  // return (
  //   <div className="container mx-auto justify-center mt-8 md:mt-10 text-justify">
  //     <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl text-center">
  //       Recent Blog Posts
  //     </h2>
  //     <PostCardMapping />
  //   </div>
  // );
}
