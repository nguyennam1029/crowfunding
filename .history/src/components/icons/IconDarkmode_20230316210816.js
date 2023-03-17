import useColorMode from "hooks/useColorMode";
import React from "react";

const IconDarkmode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <label
      className={`relative  flex items-center justify-center h-full w-full rounded-md ${
        colorMode === "dark" ? "bg-primary" : "bg-stroke"
      }`}
    >
      <input
        type="checkbox"
        // onChange={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="absolute top-0 z-50 w-full h-full opacity-0 cursor-pointer dur"
      />
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18.5455C10.264 18.5455 8.59918 17.8558 7.37167 16.6283C6.14415 15.4008 5.45455 13.736 5.45455 12C5.45455 10.264 6.14415 8.59918 7.37167 7.37167C8.59918 6.14415 10.264 5.45455 12 5.45455C13.736 5.45455 15.4008 6.14415 16.6283 7.37167C17.8558 8.59918 18.5455 10.264 18.5455 12C18.5455 13.736 17.8558 15.4008 16.6283 16.6283C15.4008 17.8558 13.736 18.5455 12 18.5455ZM12 16.3636C13.1573 16.3636 14.2672 15.9039 15.0856 15.0856C15.9039 14.2672 16.3636 13.1573 16.3636 12C16.3636 10.8427 15.9039 9.73278 15.0856 8.91444C14.2672 8.0961 13.1573 7.63636 12 7.63636C10.8427 7.63636 9.73278 8.0961 8.91444 8.91444C8.0961 9.73278 7.63636 10.8427 7.63636 12C7.63636 13.1573 8.0961 14.2672 8.91444 15.0856C9.73278 15.9039 10.8427 16.3636 12 16.3636ZM10.9091 1.09091C10.9091 0.488417 11.3975 0 12 0C12.6025 0 13.0909 0.488417 13.0909 1.09091V2.18182C13.0909 2.78431 12.6025 3.27273 12 3.27273C11.3975 3.27273 10.9091 2.78431 10.9091 2.18182V1.09091ZM10.9091 21.8182C10.9091 21.2157 11.3975 20.7273 12 20.7273C12.6025 20.7273 13.0909 21.2157 13.0909 21.8182V22.9091C13.0909 23.5116 12.6025 24 12 24C11.3975 24 10.9091 23.5116 10.9091 22.9091V21.8182ZM3.51491 5.05745C3.08895 4.63149 3.08895 3.94087 3.51491 3.51491C3.94087 3.08895 4.63149 3.08895 5.05745 3.51491L5.82873 4.28618C6.25469 4.71214 6.25469 5.40277 5.82873 5.82873C5.40277 6.25469 4.71214 6.25469 4.28618 5.82873L3.51491 5.05745ZM18.1713 19.7138C17.7453 19.2879 17.7453 18.5972 18.1713 18.1713C18.5972 17.7453 19.2879 17.7453 19.7138 18.1713L20.4851 18.9425C20.9111 19.3685 20.9111 20.0591 20.4851 20.4851C20.0591 20.9111 19.3685 20.9111 18.9425 20.4851L18.1713 19.7138ZM18.9421 3.51464C19.3682 3.0883 20.0594 3.08834 20.4855 3.51473C20.9113 3.94083 20.9111 4.63141 20.4852 5.05736L19.7139 5.82864C19.2879 6.25465 18.5972 6.25465 18.1712 5.82864C17.7452 5.4027 17.7452 4.71213 18.171 4.28609L18.9421 3.51464ZM4.28618 18.1713C4.71214 17.7453 5.40277 17.7453 5.82873 18.1713C6.25469 18.5972 6.25469 19.2879 5.82873 19.7138L5.05746 20.4851C4.63149 20.9111 3.94087 20.9111 3.51491 20.4851C3.08895 20.0591 3.08895 19.3685 3.51491 18.9425L4.28618 18.1713ZM22.9091 10.9091C23.5116 10.9091 24 11.3975 24 12C24 12.6025 23.5116 13.0909 22.9091 13.0909H21.8182C21.2157 13.0909 20.7273 12.6025 20.7273 12C20.7273 11.3975 21.2157 10.9091 21.8182 10.9091H22.9091ZM2.18182 10.9091C2.78431 10.9091 3.27273 11.3975 3.27273 12C3.27273 12.6025 2.78431 13.0909 2.18182 13.0909H1.09091C0.488417 13.0909 0 12.6025 0 12C0 11.3975 0.488417 10.9091 1.09091 10.9091H2.18182Z"
          fill="#A2A2A8"
        />
      </svg>
    </label>
  );
};

export default IconDarkmode;
