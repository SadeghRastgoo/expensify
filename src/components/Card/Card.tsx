import { ReactNode } from "react";
import CardHeading from "./CardHeading";

const Card = ({
  children,
  title,
  extendClass,
  extendCardClass,
}: {
  title: string;
  children: ReactNode;
  extendClass?: string;
  extendCardClass?: string;
}) => {
  return (
    <div
      className={`p-5 rounded bg-secondary-light custom-shadow-1 dark:bg-secondary-dark ${extendCardClass}`}
    >
      <CardHeading text={title} />
      <div className={extendClass}>{children}</div>
    </div>
  );
};

export default Card;
