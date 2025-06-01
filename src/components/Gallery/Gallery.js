import React, { useState } from 'react';
import './Gallery.css'
import img1 from '../assets/workgallery/001.JPG'
import img2 from '../assets/workgallery/002.JPG'
import img3 from '../assets/workgallery/003.JPG'
import img4 from '../assets/workgallery/004.JPG'
import img5 from '../assets/workgallery/005.JPG'
import img6 from '../assets/workgallery/006.JPG'
import img7 from '../assets/workgallery/007.JPG'
import img8 from '../assets/workgallery/008.JPG'
import img9 from '../assets/workgallery/009.JPG'
import img10 from '../assets/workgallery/010.JPG'
import img11 from '../assets/workgallery/011.JPG'
import img12 from '../assets/workgallery/012.JPG'
import img13 from '../assets/workgallery/013.JPG'
import img14 from '../assets/workgallery/014.JPG'
import img15 from '../assets/workgallery/015.JPG'
import img16 from '../assets/workgallery/016.JPG'
import img17 from '../assets/workgallery/017.JPG'
import img19 from '../assets/workgallery/019.JPG'
import img20 from '../assets/workgallery/020.JPG'
import img21 from '../assets/workgallery/021.JPG'
import img22 from '../assets/workgallery/022.JPG'
import img23 from '../assets/workgallery/023.JPG'
import img24 from '../assets/workgallery/024.JPG'
import img25 from '../assets/workgallery/025.JPG'
import img27 from '../assets/workgallery/027.JPG'
import img28 from '../assets/workgallery/028.jpg'
import img29 from '../assets/workgallery/029.JPG'
import img30 from '../assets/workgallery/030.JPG'
import img31 from '../assets/workgallery/031.JPG'
import img32 from '../assets/workgallery/032.jpg'
import img34 from '../assets/workgallery/034.JPG'
import img35 from '../assets/workgallery/035.JPG'

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('all photos')

    const images = [
        {src:img30, category:'Remodeling'},
        {src:img2, category:'Remodeling'},
        {src:img3, category:'Remodeling'},
        {src:img4, category:'Remodeling'},
        {src:img5, category:'Remodeling'},
        {src:img23, category:'Remodeling'},
        {src:img34, category:'Remodeling'},
        {src:img6, category:'Remodeling'},
        {src:img7, category:'Remodeling'},
        {src:img29, category:'Remodeling'},
        {src:img22, category:'Remodeling'},
        {src:img1, category:'Remodeling'},
        {src:img8, category:'Roofing'},
        {src:img35, category:'Roofing'},
        {src:img9, category:'Roofing'},
        {src:img10, category:'Roofing'},
        {src:img11, category:'Roofing'},
        {src:img12, category:'Roofing'},
        {src:img13, category:'Remodeling'},
        {src:img14, category:'Remodeling'},
        {src:img15, category:'Remodeling'},
        {src:img16, category:'Remodeling'},
        {src:img24, category:'Remodeling'},
        {src:img25, category:'Remodeling'},
        {src:img28, category:'Painting'},
        {src:img17, category:'Painting'},
        {src:img19, category:'Painting'},
        {src:img20, category:'Painting'},
        {src:img21, category:'Painting'},
        {src:img27, category:'Painting'},
        {src:img31, category:'Painting'},
        {src:img32, category:'Painting'},
    ]

        const filteredImages = selectedCategory === 'all photos'
        ? images : images.filter(img => img.category === selectedCategory);

    return (         
        <div id="work-gallery" class="">

            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                
                <div className="col-12 text-center">
                    <div className="title-container">
                        <hr className="title-line" />
                            <h3 className="title-header mx-3">Work Gallery</h3>
                        <hr className="title-line" />
                    </div>
                </div>

                <button type="button" onClick={() => setSelectedCategory('all photos')} class="text-blue-700 hover:text-black border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All Photos</button>
                <button type="button" onClick={() => setSelectedCategory('Painting')} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Painting</button>
                <button type="button" onClick={() => setSelectedCategory('Remodeling')} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Remodeling</button>
                <button type="button" onClick={() => setSelectedCategory('Flooring')} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Flooring</button>
                <button type="button" onClick={() => setSelectedCategory('Roofing')} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Roofing</button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 pb-5'>
                {filteredImages.map((img,index) => (
                    <div key={index}>
                        <img class="h-auto max-w-full rounded-lg" src={img.src}  alt=""></img>
                    </div>
                ))};
            </div>          
        </div>


        
    );
}

export default Gallery;
