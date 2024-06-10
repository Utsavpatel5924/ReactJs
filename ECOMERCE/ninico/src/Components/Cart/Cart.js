import React, { useState, useRef } from 'react'
import './Cart.css'
import Head from '../Header/Head';
import Fotter from '../Fotter/Fotter';
import Nav from '../Nav/Nav';
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import PageHeading from '../PageHeading/PageHeading';
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE, CART_QUT_INCREASE, CART_QUT_DECREASE } from "../../Redux/Action/Action";



const Cart = () => {
  const wishItems = useSelector((state) => state.Creatreduser.carts)
  console.log(wishItems, "wishlist");

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  const increment_Qut = (WItem) => {
    dispatch(CART_QUT_INCREASE(WItem))
  }
  const decrease_Qut = (WItem) => {
    dispatch(CART_QUT_DECREASE(WItem))
  }

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
                        let total = WItem.qty * WItem.price;

                        return (
                          <tr key={ind} className="divide-x divide-gray-200">
                            <td className="whitespace-nowrap px-2 py-4">
                              <div className="flex items-center">
                                <div className="h-32 w-32 flex-shrink-0 mx-auto">
                                  <img
                                    className="h-full w-full block mx-auto  object-cover"
                                    src={WItem.img}
                                    alt={WItem.itemName + "Img"}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-base font-semibold text-center">
                                {WItem.name}
                              </h1>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-center text-base font-medium">
                                $ {WItem.price}
                              </h1>
                            </td>
                            <td className="whitespace-nowrap">
                              <div className="quantity border rounded-md flex items-center justify-between p-4 cursor-pointer">
                                <p className='text-xl font-semibold'>{WItem.qty}</p>
                                <p className='quantity-btn flex flex-col items-stretch justify-center opacity-0'>
                                  <button onClick={() => increment_Qut(WItem)} className=' flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all py-[1.5px]' ><VscTriangleUp className='text-sm' /></button>
                                  <button onClick={() => decrease_Qut(WItem)} className=' flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all p-[1.5px]'><VscTriangleDown className='text-sm' /></button>
                                </p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <h1 className="text-center text-base font-medium">
                                $ {total}
                              </h1>
                            </td>
                            <td className="whitespace-nowrap ">
                              <div className="flex items-center justify-center">
                                <button onClick={() => remove(WItem.id)}>
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

      <div className='w-96 flex '>
        <div>
          <div>
            <h1 className='text-3xl'>Cart Totals</h1>
          </div>
          <div>
            <div className='flex justify-between items-center h-10 border-2 border-zinc-300'>
              <p>Subtotal</p>
              <p>$80</p>
            </div>
            <div className='flex  justify-between items-center h-10 border-2 border-t-0 border-zinc-300'>
              <p>total</p>
              <p>$80</p>
            </div>
          </div>
          <div>
            <button className="addToCart-btn inline-block border h-14 w-[250px] rounded-md bg-[#D51243] text-white font-medium text-base relative">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
}



export default Cart
