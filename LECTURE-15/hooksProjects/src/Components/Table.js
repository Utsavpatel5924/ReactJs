import React, { useEffect, useState } from 'react'
import Data from "./Tabel_data";
const Table = () => {
    const [val, setData] = useState(Data);
    console.log(val, "Data")
    return (
        <div>
            <h1 className='text-5xl'>TABLE</h1>
            <div className="flex flex-col mt-10">
                <table className="min-w-full text-left  font-light  bg-green-300 ">
                    <thead className=" border-4 font-medium border-white ">
                        <tr>
                            <th className="px-6 py-4 cursor-crosshair">ID</th>
                            <th className="px-6 py-4 cursor-crosshair">NAME</th>
                            <th className="px-6 py-4 cursor-crosshair">EMAIL</th>
                            <th className="px-6 py-4 cursor-crosshair">CITY</th>
                            <th className="px-6 py-4 cursor-crosshair">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((value, ind) => {
                            return (
                                <>
                                    <tr className="border-2 text-sm bg-lime-300 font-medium border-white">
                                        <td className="px-6 py-4 font-medium">{value.id}</td>
                                        <td className=" px-6 py-4">{value.name}</td>
                                        <td className=" px-6 py-4">{value.email}</td>
                                        <td className=" px-6 py-4">{value.city}</td>
                                        <td className=" px-6 py-4">{value.phone}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default Table

{/* <tr className="border-2 text-sm font-medium border-white">
                            <td className=" px-6 py-4 font-medium">2</td>
                            <td className=" px-6 py-4">CSS</td>
                            <td className=" px-6 py-4">@.CSS</td>
                            <td className=" px-6 py-4">Surat</td>
                            <td className=" px-6 py-4">3825757839</td>
                        </tr>
                        <tr className="border-2 text-sm bg-lime-300 font-medium border-white">
                            <td className=" px-6 py-4 font-medium">3</td>
                            <td className=" px-6 py-4">C++</td>
                            <td className=" px-6 py-4">@.C++</td>
                            <td className=" px-6 py-4">Bharuch</td>
                            <td className=" px-6 py-4">3825757839</td>
                        </tr>
                        <tr className="border-2 text-sm font-medium border-white">
                            <td className=" px-6 py-4 font-medium">4</td>
                            <td className=" px-6 py-4 ">DSA</td>
                            <td className=" px-6 py-4">@.DSA</td>
                            <td className=" px-6 py-4">Mumbai</td>
                            <td className=" px-6 py-4">3825757839</td>
                        </tr>
                        <tr className="border-2 text-sm bg-lime-300 font-medium border-white">
                            <td className=" px-6 py-4 font-medium">5</td>
                            <td className=" px-6 py-4">JAVASCRIPT</td>
                            <td className=" px-6 py-4">@.JAVASCRIPT</td>
                            <td className=" px-6 py-4">Botad</td>
                            <td className=" px-6 py-4">3825757839</td>
                        </tr> */}