import React, { useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [iName, setIName] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const handleINameChange = (e) => {
    setIName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('iName', iName);
      formData.append('image', image);

      // Make a POST request to the API endpoint
      const response = await axios.post('https://localhost:7187/api/Image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      window.alert("Image has uploaded successfully!")
      // Handle the response, if needed
      console.log(response);

      setImage(null);
      setImageName('');
      setIName('');
    } catch (error) {
      // Handle errors, if any
      console.error(error);
    }
  };

  return (
    <div>
        <NavbarAdmin/>
    <div className='container-fluid row background py-4' style={{marginTop:'7%'}}>
        <h1 align="center">Add Image</h1>
    <div className='card offset-md-4 col-md-4  card-sm shadow-lg'>
      <form onSubmit={handleSubmit} className='card-body'>
        <div className='form-group m-3'>
          <input type="file" className="form-control" onChange={handleImageChange} />
        </div>
        <div className='form-group m-3'>
          <input
            type="text" className='form-control'
            placeholder="Enter Image Name"
            value={iName}
            onChange={handleINameChange}
          />
        </div>

        <div>
          <button type="submit" className='btn btn-dark m-3' disabled={!image}>
            Upload Image
          </button>
        </div>
      </form>
      {imageName && <p>Selected Image: {imageName}</p>}
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AddImage;
