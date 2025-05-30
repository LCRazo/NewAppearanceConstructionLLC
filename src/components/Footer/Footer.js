import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){
    return(
    <footer id="contact" class="bg-black dark:bg-gray-900 items-center">
        <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">About Us</h2>
                 <p className='text-gray-500 max-w-sm break-words'>
                    We're your friendly local and family-owned roofing company 
                    with 15+ years of experience delivering superior exterior home 
                    improvement solutions for the RGV.
                </p>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact Info</h2>
                <p><a href="mailto:newappearance@att.net" className="text-gray-500 no-underline hover:underline text-left w-full sm:w-1/6">newappearance@att.net</a></p>
                <p><a href="tel:9563430436" className="text-gray-500 no-underline hover:underline">(956)343-0436</a></p>
                <p className='text-gray-500'>Office Hours:</p>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Services</h2>
                 <p className='text-gray-500'>Remodeling</p>
                 <p className='text-gray-500'>Renovation</p>
                 <p className='text-gray-500'>Painting</p>
                 <p className='text-gray-500'>Roofing</p>
                 <p className='text-gray-500'>Flooring</p>
               
            </div>
        </div>

        <div class="px-4 py-6 bg-black  dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class=" flex flex-col md:flex-row text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <strong> New Appearance Construction LLC</strong> All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                    <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                    <span class="sr-only">Instagram page</span>
                </a>
            </div>
        </div>
        </div>
    </footer>

    )
}

export default Footer;
