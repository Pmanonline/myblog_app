import React, { useEffect, useState } from "react";
// import Card from "../data/cards.json";
import { Menu } from "../components/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Modal from "../components/modal";
import DOMPurify from "dompurify";

export default function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // console.log(currentUser.username);
  // console.log(currentUser.id);
  // console.log(post.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://myblog-api-icp2.onrender.com/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <div className="containe w-full bg- ">
        <div className="grid  grid-cols-3 mid:block">
          <div key={post.id} className=" col-span-2 mx-4">
            <img src={`../upload/${post.postimg}`} className="mb-3" alt="..." />
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-gray-500">
                <p>Posted {moment(post.date).fromNow()}</p>
              </time>

              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {post.cat}
              </p>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-600">
                <span className="absolute " />
                {post.title}
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600 pr-[50px]">
                {getText(post.desc)}
                {/* {post.desc} */}
              </p>
            </div>
            <div className="flex">
              <div className="relative mt-8 flex items-center gap-x-4">
                {post.userImg && (
                  <img
                    src={post.userImg}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                )}
                <div className="text-sm leading-6 flex">
                  <div className="mr-9">
                    <p className="font-semibold text-indigo-700">
                      <span className="absolute " />
                      {post.authorname}
                    </p>
                    <p className="text-gray-600">{post.authorrole}</p>
                    <Mypost />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div key={post.id} className=" col-span-1 ">
            <div className="block  mx-auto max-w-2xl lg:mx-0 mt-10 pt-10 sm:mt-6 sm:pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                Related Posts
              </h2>
              <p className="mt-2 text-xs leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
              <Menu cat={post.cat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const Mypost = (id) => {
  const { currentUser } = useContext(AuthContext); // Replace with your logic to get the current user
  const [post, setPost] = useState({}); // Replace with your logic to get the post
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [postList, setPostList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://myblog-api-icp2.onrender.com/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://myblog-api-icp2.onrender.com/api/posts/${id}`
        );
        setLikes(res.data);
      } catch (err) {
        console.error(`Errror fetching likes:`);
      }
    };
    fetchPost();
  }, [id]);

  const likepost = async (id) => {
    try {
      await axios.post(`https://myblog-api-icp2.onrender.com/api/posts/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(likes);

  // Check if there is no current user or no username in the current user
  if (!currentUser || !currentUser.username) {
    return (
      <div key={post.id}>
        <div key={post.id} className="flex">
          <>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-indigo-600 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
            <div>
              <button>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="w-5 h-5 stroke-indigo-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </>
          {/* Rest of your component */}
        </div>
      </div>
    );
  }

  // Check if the post's username matches the current user's username
  const isCurrentUserPost = currentUser.username === post.username;

  // Render your component content

  return (
    <div key={post.id} className="flex mt-3">
      <>
        <Link to={`/write/?edit=2`} state={post}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-5 h-5 mr-3 stroke-indigo-600 hover:scale-110 hover:stroke-[#51e13b]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </Link>
        {/* confirm delete modal\ */}
        <Modal />
        {/* confirm delete modal\ */}

        {/* LIKE BUTTONS\ */}

        <div className=" mx-2  d-flex text-start">
          <button
            onClick={() => {
              likepost(post.id);
            }}
            className={
              post.likes > 0
                ? "text-blue font-semibold hover:text-purple"
                : "text-dark   hover:text-purple"
            }
          >
            Likes <span>{post.likes}</span>
          </button>
        </div>
        {/* LIKE BUTTONS\ */}
      </>
      {/* Rest of your component */}
    </div>
  );
};
