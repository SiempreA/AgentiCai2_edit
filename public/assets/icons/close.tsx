import React from "react";

const CloseIcon: React.FC<{
  fill?: string;
  opacity?: number;
  width?: string;
  height?: string;
}> = ({
  fill = "#D9534F",
  opacity = "100%",
  width = "100%",
  height = "100%",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke={fill} />
    <path
      d="M12 12L24 24M24 12L12 24"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default CloseIcon;