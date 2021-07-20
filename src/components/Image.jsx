import React from "react";

import classNames from "classnames";
import useOnScreen from "../hooks/useOnScreen";

export default function Image({ src, alt }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const isVisible = useOnScreen(containerRef);

  React.useEffect(() => {
    if (!isVisible || isLoaded) return;

    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true);
    }
  }, [isVisible, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={classNames("image-container", {
        "image-container_loaded": isLoaded,
      })}
    >
      {(isVisible || isLoaded) && (
        <img
          className={classNames("image", {
            image_loaded: isLoaded,
          })}
          ref={imageRef}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
}
