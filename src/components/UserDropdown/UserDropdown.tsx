import { FC } from "react";

const UserDropdown: FC<{ userFullName: string; userAvatar: string }> = ({
  userFullName,
  userAvatar,
}) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 text-xs lg:text-sm text-white transition-colors bg-primary-dark bg-opacity-50 rounded-full p-1 shadow-lg">
      <span className="pl-2 drop-shadow">{userFullName}</span>
      <div className="w-7 lg:w-8 aspect-square rounded-full overflow-hidden">
        <img src={userAvatar} alt="user avatar" className="w-full h-full" />
      </div>
    </div>
  );
};

export default UserDropdown;
