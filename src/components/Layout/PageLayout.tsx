import React, { FC, ReactNode } from "react";
import { MenubarIcon, MoonIcon, NotificationIcon } from "../Icons";
import UserDropdown from "../UserDropdown/UserDropdown";

const PageLayout: FC<{
  children: ReactNode;
  pageTitle: string;
  appFuncs: any;
}> = ({ children, pageTitle, appFuncs }) => {
  return (
    <div className="flex flex-col gap-2">
      <header
        className={`relative header--fade-gradient min-h-[10rem] py-4 bg-header-bg-1 dark:bg-header-bg-6 bg-cover bg-bottom dark:md:bg-center`}
      >
        <div className="relative z-10 grid grid-cols-[1fr_auto] grid-rows-2 lg:grid-rows-1 lg:mt-7 gap-4 w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <UserDropdown
              userFullName="محمدصادق راستگو"
              userAvatar="/src/assets/user-avatar.jpg"
            />
            <button
              className="transition-colors hover:bg-[#1e1e1e] hover:bg-opacity-60 rounded-full p-1"
              onClick={() => appFuncs.changeHeaderBg()}
            >
              <NotificationIcon color="#fff" />
            </button>
            <button
              className="transition-colors hover:bg-[#1e1e1e] hover:bg-opacity-60 rounded-full p-1"
              onClick={() => appFuncs.switchDarkLightMode()}
            >
              <MoonIcon color="#fff" />
            </button>
          </div>
          <button className="col-start-2 self-center transition-colors bg-slate-900 bg-opacity-60 hover:bg-opacity-80 rounded w-[30px] h-[30px] flex justify-center items-center lg:hidden">
            <MenubarIcon color="#fff" />
          </button>
          <h1 className="lg:col-span-1 lg:col-start-2 col-span-full text-right font-bold text-primary-dark text-2xl justify-end items-center flex dark:text-white">
            {pageTitle}
          </h1>
        </div>
      </header>
      <main>
        <div className="grid gap-5 w-11/12 mx-auto mt-5">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
