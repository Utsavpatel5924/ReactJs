import React, { useState, useRef } from 'react'
import './Cart.css'
import Head from '../Header/Head';
import Fotter from '../Fotter/Fotter';
import Nav from '../Nav/Nav';
import PageHeading from '../PageHeading/PageHeading';

import { useDispatch, useSelector } from 'react-redux'
import { REMOVE,ADD_TO_QUANTITY } from "../../Redux/Action/Action";





const Cart = () => {
  const wishItems = useSelector((state) => state.Creatreduser.carts)
  console.log(wishItems, "wishlist");

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  return (
    <>
      <Head />
      <Nav />
      <PageHeading name='Cart' />

      <div className="sm:container ">
        <section className="mx-auto w-full py-20">
          <div className="mt-6 flex flex-col">
            <div className="overflow-x-auto ">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 ">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          <span>Images</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          Courses
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          Unit Price
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {wishItems.map((WItem, ind) => {

                        // const { name, price, img, id } = WItem;
                        
                        // const id=WItem.id;

                        return (
                          <tr key={ind} className="divide-x divide-gray-200">
                            <td className="whitespace-nowrap px-2 py-4">
                              <div className="flex items-center">
                                <div className="h-32 w-32 flex-shrink-0 mx-auto">
                                  <img
                                    className="h-full w-full block mx-auto  object-cover"
                                    src={WItem.img}
                                    // src={img}
                                    alt={WItem.itemName + "Img"}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-base font-semibold text-center">
                                {/* {name} */}
                                {WItem.name}
                              </h1>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-center text-base font-medium">
                                {WItem.price}
                              </h1>
                            </td>
                            <td className="whitespace-nowrap">
                              <div className="">
                                <input
                                  type="number"
                                  id="InputQuantity"
                                  min={1}
                                  defaultValue={1}
                                  className="block InputQuantitys mx-auto outline-none py-4 px-3 font-semibold border border-gray-300 rounded-md text-lg"
                                />
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-center text-base font-medium">
                                $ 
                              </h1>
                            </td>
                            <td className="whitespace-nowrap ">
                              <div className="flex items-center justify-center">
                                <button  onClick={() => remove(WItem.id)}>
                                  Remove
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='flex justify-between'>
      <div className='flex'>
        <input type='text' placeholder="Coupon code" className='border-2 border-gray-300 outline-none rounded-md'></input>
        <button className="addToCart-btn ms-3 border h-14 w-[150px] rounded-md bg-[#D51243] text-white font-medium text-base ">
          Applay Coupon
        </button>
      </div>
      <div>
        <button className="addToCart-btn inline-block border h-14 w-[150px] rounded-md bg-[#D51243] text-white font-medium text-base relative">
          Update cart
        </button>
      </div>
      </div>

      <Fotter />
    </>
  );
}



export default Cart
