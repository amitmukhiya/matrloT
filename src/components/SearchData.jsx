import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import { NotificationManager } from 'react-notifications';

export default function SearchData() {

    const [Name, setName] = useState('');
    const [ageData, setAgeData] = useState();
    const [genderData, setGenderData] = useState();
    const [nationalityData, setNationalityData] = useState();

    const dataValidation = (name) => {
        if (name.length < 3 || name.match("  ") || name.match(/^[0-9]+$/)) {

            return false;
        }
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        if (format.test(name)) return false
        return true;
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (!dataValidation(Name)) {
            // alert("try again")
            NotificationManager.error('Something Wrong', 'Error!', 2000);
        } else {
            await fetch(`https://api.agify.io?name=${Name}`).then((data) => data.json()).then((res) => setAgeData(res))
            await fetch(`https://api.genderize.io?name=${Name}`).then((data) => data.json()).then((res) => setGenderData(res))
            await fetch(`https://api.nationalize.io?name=${Name}`).then((data) => data.json()).then((res) => setNationalityData(res.country))

        }

    }
    // console.log(ageData, genderData, nationalityData)
    return <>
        <div className=" p-5 w-screen flex items-center justify-center">
            <form className="w-full px-10 mt-5">
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-red-600"
                    >
                        <p > *Special characters and digits are not allowed!</p>
                        <p>*More than one continuous
                            space is not allowed!</p>
                        <p > *There Should be at least 3 characters entered in the
                            Name field!</p>

                    </label>
                    <input

                        type="text"
                        id="text"
                        className=" w-50 h-20 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        required minLength={3}
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button
                    onClick={HandleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Check Fun

                </button>
            </form>
        </div>
        {(ageData && nationalityData && genderData) &&
            < SearchResult ageData={ageData} genderData={genderData} nationalityData={nationalityData} />
        }
    </>;
}
