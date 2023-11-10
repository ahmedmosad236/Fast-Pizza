import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "../features/menu/Loader";

function AppLayout() {
  // const navigation = useNavigation();
  // console.log(navigation);
  // const isLoading = navigation.state === "loading";
  // console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* <Loader /> */}
      {/* {isLoading && <Loader />} */}
      <Header />
      <div className=" overflow-scroll">
        <main className=" mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
