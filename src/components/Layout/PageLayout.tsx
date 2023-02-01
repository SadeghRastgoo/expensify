import { FC, ReactNode } from "react";
import { appFuncsType } from "../../types/app_funcs";
import { MenubarIcon, MoonIcon, NotificationIcon, SunIcon } from "./../Icons";
import UserDropdown from "./../UserDropdown/UserDropdown";

const PageLayout: FC<{
  children: ReactNode;
  pageTitle: string;
  appFuncs: appFuncsType;
  bodyExtendClass?: string;
}> = ({ children, pageTitle, appFuncs, bodyExtendClass }) => {
  return (
    <div className={`flex flex-col gap-2 `}>
      <header
        className={`relative header--fade-gradient min-h-[10rem] py-4 bg-header-bg-1 dark:bg-header-bg-6 bg-cover bg-bottom dark:md:bg-center`}
      >
        <div className="relative z-10 grid grid-cols-[1fr_auto] grid-rows-2 lg:grid-rows-1 lg:mt-7 gap-4 w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <UserDropdown
              userFullName="محمدصادق راستگو"
              userAvatar="/src/assets/user-avatar.jpg"
            />
            <button className="transition-colors bg-primary-dark shadow-lg bg-opacity-50 rounded-full p-1">
              <NotificationIcon color="#fff" />
            </button>
            <button
              className="transition-colors bg-primary-dark shadow-lg bg-opacity-50 rounded-full p-1"
              onClick={() => appFuncs.switchDarkLightMode()}
            >
              {appFuncs.getIsDarkMode() ? (
                <SunIcon color="#fff" />
              ) : (
                <MoonIcon color="#fff" />
              )}
            </button>
          </div>
          <button className="col-start-2 self-center transition-colors bg-primary-dark bg-opacity-50 hover:bg-opacity-70 rounded w-[30px] h-[30px] flex justify-center items-center lg:hidden shadow-lg">
            <MenubarIcon color="#fff" />
          </button>
          <h1 className="lg:col-span-1 lg:col-start-2 col-span-full text-right font-medium text-secondary-dark text-2xl justify-end items-center flex dark:text-white">
            {pageTitle}
          </h1>
        </div>
      </header>
      <main>
        <div
          className={`grid gap-5 w-11/12 max-w-7xl mx-auto my-5 ${bodyExtendClass}`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
