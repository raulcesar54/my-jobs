import { Icon } from "./interface";

export const PackageIcon = (props: Icon) => {
  const { size, strokeWidth } = props;
  return (
    <svg
      width={size || "209"}
      height={size || "209"}
      viewBox="0 0 209 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M143.687 81.8583L65.3125 36.6621"
        stroke="white"
        stroke-width={strokeWidth || "11"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M182.875 139.333V69.6667C182.872 66.6124 182.066 63.6127 180.537 60.9685C179.009 58.3242 176.812 56.1284 174.167 54.6012L113.208 19.7679C110.561 18.2393 107.557 17.4345 104.5 17.4345C101.443 17.4345 98.4393 18.2393 95.7917 19.7679L34.8333 54.6012C32.1883 56.1284 29.9913 58.3242 28.4629 60.9685C26.9344 63.6127 26.1281 66.6124 26.125 69.6667V139.333C26.1281 142.388 26.9344 145.387 28.4629 148.032C29.9913 150.676 32.1883 152.872 34.8333 154.399L95.7917 189.232C98.4393 190.761 101.443 191.565 104.5 191.565C107.557 191.565 110.561 190.761 113.208 189.232L174.167 154.399C176.812 152.872 179.009 150.676 180.537 148.032C182.066 145.387 182.872 142.388 182.875 139.333Z"
        stroke="white"
        stroke-width={strokeWidth || "11"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.4763 60.61L104.5 104.587L180.524 60.61"
        stroke="white"
        stroke-width={strokeWidth || "11"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M104.5 192.28V104.5"
        stroke="white"
        stroke-width={strokeWidth || "11"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
