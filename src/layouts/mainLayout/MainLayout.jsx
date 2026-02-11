import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
