import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

export default function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [authorName, setAuthorName] = useState(state?.authorname || "");
  const [authorRole, setAuthorRole] = useState(state?.authorrole || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://https://myblog-api-icp2.onrender.com/api/upload",
        formData
      );
      return res.data;
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    upload();
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(
            `https://myblog-api-icp2.onrender.com/api/posts/${state.id}`,
            {
              title,
              desc: value,
              cat,
              authorname: authorName,
              authorrole: authorRole,
              postimg: file ? imgUrl : "",
            },
            {
              withCredentials: true, // Includes cookies in the request
            }
          )
        : await axios.post(
            `https://myblog-api-icp2.onrender.com/api/posts/`,
            {
              title,
              desc: value,
              cat,
              authorname: authorName,
              authorrole: authorRole,
              postimg: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true, // Includes cookies in the request
            }
          );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* second */}

      <div className=" mt-5 grid grid-cols-12 mid:block">
        <div className="mx-1  col-span-7">
          <div className="flex justify-between mid:mx-4 ">
            <input
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="border-2  p-3 flex border-slate-300 focus:outline-[#5AFBD9]  my-1 mod:w-[40vw]"
              type="text"
              name="authorName"
              placeholder="Users Name "
            />
            <input
              required
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
              className="border-2  p-3 flex border-slate-300 focus:outline-[#5AFBD9] my-1  mod:w-[40vw]"
              type="text"
              name="authorRole"
              placeholder="Users Role"
            />
          </div>
          <div className="mid:mx-4">
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2  p-3 flex border-slate-300 focus:outline-[#5AFBD9]  md:w-[60vw]  my-1"
              type="text"
              name="title"
              placeholder="Post Title"
            />
          </div>
          <div className="mid:mt-5 mid:mb-[4rem] mid:mx-4">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-[23.2rem] border-none md:w-[60vw]"
            />
          </div>
        </div>
        <div className="  col-span-5 gap-5 ">
          <div className="flex flex-col justify-between  border-2  my-5 gap-1 py-2  mx-2  px-1 mt-1 mr-3 md:ml-[3rem] mid:ml-4 ">
            <h2 className="text-3xl"> Select Category</h2>
            <div>
              <input
                checked={cat === "Art"}
                type="radio"
                name="Art"
                value="Art"
                id="Art"
                className="mx-1"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Art">Art </label>
            </div>

            <div>
              <input
                type="radio"
                name="cat"
                id="science"
                value="science"
                className="mr-2"
                checked={cat === "science"}
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Science">Science </label>
            </div>

            <div>
              <input
                checked={cat === "Technology"}
                className="mx-1"
                type="radio"
                name="cat"
                value="Technology"
                id="Technology"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Technology">Technology </label>
            </div>

            <div>
              <input
                checked={cat === "Cinema"}
                className="mx-1"
                type="radio"
                name="cat"
                value="Cinema"
                id="Cinema"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Cinema">Cinema </label>
            </div>

            <div>
              <input
                checked={cat === "Design"}
                className="mx-1"
                type="radio"
                name="cat"
                value="Design"
                id="Design"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Design">Design </label>
            </div>

            <div>
              <input
                checked={cat === "Food"}
                className="mx-1"
                type="radio"
                name="cat"
                value="Food"
                id="Food"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Food">Food </label>
            </div>
          </div>
          <div className="flex flex-col  border-2   gap-2 py-2  px-1 mt-1 mr-3 md:ml-[3rem] mid:ml-4  ">
            <h2 className="text-3xl">Publish Post</h2>
            <div>
              <span>
                Status: <b>Draft</b>
              </span>
            </div>
            <div>
              <span>
                Visibility: <b>Public</b>
              </span>
            </div>
            {/* <div>
              <input
                style={{ display: "none" }}
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] w-[30rem] mx-auto "
                type="file"
                name="file"
              />
              <label className=" border-slate-600 rounded-sm  border hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Select Image to upload
              </label>
            </div> */}
            <div>
              <input
                style={{ display: "none" }}
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="border-2 rounded-lg p-3 flex border-blue focus:outline-[#5AFBD9] w-[30rem] mx-auto "
                type="file"
                name="file"
              />
              <label
                className=" border rounded-md cursor-pointer hover:border-[#FF7B57]"
                htmlFor="file"
              >
                Upload Image
              </label>
            </div>

            {/* <button className="rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[5px] rounded-br-[5px]    px-4 py-1  ease-in duration-100 bg-[#FF7B57] text-sm hover:bg-[#FFffff] hover:text-slate-900 hover:border hover:border-black text-white max-w-fit mx-1 my-1">
              Save as a draft
            </button> */}

            <div className="mt-2">
              <Link
                to={`#`}
                className="border border-indigo-600 px-2 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save as draft{" "}
              </Link>
            </div>

            <div className="flex justify-between my-2">
              <Link
                to={`#`}
                onClick={handleSubmit}
                className=" border-indigo-600 border-2 px-2 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Publish Post
              </Link>

              <button
                onClick={handleSubmit}
                className="border border-indigo-600 px-2 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
    </>
  );
}
