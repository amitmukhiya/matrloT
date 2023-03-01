import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return <><div>
        <div className="flex justify-center items-center h-screen bg-white ">
            <Link to="/search"><button className="px-10 text-xl py-2 rounded-lg text-white bg-cyan-500 hover:bg-cyan-600 bg-blue shadow-lg shadow-blue-500/50 font-medium">Start Fun</button></Link>
        </div>
    </div></>;
}
