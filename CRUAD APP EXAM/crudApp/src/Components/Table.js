import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const people = [

]

export const Table = () => {
  const [data, setData] = useState([]);

  const loadUser = async () => {
    const res = await axios.get("http://localhost:3003/table");
    console.log(res.data, "res");
    setData(res.data)
  }

  useEffect(() => {
    loadUser();
  }, []
  )
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Students. You can add new Students, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/create" >Add new Student</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        First Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Last name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        city
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Mo. Number
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-start  text-xl font-normal text-gray-700"
                      >
                        Delete
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person, idx) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap text-start px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {idx + 1}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap text-start  py-4">
                          <div className="text-sm text-gray-900 ">{person.First}</div>
                        </td>
                        <td className="whitespace-nowrap text-start px-4 py-4">
                          <div className="text-sm text-gray-900 ">{person.Last}</div>
                        </td>
                        <td className="whitespace-nowrap text-start px-4 py-4 text-sm text-gray-700">
                          {person.Age}
                        </td>
                        <td className="whitespace-nowrap text-start px-4 py-4 text-sm text-gray-700">
                          {person.City}
                        </td>
                        <td className="whitespace-nowrap text-start px-4 py-4 text-sm text-gray-700">
                          {person.Number}
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
