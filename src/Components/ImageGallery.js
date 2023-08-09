import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './ImageGallery.css'
import Footer from './Footer';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const apiBaseUrl = 'https://localhost:7187/api/Image';
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(apiBaseUrl);
                console.log(response.data);
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, [apiBaseUrl]);

    return (
        <div>
            <Navbar />
            <div style={{marginTop:"7%"}} className='back-imagegal'>
            <h1 align="center">ImageGallery</h1>
            <div className='row'>

                {images.map((image) => (
                    <div key={image.image_Id} className='card col-sm-3 m-3' >
                       <div className='card-img-top'>
                        <img src={image.imageUrl} alt={image.iName} className='imggal-img'/>
                        <h6 align="center">{image.iName}</h6>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ImageGallery;
