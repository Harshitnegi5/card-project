import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      dragConstraints={reference}
      drag
      whileDrag={{ scale: "1.1" }}
      dragElastic={1}
      className="relative w-52 h-[280px] rounded-[30px] bg-zinc-700 py-10 px-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="leading-tight text-sm mt-5 font-extrabold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="flex justify-between items-center px-8  py-3  mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center">
            {data.icon ? <LuDownload size="1em" color="#fff" /> : <IoClose />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className="tag w-full bg-green-600 flex justify-center items-center py-3 ">
            {data.tag.tagdesc}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
