import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mycart = ({ buyProduct,setBuyProduct}) => {
    
    const navigate=useNavigate();
    
    const mainstyle = {
        color: "black",
        height: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
        marginLeft: "20px",
        marginTop: "20px",
        display: "flex",
    }
    function decrementCount(e){
        console.log(e.target);
        const name=e.target.name-1;
        setBuyProduct(buyProduct.map(
            (e,index)=>{
                if(index===name){
                    e.Quantity--;
                    if(e.Quantity<=0)e.Quantity=0;
                    
                }
                return e;
            }
        ))
    }
    function IncrementCount(e){
        console.log("Incr");
        const name=e.target.name-1;
        setBuyProduct(buyProduct.map(
            (e,index)=>{
                if(index===name){
                    e.Quantity++;
                    if(e.Quantity>=e.Total)e.Quantity=e.Total;
                    
                }
                return e;
            }
        ))
    }
    let total=0
    return (
        <div>
            <main style={mainstyle}>
                <div id="maincart" style={{ width: "70%", minHeight: "100%", backgroundColor: "white", overflow: "auto" }}>
                    <tr style={{ display: "flex", width: "100%", height: "100px", alignItems: "center" }}>
                        <th style={{ width: "40%", textAlign: "center" }}>Products</th>
                        <th style={{ width: "20%", textAlign: "center" }}>Price</th>
                        <th style={{ width: "20%", textAlign: "center" }}>Quantity</th>
                        <th style={{ width: "20%", textAlign: "center" }}>Subtotal</th>
                    </tr>
                    <hr />
                    {
                        buyProduct.map((e) => {
                            total+=e.Price*e.Quantity;
                            return <tr style={{ display: "flex", width: "100%", minHeight: "100px", alignItems: "center", justifyContent: "center" }}>
                                <td style={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }}><img style={{ height: "70px", width: "70px", margin: "0px 10px" }}
                                    src={e.Image} alt=".." /> <span>{e.Name}</span>
                                </td>
                                <td style={{ width: "20%", textAlign: "center" }}>{e.Price}</td>
                                <td style={{ width: "20%", display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "104px", display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "52px", overflow: "hidden", margin: "auto" }}>
                                        <button name={e.Id} onClick={decrementCount} style={{ border: "none" }}>-</button>{e.Quantity}<button name={e.Id} onClick={IncrementCount} style={{ border: "none" }}>+</button>
                                    </div></td>
                                <td style={{ width: "20%", textAlign: "center" }}>{e.Price*e.Quantity}</td>
                            </tr>
                        })

                    }


                </div>
                <div id="preview" style={{ width: "30%", height: "500px" }}>
                    <div id="card" style={{ width: "100%", display: "flex column", padding: "20px", minHeight: "50%", backgroundColor: "whitesmoke", border: "2px solid grey" }}>
                        <h1 style={{ margin: "20px 0px" }}>Card totals</h1>
                        <p style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px" }}><span>subtotal</span> <span>{total}</span></p>
                        <hr />
                        <p style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px" }}><span> <strong>Total</strong></span> <span>{total}</span></p>
                        <button onClick={()=>{navigate('/thanku')}} style={{ color: "white", height: "50px", width: "100%", borderRadius: "50px", border: "none", backgroundColor: "#208fef" }}>Proceed to Buy</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Mycart