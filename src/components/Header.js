import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header({resetProduct,clothType,clothSize,onNameChange,onSizeChange,searchTerm,updateSearchTerm,buyProduct,filterBuyProduct}) {

    const navigate=useNavigate();
    return (
        <div className='d-flex justify-content-between  border-bottom border-dark'>

            <div className='d-flex'>

                <select className="mx-4 px-4 my-4 border border-dark rounded" value={clothType} onChange={onNameChange}>
                    <option value="All" >All</option>
                    <option value="Hoodies" >Hoodies</option>
                    <option value="Tshirt">Tshirt</option>
                    <option value="Pents">Pents</option>
                    <option value="Shorts">Shorts</option>
                </select>
                <select className="mx-2 px-4 my-4 border border-dark rounded" value={clothSize} onChange={onSizeChange}>
                    <option value="Size" >Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                {/* reset */}
                <button  onClick={()=>{resetProduct()}} className="btn text-primary mx-4 my-4 d-flex " type="button">
                <span style={{color:"blue"}}  className=" material-symbols-outlined">
                 restart_alt
                </span>
                    Reset
                </button>
            </div>

            <div className='d-flex mx-4 my-4'>
                <div>
                    <span>Search : </span>
                    {/* search */}
                    <input placeholder='Search...' type='text' value={searchTerm} onChange={updateSearchTerm} className="py-2 px-2"></input>

                    {/* cart button */}
                    <button className='btn btn-primary mx-2 py-2' onClick={()=>{
                        filterBuyProduct();
                        navigate('/cart')
                        
                        }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header