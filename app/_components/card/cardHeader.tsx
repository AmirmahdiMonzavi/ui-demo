import Button from "../button";

type CardHeaderPropsType = {
  title: string;
  sub_title: string;
  onClick?: () => void;
  firstIcon?: JSX.Element;
  isShowButton?: boolean;
  titleButton?: string;
};

const CardHeader = ({
  title,
  sub_title,
  onClick,
  firstIcon,
  isShowButton = false,
  titleButton,
}: CardHeaderPropsType) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-bold text-secondary-10">{title}</h4>
        <p className="text-base text-secondary-07">{sub_title}</p>
      </div>
      {isShowButton && <Button variant="outlined" firstIcon={firstIcon} title={titleButton!} onClick={onClick!} />}
    </div>
  );
};

export default CardHeader;
