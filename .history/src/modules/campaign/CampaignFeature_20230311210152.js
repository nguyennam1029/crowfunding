import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCampaign } from "store/campaign/campaign-slice";
import Swal from "sweetalert2";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = ({ item, crud = false }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(deleteCampaign(id));
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      } else {
        Swal.fire("Failed!", "You have no right to delete post", "warning");
      }
    });
  };
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage
        imageUrl={item?.featured_image?.url}
        className="h-[266px] flex-1"
      ></CampImage>
      <div className="flex-1 max-w-[435px]">
        {crud ? (
          <div className="flex items-center justify-between mb-4">
            <CampCategory
              text={item?.category}
              className="mb-0 text-sm"
            ></CampCategory>
            <div className="flex items-center justify-center gap-4">
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(item?.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => navigate(`/update-campaign?id=${item?.id}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
            </div>
          </div>
        ) : (
          <CampCategory
            text={item?.category}
            className="text-sm"
          ></CampCategory>
        )}

        <CampTitle className="mb-4 text-xl font-bold">{item?.title}</CampTitle>
        <CampDesc className="mb-6 text-sm">{item?.short_description}</CampDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta
            size="big"
            text={`Raised of ${item?.goal}`}
            number={item?.goal}
          ></CampMeta>
          <CampMeta
            size="big"
            text="Total backers"
            number={item?.amount}
          ></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
