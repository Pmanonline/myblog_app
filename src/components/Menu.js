import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  const Location = useLocation();
  console.log(Location);
  // const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/posts/?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="mx-3">
      {posts.map((post) => (
        <div
          className=" flex flex-col  my-7 shadow-lg shadow-slate-300"
          key={post.id}
        >
          <img
            className="w-100  object-cover"
            src={`../upload/${post.postimg}`}
            alt="img"
          />

          <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-600">
            <span className="absolute  " />
            {post.title}
          </h3>

          <Link to={`/single/${post.id}`} className="py-2">
            <button className="border border-indigo-600 px-3.5 py-1.5 rounded-sm text-sm font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              ReadMore
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
