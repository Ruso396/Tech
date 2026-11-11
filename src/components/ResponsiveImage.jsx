import React from "react";

export const ResponsiveImage = ({
  src,
  alt = "",
  className = "",
  eager = false,
  objectFit = "cover",
  width = 1200,
  height = 800,
}) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={eager ? "high" : "auto"}
    draggable={false}
    style={{ objectFit }}
    className={`w-full h-full ${className}`}
  />
);

export default ResponsiveImage;