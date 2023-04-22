import React, { useState } from "react";
import { createNewPost } from "../Firebase/CreatePostDB";

const CreatePost = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    filePath: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFormData({
        ...formData,
        filePath: selectedFile,
      });
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createNewPost(formData);
  };

  return (
    <form className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
      <h1 className="text-xl font-semibold lg:text-2xl">Add new Post</h1>
      <p className="pb-4 text-gray-500">Create a new post using below fields</p>

      <div>
        <label className=""> Post Title </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <label className=""> Post Content </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <textarea
            id="about"
            name="content"
            rows={8}
            className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={""}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div>
        <label className=""> Attachment: </label>
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={handleFileChange}
          />
          {previewUrl && (
            <img
              style={{ width: "300px", height: "300px" }}
              src={previewUrl}
              alt="Preview"
            />
          )}
        </label>
      </div>

      <div>
        <button
          type="button"
          className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
