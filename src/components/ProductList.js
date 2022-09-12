import React, { useEffect, useState } from 'react'
import Header from './Header';
import ProductItem from './ProductItem';
function ProductList({buyProduct,setBuyProduct}) {

  const [product, setProduct] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchTerm, setSearchTearm] = useState("");

  const [clothType, setClothType] = useState("All");
  const [clothSize, setClothSize] = useState("Size");

 

  // for useEffect and initializing originaldata+filtering product.
  async function fun() {
    if (originalData.length === 0) {
      const response = await fetch('dummy.json');
      const data = await response.json();
      setOriginalData(data);
    }

    if (clothSize === 'Size' && clothType === 'All') {
      setProduct(originalData.filter((e) => {
        return valid(e);
      }))
    }
    else if (clothSize === 'Size') {
      setProduct(originalData.filter((e, index) => {

        if (e.Name === clothType && valid(e)) {
          return true;
        }
        else return false;

      }))
    }
    else if (clothType === 'All') {
      setProduct(originalData.filter((e, index) => {
        if (e.Size === clothSize && valid(e)) {
          return true;
        }
        else return false;

      }))
    }
    else {
      setProduct(originalData.filter((e, index) => {

        if (e.Name === clothType && e.Size === clothSize && valid(e)) {
          return true;
        }
        else return false;

      }))
    }
  }
  function valid(e) {
    if (searchTerm == "") return true;
    else if (e.Name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return true;
    }
    else return false;
  }
  useEffect(() => { fun() });


  // for clothType
  function onNameChange(e) {
    const val = e.target.value;
    setClothType(val);
  }
  //for clothsize
  function onSizeChange(e) {
    const val = e.target.value;
    setClothSize(val);
  }

  //for originaldata state updating Quantity
  function updateProduct(e) {
    const ind = e.target.name - 1
    const val = e.target.value;
    console.log(ind);
    setOriginalData(originalData.map((e, index) => {
      if (index == ind) {
        e.Quantity = val;
      }
      return e;
    }))
    console.table(originalData);
  }
  //updating value of checkBox
  function updateCheckBox(e){
    const ind=e.target.name-1;
    const val=e.target.checked;
    console.log(val)
    setOriginalData(originalData.map((e, index) => {
      if (index == ind) {
        e.checkBox = val;
      }
      return e;
    }))
    console.table(originalData);
  }
  // for reseting everything
  function resetProduct() {
    console.log("reset");
    setClothSize("Size");
    setClothType("All");
    setOriginalData([]);
  }

  // for search term
  function updateSearchTerm(e) {
    const val = e.target.value;
    console.log(val);
    setSearchTearm(val);
  }

  //filter buy product
   function filterBuyProduct(){
      setBuyProduct(originalData.filter((e) => {
         if(e.checkBox && e.Quantity>0 && e.Quantity<e.Total)return true;
         return false;
      }))
   }
  return (
    <div>
      <Header
        resetProduct={resetProduct}
        clothType={clothType}
        clothSize={clothSize}
        onNameChange={onNameChange}
        onSizeChange={onSizeChange}
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        buyProduct={buyProduct}
        filterBuyProduct={filterBuyProduct}
      />
      <div className='d-flex flex-row justify-content-between'>

        <div style={{ width: "20%" }} className="p-2  my-4">Image</div>
        <div style={{ width: "10%" }} className="p-2  my-4">Name</div>
        <div style={{ width: "10%" }} className="p-2  my-4">Color</div>
        <div style={{ width: "10%" }} className="p-2  my-4">Stock</div>
        <div style={{ width: "10%" }} className="p-2  my-4">Price</div>
        <div style={{ width: "40%" }} className="p-2  my-4">Buy</div>
      </div>
      <hr />
      {
        product.map((e, index) => {

                return <ProductItem
                  updateProduct={updateProduct}
                  key={index}
                  Image={e.Image}
                  Price={e.Price}
                  Color={e.Color}
                  Name={e.Name}
                  Total={e.Total}
                  Index={e.Id}
                  Quantity={e.Quantity}
                  checkBox={e.checkBox}
                  updateCheckBox={updateCheckBox}
                />
          })
        }
          

    </div>
  )
}

export default ProductList