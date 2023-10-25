import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

export default function HeaderBottom(props) {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
                {/* ======================= List Items Start here ======================== */}
                <ul className="flex items-center gap-2 text-sm tracking-wide">
                    <li
                        onClick={() => setSidebar(true)}
                        className="flex items-center gap-1 headerHover"
                    >
                        <MenuIcon />
                        All
                    </li>
                    <li className="hidden md:inline-flex headerHover">Today's Deals</li>
                    <li className="hidden md:inline-flex headerHover">Customer Service</li>
                    <li className="hidden md:inline-flex headerHover">Gift Cards</li>
                    <li className="hidden md:inline-flex headerHover">Registry</li>
                    <li className="hidden md:inline-flex headerHover">Sell</li>
                </ul>
            </div>
        </>
    )
}
