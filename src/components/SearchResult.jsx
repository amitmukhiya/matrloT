import React from "react";
import { ClipLoader, HashLoader } from "react-spinners/ClipLoader";
// import { NotificationContainer } from 'react-notifications';


export default function SearchResult({ ageData, genderData, nationalityData }) {
    const regionNames = new Intl.DisplayNames(
        ['en'], { type: 'region' }
    );

    let size = nationalityData && nationalityData.length ? nationalityData.length : 0;

    return <>
        <div className="p-10">

            <table className="border-collapse border border-slate-500 w-full">

                <thead>
                    <tr>
                        <th className="border border-slate-600 ">Name</th>
                        <th className="border border-slate-600 ">Gender</th>
                        <th className="border border-slate-600 ">Age</th>
                        <th colSpan={size} className="border border-slate-600 ">Country Probability %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="my-5">
                        <td rowSpan={2} className="border border-slate-700 ">{ageData.name || 'Na'}</td>
                        <td rowSpan={2} className="border border-slate-700 ">{genderData.gender || 'Na'}</td>
                        <td rowSpan={2} className="border border-slate-700 ">{ageData.age || 'Na'}</td>
                        {nationalityData?.map((data, i) => <td key={i} className="border border-slate-700 ">{regionNames.of(data.country_id) || 'Na'}</td>)}

                        {/* <td className="border border-slate-700 ">2</td>
                    <td className="border border-slate-700 ">2</td>
                    <td className="border border-slate-700 ">2</td>
                    <td className="border border-slate-700 ">2</td>
                    <td className="border border-slate-700 ">2</td> */}

                    </tr>
                    <tr>
                        {nationalityData?.map((data, i) => <td key={i} className="border border-slate-700 ">{(data.probability * 100).toFixed(2)}</td>)}
                    </tr>

                </tbody>
            </table>
        </div></>;
}
