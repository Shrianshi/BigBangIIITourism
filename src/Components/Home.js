import './Home.css';
import MainImage from '../assets/img/Mainimage2.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Element } from 'react-scroll';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Backimage from '../assets/img/Backimage5.jpg'

const Home = () => {
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
            <div className="main-img mt-5">
                <img src={Backimage} className="container-fluid px-1" />
                <div className="image-text offset-md-3" style={{marginTop:"10%"}}> "Discover the beauty of new places and the joy of new experiences."</div>
            </div>           

            <Footer />
        </div>
    );
};
export default Home;