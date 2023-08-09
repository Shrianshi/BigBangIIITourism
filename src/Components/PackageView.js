import React from "react";
import AddPackage from "./AddPackage";
import axios from "axios";
import { useState,useEffect } from "react";
import './PackageView.css';
import NavbarAgent from "./NavbarAgent";
import Footer from "./Footer";

const PackageView=()=>{

    const [employeeList, setEmployeeList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshEmployeeList();
    }, [])

    const packageAPI=(url='https://localhost:7187/api/Package')=>{
        return{
            fetchAll:()=>axios.get(url),
            create:newRecord=>axios.post(url,newRecord),
            update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
            delete:id=>axios.delete(url+id)
        }
    }
    function refreshEmployeeList() {
        packageAPI().fetchAll()
            .then(res => {
                setEmployeeList(res.data)
            })
            .catch(err => console.log(err))
    }


    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('p_id') == "0")
            packageAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshEmployeeList();
                    alert("The Package has been added successfully!")
                })
                .catch(err => console.log(err))
        else
        packageAPI().update(formData.get('p_id'), formData)
                .then(res => {
                    onSuccess();
                    refreshEmployeeList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
        packageAPI().delete(id)
                .then(res => refreshEmployeeList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top" width={40} height={150}/>
            <div className="card-body">
                <h5>{data.p_Name}</h5>
                <span>{data.desc}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.p_id))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
   return(
    <div>
        <NavbarAgent/>
    <div className="row back-package" style={{marginTop:"7%"}}>
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">
                        Add Package
                    </h1>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-5">
            < AddPackage
            addOrEdit={addOrEdit}
            recordForEdit={recordForEdit}
            />

        </div>
        <div className="col-md-8">
                <table>
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(employeeList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(employeeList[3 * i])}</td>
                                    <td>{employeeList[3 * i + 1] ? imageCard(employeeList[3 * i + 1]) : null}</td>
                                    <td>{employeeList[3 * i + 2] ? imageCard(employeeList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </table>
            </div>

    </div>
    <Footer/>
    </div>
   )
}
export default PackageView