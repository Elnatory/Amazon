import React from "react";

const FooterBackToTop = () => {
const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
    <div
    className="w-full bg-gray-700 cursor-pointer text-gray-100 text-white transition duration-300 hover:bg-gray-600"
    onMouseOver={() => {}}
    onMouseOut={() => {}}
    onClick={handleBackToTop}
    >
    <div className="w-full py-5">
        <div className="max-w-5xl mx-auto flex gap-1 items-center justify-center">
        <p className="font-normal text-[13px] cursor-pointer leading-3">
            Back to top
        </p>
        </div>
    </div>
    </div>
);
};

export default FooterBackToTop;
