import React from "react";

export const ResponsiveImage = ({
  src,
  alt = "",
  className = "",
  eager = false,
  objectFit = "cover",
}) => (
  <img
    src={src}
    alt={alt}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    draggable={false}
    style={{ objectFit }}
    className={`w-full h-full ${className}`}
  />
);

export default ResponsiveImage;