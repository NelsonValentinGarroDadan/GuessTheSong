import React from "react";
import { SvgIconProps } from "@mui/material";
const Card = ({Emoji,title,subtitle}:{Emoji:React.ElementType<SvgIconProps>,title:string, subtitle:string}) => {
    return (
        <div className="bg-purple-600 w-full h-full p-4 rounded flex justify-start items-center flex-col mb-5 xl:mb-2">
            <Emoji className="text-text-dark !text-5xl"/>
            <h3 className="text-text-dark text-xl font-bold text-center">{title}</h3>
            <p className="text-secondary-text-dark text-l text-center">{subtitle}</p>
        </div>
    );
}
export default Card;