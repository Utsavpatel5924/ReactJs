import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export const Table = () => {
  const [data, setData] = useState([]);
  const [serchTerm, setSerchTerm] = useState('');
  const [curuntPage, setCuruntPage] = useState(1);
  
  const filterData = data.filter(table => table.First.toLowerCase().includes(serchTerm.toLowerCase()))
   || recode.Last.toLowerCase().includes(serchTerm.toLowerCase())

  const recodPage = 4;
  const lastidx = curuntPage * recodPage;
  const firstidx = lastidx - recodPage;
  const recode = filterData.slice(firstidx, lastidx);
  const npage = Math.ceil(filterData.length / recodPage)
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const loadUser = async () => {
    const res = await axios.get("http://localhost:3001/table");
    console.log(res.data, "res");
    setData(res.data)
  }

  useEffect(() => {
    loadUser();
  }, []
  )

  const ondelete = (id) => {
    axios.delete(`http://localhost:3001/table/${id}`)
      .then((res) => {
        loadUser();
        alert("item is dedete");
      })
      .catch((error) => {
        alert("item is not dedete");
        console.log(error, "error");
      })
  }

  function prePage() {
    if (curuntPage !== 1) {
      setCuruntPage(curuntPage - 1)
    }
  }
  function changCpage(id) {
    setCuruntPage(id)
  }

  function nextPage() {
    if (curuntPage !== npage) {
      setCuruntPage(curuntPage + 1)
    }
  }

 
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
          <div className='border-2 border-black '>
            <input type="search" name="" className='outline-0' placeholder='FirstName' onChange={(e) => setSerchTerm(e.target.value)} id="" />
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            ><Link to="/create" >Add student</Link>

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
                        className=" text-center text-sm font-normal text-gray-700"
                      >
                        Student Id
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        First name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Last name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        City
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recode.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.First}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.Last}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.Age}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.City}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <button className='ms-5'>
                            <Link to={`/edit/${person.id}`} ><i class="fa-regular fa-pen-to-square text-xl"></i></Link>
                          </button>
                          <button onClick={() => ondelete(person.id)} className=''>
                            <i class="fa-solid fa-trash text-xl ms-5"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
              <nav>
                <ul className='pagination flex justify-center'>
                  <a href="# "
                    // onClick={ nextPage}
                    onClick={prePage}
                  ><li className='page-item  flex items-center border-2 border-black border-solid h-10 w-28 justify-center'>
                      ← prev
                    </li>
                  </a>
                  {
                    numbers.map((n, i) => {
                      <li className={`page-item ${curuntPage === n ? 'active' : ""}`} key={i}>
                        <a href="#" className='page-item' onClick={changCpage}>{n}</a>
                      </li>
                    })
                  }
                  <a href="# "
                    // onClick={prePage}
                    onClick={nextPage}
                  >
                    <li className='page-item flex items-center ms-4 border-2 border-black border-solid h-10 w-28 justify-center'>
                      next →
                    </li>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
