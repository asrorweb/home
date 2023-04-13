import React from "react";
import { Link } from "react-router-dom";

function Buttons({ text, direction }) {
    return (
        <Link
            to={direction}
            className="py-2 px-6 rounded-lg max-sm:py-1 max-sm:px-3 text-xl bg-[#ffd700] dark:bg-inherit  dark:text-[#ffd700] hover:scale-[1.05] duration-300 border-4 border-[#ffd700]"
        >
            {text}
        </Link>
    );
}

export default Buttons;
