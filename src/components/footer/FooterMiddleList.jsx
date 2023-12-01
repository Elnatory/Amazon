import React from "react";

export default function FooterMiddleList({ title, listItem }) {
return (
    <div className="w-full">
    <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
    </h3>
    <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
        item.listData.map((data, i) => (
            <li key={i} className="footerLink">
            {typeof data === "object" ? (
                <a href={data.link}>{data.text}</a>
            ) : (
                data
            )}
            </li>
        ))
        )}
    </ul>
    </div>
);
}
