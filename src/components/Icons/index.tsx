import { FC } from "react";

const NotificationIcon: FC<{ color: string }> = ({ color }) => (
  <svg
    width={24}
    height={24}
    strokeWidth={1.75}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    className="scale-[80%] lg:scale-[unset]"
  >
    <path
      d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.27 13a1.999 1.999 0 0 1-3.46 0"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoonIcon: FC<{ color: string }> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-moon scale-[80%] lg:scale-[unset]"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenubarIcon: FC<{ color: string }> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-menu scale-[70%] lg:scale-[90%]"
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

export { NotificationIcon, MenubarIcon, MoonIcon };
