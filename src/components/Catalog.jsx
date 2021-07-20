import React from "react";
import Image from "./Image";

export default function Catalog({ items }) {
  return (
    <div className="catalog">
      {items.map((item, i) => (
        <Image key={i} src={item} alt={i} />
      ))}
    </div>
  );
}
