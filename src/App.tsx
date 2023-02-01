import { useState } from "react";
import BankCard from "./components/BankCard/BankCard";
import BankCardsContainer from "./components/BankCard/BankCardsContainer";
import Card from "./components/Card/Card";
import ColumnChart from "./components/Charts/ColumnChart/ColumnChart";
import PageLayout from "./components/Layout/PageLayout";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appFuncs = {
    switchDarkLightMode() {
      setIsDarkMode(!isDarkMode);
    },
    getIsDarkMode() {
      return isDarkMode;
    },
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode && "dark bg-primary-dark text-white"
      }`}
    >
      <PageLayout
        bodyExtendClass="md:grid-cols-2"
        pageTitle="داشبورد"
        appFuncs={appFuncs}
      >
        <Card
          title="نمودار واریز و برداشت ۱۰ روز اخیر"
          extendClass="h-52"
          extendCardClass="relative"
        >
          <div className="flex gap-4 absolute top-5 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 shadow rounded-sm bg-[#8480f1]"></div>
              <span className="text-[#8480f1]">واریز</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 shadow rounded-sm bg-[#29c0c0]"></div>
              <span className="text-[#29c0c0]">برداشت</span>
            </div>
          </div>
          <ColumnChart />
        </Card>
        <Card
          title="حساب های من در یک نگاه"
          extendClass="mt-5"
          extendCardClass="relative !bg-transparent"
        >
          <div className="flex gap-4 absolute top-5 text-lg font-bold leading-none cursor-pointer p-1">
            +
          </div>
          <BankCardsContainer>
            <BankCard
              cardId={1}
              cardOwner="محمدصادق راستگو"
              cardNumber="6104 3373 7422 1750"
              cardCVV2={698}
              cardExp="04/04"
            />
            <BankCard
              cardId={2}
              cardOwner="محمدصادق راستگو"
              cardNumber="2233 2133 1231 e432"
              cardCVV2={698}
              cardExp="04/04"
            />
          </BankCardsContainer>
        </Card>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          حساب های من در یک نگاه
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          آخرین هزینه ها
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          هزینه های پیش رو
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          دسته بندی مخارج
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          دسته بندی مخارج
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          باقی مانده حساب
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          مجموع هزینه های این ماه
        </div>
        <div className="p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark">
          مجموع دریافتی های این ماه
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
