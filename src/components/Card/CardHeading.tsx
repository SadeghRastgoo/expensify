const CardHeading = ({ text }: { text: string }) => {
  return (
    <h2 className="text-right font-medium text-secondary-dark dark:text-primary-light">
      {text}
    </h2>
  );
};

export default CardHeading;
