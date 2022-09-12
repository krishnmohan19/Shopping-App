import React,{useState} from 'react'

function ProductItem({updateProduct,Image,Price,Color,Name,Total,Index,Quantity,checkBox,updateCheckBox}) {
  
  function onBuyChange(e){
    updateProduct(e);
  }

  function onCheckBoxChange(e){
    updateCheckBox(e);
  }

  return (
    <div className='d-flex flex-row '>

      <div style={{width:"20%",overflow:"hidden"}} className=" my-4 d-flex justify-content-center">
        <img className='h-30 ' src={Image} />
      </div>

      <div style={{width:"10%"}} className="p-2  my-4 d-flex justify-content-center">{Name}</div>
      <div style={{width:"10%"}} className="p-2  my-4 d-flex justify-content-center">{Color}</div>
      <div style={{width:"10%",color:Total<Quantity?"red":"#339015",fontWeight:'bold'}} className="p-2  my-4 d-flex justify-content-center">{Total<Quantity?"Out of Stock":"Instock"}</div>
      <div style={{width:"10%"}} className="p-2  my-4 d-flex justify-content-center">{Price}</div>

      <div style={{width:"40%"}} className="d-flex justify-content-center my-4">

        <div>
          <input  placeholder='0' className='w-50 p-1 ms-1' type='number' value={Quantity} name={Index} onChange={onBuyChange}></input>
          <span className="material-symbols-outlined  bg-black p-1" style={{ position: "relative", top: "3px", }}>
            shopping_cart_checkout
          </span>

        </div>

        <div>
        <input checked={checkBox} onChange={onCheckBoxChange} name={Index} type={'checkbox'} style={{ position: "relative", top: "7px", }}></input>
        </div>

      </div>

``
    </div>
  )
}

export default ProductItem