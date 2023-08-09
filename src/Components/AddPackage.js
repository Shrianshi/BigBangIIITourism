import React from "react";
import { useState,useEffect } from "react";
import Backimage from '../assets/img/Backimage6.jpg';
import './AddPackage.css'


const defaultImageSrc='../assets/img/Backimage3.jpg';

const initialFeildValues={
    p_id:0,
    p_Name:'',
    desc:'',
    pricing:'',
    food_Details:'',
    acc_details:'',
    imageName:'',
    imageSrc:defaultImageSrc,
    imageFile:null

}
const AddPackage = (props) => {
    const{addOrEdit,recordForEdit}=props
    const[values,setValues]=useState(initialFeildValues);
    const[errors,setErrors]=useState({})
 
    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])
    
    const handleInputChange=e=>{
        const{name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const showPreview=e=>{
        if(e.target.files && e.target.files[0]){
            let imageFile=e.target.files[0];
            const reader=new FileReader();
            reader.onload=x=>{
                setValues({
                    ...values,
                    imageFile,
                    imageSrc:x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else{
            setValues({
                ...values,
                imageFile:null,
                imageSrc:defaultImageSrc
            })
        }
    }
    const validate=()=>{
        let temp={}
        temp.p_Name=!values.p_Name.trim()?false:true;
        temp.desc = !values.desc.trim() ? false : true;
        temp.imageSrc=values.imageSrc==defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x=>x==true)
    }
    
    const resetForm=()=>{
        setValues(initialFeildValues)
        document.getElementById('image-uploader').value=null;
        setErrors({})
    }

    const handleFormSubmit=e=>{
        e.preventDefault()
        if(validate()){
          const formData=new FormData();
            formData.append('p_id',values.p_id);
            formData.append('p_Name',values.p_Name);
            formData.append('desc',values.desc);
            formData.append('pricing',values.pricing);
            formData.append('food_Details',values.food_Details);
            formData.append('acc_details',values.acc_details);
            formData.append('imageName',values.imageName);
            formData.append('imageFile',values.imageFile);
            addOrEdit(formData,resetForm);
            
          
        }
    }

    const applyErrorClass=field=>((field in errors && errors[field]==false)? ' invalid-field':'') 



    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
               <div className="card">
                <img src={values.imageSrc} className="card-img-top"/>
                <div className="card-body">
                <div className="form-group">
                        <input type="file" accept="image/*" className={"form-control-file my-2"+applyErrorClass('imageSrc')} onChange={showPreview} id="image-uploader"/>
                    </div>
                    <div className="form-group">
                        <input className={"form-control my-2"+applyErrorClass('p_Name')} placeholder="Package Name" name="p_Name" value={values.p_Name} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className={"form-control my-2" + applyErrorClass('desc')} placeholder="Description" name="desc" value={values.desc} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control my-2" placeholder="pricing" name="pricing" value={values.pricing} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control my-2" placeholder="food_Details" name="food_Details" value={values.food_Details} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control my-2" placeholder="acc_details" name="acc_details" value={values.acc_details} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                    

                </div>



               </div>
            </form>

        </div>
    )
}
export default AddPackage;