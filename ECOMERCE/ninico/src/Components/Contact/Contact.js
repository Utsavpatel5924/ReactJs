import React from "react";
import "./Contact.css";
import Location from "../Assate/location-dot-solid.svg";
import Call from "../Assate/phone-solid.svg";
import Clock from "../Assate/clock-regular.svg";
import HeadPhone from "../Assate/headset-solid.svg";
import RightArrow from "../Assate/arrow-right-solid.svg";
import Head from "../Header/Head";
import Nav from "../Nav/Nav";
import Fotter from '../Fotter/Fotter'

function Contact() {
    return (
        <>
        <Head/>
        <Nav/>
        <hr className=" my-3"/>   
        <div id="Contact" className=" mx-auto ">

            <div className="sm:container mx-auto Contact-data-box grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-6 lg:gap-y-0 mb-32">

                <div className="Contact-details col-auto lg:col-span-4 ">
                    <div className="contact-link-wrap border border-gray-500 rounded-md py-9 px-9 mb-3.5">
                        <h1 className="Contact-details-heading text-[2rem] capitalize font-bold mb-5">
                            Get In Touch
                        </h1>
                        <ul className="">
                            <li className="my-[20px] flex items-center justify-start">
                                <span className="icons mr-4 self-start">
                                    <img src={Location} alt="Location icon" />
                                </span>
                                <span className="contact-link">
                                    <a href="#address-Map">
                                        24/26 Strait Bargate, Boston, PE21, United Kingdom
                                    </a>
                                </span>
                            </li>
                            <li className="my-[20px] flex items-center justify-start">
                                <span className="icons mr-4 self-start">
                                    <img src={Call} alt="Call icon" />
                                </span>
                                <span className="contact-link">
                                    <a href="tel:6 - 146 - 389 - 5748">
                                        +098 (905) 786 897 8
                                        <br />6 - 146 - 389 - 5748
                                    </a>
                                </span>
                            </li>
                            <li className="my-[20px] flex items-center justify-start">
                                <span className="icons mr-4 self-start">
                                    <img src={Clock} alt="Clock icon" />
                                </span>
                                <span className="contact-link">
                                    <p>
                                        Store Hours : <br />
                                        10 am - 10 pm EST, 7 days a week
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-btn-wrap flex flex-col items-center justify-center">
                        <a href="tel:6 - 146 - 389 - 5748" className="contact-btn">
                            <p>Get Support On Call </p>
                            <span className="icons ml-4">
                                <img src={HeadPhone} alt="HeadPhone icons" />
                            </span>
                        </a>
                        <a
                            href="https://www.google.com/maps/@36.963672,-119.2249843,7.17z"
                            target="_blank"
                            className="contact-btn"
                        >
                            <p>Get Direction</p>
                            <span className="icons ml-4">
                                <img src={Location} alt="Location icon" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="Contact-form col-auto lg:col-span-8">
                    <div className="Contact-form-heading">
                        <h1 className="text-[2rem] capitalize font-bold">
                            Make Custom Request
                        </h1>
                        <p className="text-gray-600 capitalize text-[1rem]">
                            Must-have pieces selected every month want style Ideas and Treats?
                        </p>
                    </div>
                    <form   action="https://formspree.io/f/xayrvgve"   method="POST">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 py-6">
                            <input
                                type="text"
                                id="large-input"
                                className="col-span-6 block w-full px-5 py-3 border rounded-lg text-[1.2rem] "
                                placeholder="Full name"
                                title="Please fill out this field"
                                name="Full name"
                            />
                            <input
                                type="email"
                                id="large-input"
                                className="col-span-6 block w-full px-5 py-4 border rounded-lg text-[1.2rem] "
                                placeholder="Email address"
                                title="Please fill out this field"
                                name="email"
                            />
                        </div>

                        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 pb-6">
                            <input
                                type="number"
                                id="large-input"
                                className="col-span-6 block w-full px-5 py-3 border rounded-lg text-[1.2rem] "
                                placeholder="Phone number"
                                title="Please fill out this field"
                                name="number"
                            />
                            <input
                                type="text"
                                id="large-input"
                                className="col-span-6 block w-full px-5 py-4 border rounded-lg text-[1.2rem] "
                                placeholder="Subject"
                                title="Please fill out this field"
                                name="subject"
                            />
                        </div>

                        <div className="pb-8">
                            <textarea
                                id="message"
                                rows="7"
                                className="block px-5 py-[18px] w-full text-[1.2rem] border rounded-lg"
                                placeholder="Enter massage"
                                title="Please fill out this field"
                                name="message"
                            ></textarea>
                        </div>

                        <button className="bg-[#D51243] form-button flex items-center justify-evenly text-[#FFFFFF] font-bold text-[1.1rem] min-w-[185px] min-h-[55px] px-2 rounded-[5px]">
                            Get A Quote <span className="icons"><img src={RightArrow} alt="Right Arrow" /></span>
                        </button>
                    </form>
                </div>

            </div>

            <div id="address-Map" className="address-map-container">
                <iframe className="w-full min-h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586583353!2d72.73989513751901!3d21.159180203813413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714531920315!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <Fotter/>
        </>
    );
}

export default Contact;