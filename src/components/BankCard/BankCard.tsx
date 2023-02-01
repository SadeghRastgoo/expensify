import React, { FC } from "react";

const BankCard: FC<{
  cardId: number;
  cardNumber: string;
  cardOwner: string;
  cardExp: string;
  cardCVV2: number;
}> = ({ cardId, cardNumber, cardOwner, cardExp, cardCVV2 }) => {
  return (
    <div
      className={`card absolute cursor-pointer w-80 h-48 ${
        cardId === 1 ? "right-0 z-10" : cardId === 2 ? "-left-4 scale-90" : ""
      }`}
    >
      <div className="face front absolute top-0 left-0 w-full h-full rounded-md">
        <h3 className="bank">بانک ملت</h3>
        <h3 className="number">{cardNumber}</h3>
        <h5 className="valid">
          <span>10/23</span>
        </h5>
        <h5 className="cardHolder">{cardOwner}</h5>
      </div>
      <div className="face back absolute top-0 left-0 w-full h-full rounded-md">
        <div className="blackbar"></div>
        <div className="ccvtext">
          <h5 className="text-[12px] uppercase">Authorized Signature</h5>
          <div className="whiteBar w-full relative mt-[5px] h-8 bg-white left-[40%]"></div>
          <div className="ccv left-full">123</div>
        </div>
        <p className="text absolute top-[2.75rem] left-1/2 -translate-x-1/2 w-10/12 text-[.6rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam
          et nesciunt, ipsum quae quisquam porro corporis ad iure, tenetur
          architecto itaque possimus esse non distinctio voluptatem aut! Sunt,
          labore!
        </p>
      </div>
    </div>
  );
};

export default BankCard;
