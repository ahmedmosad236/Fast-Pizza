import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 ">
      <Link to="/" className=" tracking-widest">
        fast react pizza co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}

export default Header;
