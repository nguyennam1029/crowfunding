import axios from "axios";
import { imgbbAPI } from "config/config";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "", loading }) => {
  console.log("loadding ", loading);
  const [image, setImage] = useState("");
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
    setImage(imageData?.medium?.url);
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
          <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full p-2 text-center pointer-events-none">
            <img
              src={image}
              alt="upload-img"
              className="object-cover w-full h-full rounded-md"
            />
            <p className="absolute px-2 py-2 font-semibold text-red-600 bg-opacity-25 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-slate-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </p>
          </div>
        )}
      </Fragment>
    </label>
  );
};

export default ImageUpload;
