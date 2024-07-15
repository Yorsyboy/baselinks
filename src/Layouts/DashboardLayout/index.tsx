import { Logo } from "../../Assets/Index";
import Sidebar from "../../Components/Sidebar";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const DashboardLayout = (props: any) => {

  return (
    <div className="font-montRegular bg-[#f1f5f9] overflow-y-auto w-screen h-screen relative">
      <div className="flex p-5 ">
        <nav className="bg-lmsPrimary py-5 pr-4 z-20 md:flex-[.2] ld:flex-[.15] h-[90vh] rounded-lg fixed top-5 w-[19%] hidden md:block">
          <div className="w-full flex flex-col items-center justify-center">
            <img src={Logo} alt="logo" className="w-[20%]" />

            <div className="mt-8 w-full relative">

              <Sidebar />
            </div>
          </div>
        </nav>
        <div className="w-full  mt-26 md:pl-[10rem] lg:pl-[20vw]">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
