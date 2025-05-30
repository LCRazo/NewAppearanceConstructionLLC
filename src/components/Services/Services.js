import React from 'react';
import Remodeling from '../assets/remodeling.jpg'
import Renovation from '../assets/renovating.png'
import Painting from '../assets/painting.jpg'
import Roofing from '../assets/roofing.jpg'
import Flooring from '../assets/flooring.jpg'
import './Services.css';


function Services(){
    return(    
        // Ensures full width and no background color 
        <div id="services" class="container-fluid">
            <div class="row">
                <div className="col-12 text-center">
                    <div className="title-container">
                        <hr className="title-line" />
                            <h3 className="title-header mx-3">Our Services</h3>
                        <hr className="title-line" />
                    </div>
                </div>
                <div class="col-sm mx-2">
                    <div className="service-item">
                    <img src={Remodeling} alt="Roof Installment" className="img-fluid"/>
                        <h3 className="service-title text-left">Remodeling</h3>
                        <p className="service-description text-left">From premium materials to precise craftsmanship, our remodeling service is built on quality, reliability, and customer satisfaction.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Renovation} alt="Roof Repair" className="img-fluid"/>
                        <h3 className="service-title text-left">Renovation</h3>
                        <p className="service-description text-left">Whether it’s updating outdated spaces or restoring damaged areas, our renovation service brings new life to your home.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Painting} alt="Roof Replacement" className="img-fluid"/>
                        <h3 className="service-title text-left">Painting</h3>
                        <p className="service-description text-left">Add the perfect finishing touch—whether interior or exterior—with colors that reflect your style and enhance your space.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Roofing} alt="Junk Removal" className="img-fluid"/>
                        <h3 className="service-title text-left">Roofing</h3>
                        <p className="service-description text-left">Protect your home with confidence—our roofing service offers expert installation, repairs, and replacements.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Flooring} alt="Junk Removal" className="img-fluid"/>
                        <h3 className="service-title text-left">Flooring</h3>
                        <p className="service-description text-left">From classic hardwood to modern vinyl and tile, our flooring service combines quality with stylish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;