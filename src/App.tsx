import { useState } from "react";
import PageLayout from "./components/Layout/PageLayout";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerBg, setHeaderBg] = useState(1);

  const appFuncs = {
    switchDarkLightMode() {
      setIsDarkMode(!isDarkMode);
    },
    changeHeaderBg() {
      setHeaderBg(headerBg + 1);
    },
    getHeaderBg() {
      console.log("xxx");
      return headerBg;
    },
  };

  return (
    <div
      className={`App min-h-screen ${
        isDarkMode && "dark bg-[#121212] text-white"
      }`}
    >
      <PageLayout pageTitle="داشبورد" appFuncs={appFuncs}>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">
          نمودار واریز و برداشت ۱۰ روز اخیر
        </div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">
          حساب های من در یک نگاه
        </div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">آخرین هزینه ها</div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">هزینه های پیش رو</div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">دسته بندی مخارج</div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">دسته بندی مخارج</div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">باقی مانده حساب</div>
        <div className="p-5 rounded-md dark:bg-[#1e1e1e]">
          مجموع هزینه های این ماه
        </div>
        <div className="p-5 rounded-md bg-[#1e1e1e]">
          مجموع دریافتی های این ماه
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
