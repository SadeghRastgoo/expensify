import { ReactNode } from "react";
import { Props } from "recharts/types/container/Surface";
import BankCard from "./BankCard";

const BankCardsContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex relative h-52 md:h-[unset]">{children}</div>;
};

export default BankCardsContainer;
