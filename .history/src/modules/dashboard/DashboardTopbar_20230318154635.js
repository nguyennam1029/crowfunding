import { Button } from "components/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "store/auth/auth-slice";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";
import { authLogOut } from "../../store/auth/auth-slice";
import Swal from "sweetalert2";

const DashboardTopbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  console.log("current ", currentUser.avatar);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(authLogOut());
        navigate("/");
        Swal.fire("Log Out!", "you have successfully logged out", "success");
      } else {
        Swal.fire(
          "Failed!",
          "you have successfully canceled the logout",
          "warning"
        );
      }
    });
  };
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          className="px-7"
          type="button"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <div
          className="relative flex items-center justify-center gap-3 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={currentUser?.avatar}
            alt="crowfunding-app"
            className="object-cover w-[52px] h-[52px] rounded-full"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {toggle && (
            <div className="absolute w-[360px]  right-0 top-[74px] p-6 z-10  rounded-xl shadow-2xl bg-grayf5">
              <Link
                to={"/info"}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={currentUser?.avatar}
                  alt=""
                  className="object-cover w-[82px] h-[82px] rounded-full"
                />
                <h3 className="mt-4 mb-2 text-xl font-medium text-shadow-md text-darkSoft">
                  {currentUser?.fullName}
                </h3>
                <span className="text-sm font-medium text-darkSoft">
                  Trang cá nhân của bạn
                </span>
              </Link>
              <p className="w-full h-[2px] bg-[#eceef1] rounded-full my-4"></p>
              <div>
                <ul className="flex flex-col gap-y-5">
                  <Link
                    to="/"
                    className="flex items-center gap-x-4 text-base text-[#484848] font-medium"
                  >
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="12" fill="white"></circle>
                        <circle
                          cx="12"
                          cy="12"
                          r="11.5"
                          stroke="#142141"
                          stroke-opacity="0.06"
                        ></circle>
                        <path
                          d="M16.0692 11.647C14.3393 11.647 12.9373 13.069 12.9373 14.8233C12.9373 16.5776 14.3393 18 16.0692 18C17.7987 18 19.2008 16.5776 19.2008 14.8233C19.2008 13.069 17.7987 11.647 16.0692 11.647ZM7.93253 11.6471C6.20298 11.6473 4.80078 13.069 4.80078 14.8234C4.80078 16.5776 6.20298 17.9998 7.93253 17.9998C9.66222 17.9998 11.0644 16.5776 11.0644 14.8234C11.0644 13.069 9.66222 11.6471 7.93238 11.6471H7.93253ZM15.1325 7.67643C15.1325 9.43066 13.7305 10.8532 12.0009 10.8532C10.2711 10.8532 8.86904 9.43066 8.86904 7.67643C8.86904 5.92221 10.2711 4.5 12.0009 4.5C13.7305 4.5 15.1324 5.92221 15.1324 7.67643H15.1325Z"
                          fill="url(#paint0_radial_5964_252340)"
                        ></path>
                        <defs>
                          <radialGradient
                            id="paint0_radial_5964_252340"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12.0027 11.8865) scale(9.5472 8.9505)"
                          >
                            <stop stop-color="#FFB900"></stop>
                            <stop offset="0.6" stop-color="#F95D8F"></stop>
                            <stop offset="0.999" stop-color="#F95353"></stop>
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                    Tích hợp Asana
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-x-4 text-base text-[#484848] font-medium"
                  >
                    <img
                      src="https://www.gapowork.vn/static/media/icon-setting.48a5f99fb70be53a7207df3e057db4b7.svg"
                      alt=""
                    />
                    Caì đặt
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-x-4 text-base text-[#484848] font-medium"
                  >
                    <img
                      src="https://www.gapowork.vn/static/media/icon-edit-profile.649e47547cb1029ce6d74e136ab0bd9c.svg"
                      alt=""
                    />
                    Chỉnh sửa thông tin
                  </Link>
                  <li
                    onClick={handleLogOut}
                    className="flex items-center gap-x-4 text-base text-[#484848] font-medium"
                  >
                    <img
                      src="
                https://www.gapowork.vn/static/media/icon-logout.80174145cacdf33592060e7889130d8f.svg
                    "
                      alt=""
                    />
                    Đăng xuất
                  </li>
                  <p className="w-full h-[2px] bg-[#eceef1] rounded-full mb-4"></p>

                  <p className="text-sm text-center text-darkStroke">
                    Phiên bản giới hạn NamDev
                  </p>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
