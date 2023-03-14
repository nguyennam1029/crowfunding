import axios from "axios";
import { imgbbAPI } from "config/config";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "", image }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;

    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }
    const imageObj = {
      medium: imageData?.medium?.url,
      thumb: imageData?.thumb?.url,
      url: imageData?.url,
    };

    onChange(name, imageObj);
  };
  return (
    <label className=" relative w-full h-[200px] border border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
      <Fragment>
        {image && (
          <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full p-2 text-center rounded-md pointer-events-none">
            <img
              src={image}
              alt="upload-img"
              className="object-cover w-full h-full"
            />
            <p className="font-semibold">Choose photo</p>
          </div>
        )}
      </Fragment>
    </label>
  );
};

export default ImageUpload;
