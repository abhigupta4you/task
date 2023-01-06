import React from 'react'
import { BsSearch,BsTwitter,BsGithub,BsInstagram,BsInboxesFill } from 'react-icons/bs';
import{HiHome,HiShoppingCart} from 'react-icons/hi'

function User() {
    return (
        <div>
            <div className="w-full bg-cover text-white  bg-pack-train ">
                <div className='m-2 p-5  bg-opacity-20 flex  sm:space-x-2'>
                    <div className='h-10 sm:h-40 mt-6 rounded-full basis-[20%] w-full'>
                        <img src="images/index.png" className='rounded-2xl' />
                    </div>
                    <div className='basis-[80%]'>
                        <nav className='p-5 sm:p-9 ml-3  sm:flex justify-between cursor-pointer  w-fit sm:space-x-96 m-5 rounded-2xl  bg-blue-400 opacity-40 '>
                            <ul className='sm:flex sm:space-x-28 font-bold  justify-items-start justify-between' >
                                <li className='hover:text-orange-300  text-black hover:underline'>HOME</li>
                                <li className='hover:text-orange-800 text-black inline-block hover:underline'>OUR COMPANIES</li>
                                <li className='hover:text-orange-100 text-black hover:underline'>OUR SERVICES</li>
                            </ul>
                            <ul className='sm:flex space-y-2  sm:space-x-12 text-black  justify-items-start justify-between'>
                                <li>
                                    Career
                                </li>
                                <li>

                                    contact
                                </li>
                                <li className='text-xl sm:text-4xl'>
                                <BsSearch/>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='sm:flex sm:p-6 pb-5'>
                    <div className='basis-[10%] '>
                        <div className='w-1/2 ml-0 mt-7 cursor-pointer text-xl sm:text-2xl h-1/3'>
                        <BsTwitter/>
                        <br />
                        <BsGithub/>
                      
                        <br />
                        <BsInstagram/>
                        </div>

                    </div>
                    <div className='basis-[90%]'>
                        <h1 className='font-semibold sm:font-extrabold text-orange-500 text-4xl sm:text-7xl text-center'>R A M A E R A <br />
                            I N D U S T R I E S</h1>
                        <p className='sm:p-4 p-2 m-3 text-2xl sm:text-4xl'>An incredible multi-industrial approach orientd towards financial independence, customer focus and serving the best
                            quality to the people.
                        </p>
                        <p className='text-center'>
                            <button className='sm:p-3 p-1 rounded-3xl ring-white text-xl sm:text-3xl hover:border-r-white hover:bg-orange-400 bg-orange-500'>Explore more
                             </button>
                          
                        </p>
                       
                    </div> 
                </div>

            </div>
            <div className='bg-zinc-900 text-white  pt-5 sm:pt-20' >
                <div className='sm:flex'>
                    <div className='basis-[30%]  h-1/2 w-full  justify-center sm:justify-start sm:ml-0'>
                        <img src="images/Animation.gif" className='sm:h-80 h-40 rounded-3xl' />
                    </div>
                    <div className='basis-[70%] h-40  sm:h-80  '>
                        <h1 className='text-center sm:text-5xl text-2xl font-bold text-orange-500 pt-10'>THE RAMAERA EXPANSION</h1>
                        <p className='text-center font-serif sm:pt-6 pt-14'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p>
                    </div>
                </div>
                <br />
                {/* first */}
                <div className='sm:flex p-16 sm:p-14'>
                    <div className='basis-[30%]  sm:h-60  w-full justify-between  sm:justify-start ml-0'>
                        <img src="images/box.jpg" className='sm:h-60 h-32 mt-11 sm:mt-24 rounded-2xl' />
                    </div>
                    <div className='basis-[70%] sm:h-80 h-40 ml-4 '>
                        <h1 className='text-center sm:text-4xl text-2xl font-semibold  text-white sm:pt-4'>Unleashing the strengh of <br /> <span className='text-purple-600'>Technology  </span><button><BsInboxesFill/></button></h1>
                        <br />  <p className='text-center font-serif   sm:p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center pb-4 sm:pb-0'>
                            <button className='bg-purple-500 sm:hover:p-4 hover:p-2 border-l-current border-purple-700 sm:p-3 p-1 rounded-3xl '>Read more</button></p>
                    </div>
                </div>
                {/* second */}
                <div className='sm:flex p-16 mt-6 sm:mt-0  sm:p-14'>

                    <div className='basis-[70%] sm:h-80 p-5 sm:p-0 mt-20 sm:mt-0 h-40 ml-4 '>
                      
                        <h1 className='text-start text-2xl sm:text-4xl font-semibold  text-yellow-400 sm:pt-4'>  <button><HiHome/></button>   Making <br /> accomodation easier
                         <span className='text-purple-600'></span></h1>
                        <br />  <p className='text-start font-serif p-3 sm:p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center'>
                            <button className='bg-yellow-400 border-l-current sm:hover:p-4 hover:p-2 bg-border-purple-700 sm:p-3  rounded-3xl ring-white'>Read more</button></p>
                    </div>

                    <div className='basis-[30%]  h-60 w-full  justify-start ml-0'>
                        <img src="images/officd.jpeg" className='h-60 mt-24 rounded-2xl' />
                    </div>
                </div>
                <div className='sm:flex p-16 sm:p-14'>
                    <div className='basis-[30%]  h-60 w-full justify-center sm:justify-start ml-0'>
                        <img src="images/diary.jpeg" className='h-60 sm:mt-24 mt-9 rounded-2xl' />
                    </div>
                    <div className='basis-[70%] h-80 ml-4 '>
                        <h1 className='text-center text-2xl sm:text-4xl font-semibold  text-white pt-4'> Packaging industry for <br /> business <span className='text-yellow-400'>growth</span><button><HiHome/></button></h1>
                        <br />  <p className='text-center font-serif  p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center'>
                            <button className='bg-yellow-400 sm:hover:p-4 hover:p-2 border-l-current border-purple-700 p-1 sm:p-3  rounded-3xl ring-white'>Read more</button></p>
                    </div>
                </div>
                {/*second */}
                <div className='sm:flex p-16 sm:p-14'>

                    <div className='basis-[70%] h-80 ml-4 '>
                        <h1 className='text-start text-2xl sm:text-4xl font-semibold  text-green-500 pt-4'>Offering the best with <br /> FMCG INDUSTRY <span className='text-purple-600'></span><button><HiHome/></button></h1>
                        <br />  <p className='text-start font-serif  p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center'>
                            <button className='bg-green-400 sm:hover:p-4 hover:p-2 border-l-current border-purple-700 sm:p-3 p-1  rounded-3xl ring-white'>Read more</button></p>
                    </div>

                    <div className='basis-[30%] pt-10 sm:pt-0 h-60 w-full  justify-center sm:justify-start ml-0'>
                        <img src="images/shoping cart.jpeg" className='h-60 mt-24 rounded-2xl' />
                    </div>
                </div>
                <div className='sm:flex p-16 sm:p-14'>
                    <div className='basis-[30%]  h-60 w-full  justify-start ml-0'>
                        <img src="images/vegetable.jpeg" className='h-60 mt-24 rounded-2xl' />
                    </div>
                    <div className='basis-[70%] h-80 ml-4 '>
                        <h1 className='text-center text-2xl sm:text-4xl font-semibold  text-yellow-400 pt-4'>Unleashing the strengh of <span className='text-purple-600'>Technology</span>  <button><HiShoppingCart/></button></h1>
                        <br />  <p className='text-center font-serif  p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center'>
                            <button className='bg-yellow-400 border-l-current sm:hover:p-4 hover:p-2 border-purple-700 p-1 sm:p-3  rounded-3xl ring-white'>Read more</button></p>
                    </div>
                </div>

              
                <div className='sm:flex p-16 sm:p-14'>

                    <div className='basis-[70%] h-80 ml-4 '>
                        <h1 className='text-start text-2xl sm:text-4xl font-semibold  text-white pt-4'>Unleashing the strengh of <br /> <span className='text-red-600'>Technology</span><button><HiHome/></button></h1>
                        <br />  <p className='text-start font-serif  p-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis earum, vitae et illo qui natus fuga commodi, iste quaerat aut provident? Odit, commodi in, fugiat facilis quidem at perspiciatis mollitia autem reprehenderit quisquam necessitatibus aperiam ipsam odio distinctio? In eius, delectus ullam quidem quas libero nam earum obcaecati temporibus dignissimos!
                        </p><br />
                        <p className='text-center'>
                            <button className='bg-red-600 sm:hover:p-4 hover:p-2 border-l-current border-purple-700 sm:p-3 p-1  rounded-3xl ring-white'>Read more</button></p>
                    </div>

                    <div className='basis-[30%]  h-60 w-full mb-5 sm:mb-0 justify-center sm:justify-start ml-0'>
                        <img src="images/officd.jpeg" className='h-60 mt-24 rounded-2xl' />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default User