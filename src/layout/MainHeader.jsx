import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className=" p-8 bg-slate-200  relative">
      <Link to={"/basket"}>
        <span className="flex align-center justify-center rounded-full text-sm w-5 h-5 bg-red-500 text-white  absolute right-7 top-3 ">
          1
        </span>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="shopping"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          aria-hidden="true"
          className=" absolute right-12 top-5 cursor-pointer"
        >
          <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default MainHeader;
