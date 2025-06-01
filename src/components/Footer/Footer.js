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
                    We're your friendly local construction company 
                    with 25+ years of experience delivering superior exterior and interior home 
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
                <a href="https://www.instagram.com/YOUR_USERNAME" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 
                            114.9-51.3 114.9-114.9S287.6 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 
                            74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 
                            26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-93.7s-58-34.6-93.7-36.3c-37-2.1-147.9-2.1-184.9 
                            0-35.7 1.7-67.3 9.9-93.7 36.3s-34.6 58-36.3 93.7c-2.1 37-2.1 147.9 0 
                            184.9 1.7 35.7 9.9 67.3 36.3 93.7s58 34.6 93.7 
                            36.3c37 2.1 147.9 2.1 184.9 0 35.7-1.7 67.3-9.9 
                            93.7-36.3s34.6-58 36.3-93.7c2.1-37 2.1-147.9 
                            0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 
                            42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
                            2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                            9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 
                            99.5-9 132.1-9s102.7-2.6 
                            132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 
                            9 99.5 9 132.1s2.6 102.7-9 132.1z"/>
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
