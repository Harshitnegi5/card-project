import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      icon: "true",
      tag: {
        isOpen: "true",
        color: "green",
        tagdesc: "Download Now..",
      },
    },
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      icon: "true",
      tag: {
        isOpen: "true",
        color: "green",
        tagdesc: "Download Now..",
      },
    },
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      icon: "true",
      tag: {
        isOpen: "true",
        color: "green",
        tagdesc: "Download Now..",
      },
    },
    {
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      icon: "true",
      tag: {
        isOpen: "true",
        color: "green",
        tagdesc: "Download Now..",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full relative z-[3] top-0 left-0 flex gap-5 p-10"
    >
      {data.map((items) => (
        <Card reference={ref} data={items} />
      ))}
    </div>
  );
}

export default Foreground;
