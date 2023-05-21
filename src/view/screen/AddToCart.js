import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import img1 from '../image/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg'

export default function Cart() {
    const nav = useNavigate()
    const [AllFurnitureData,setallfurnituredata] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {}).catch(e => console.log(e))
            console.log(res?.data);
            setallfurnituredata(res?.data)
        }
        show()
    }, [])

    async function removeitem(index) {
        console.log(index);
        let arr = [];
        AllFurnitureData.map((d, index1) => {
            if (index !== index1) {
                arr.push(d);
            }
            
        })
        console.log(arr);
        let res = await axios.post('removecartitem', arr).catch(e => console.log(e))
        console.log(res?.data);

        setallfurnituredata(arr)
    }

    console.log(Array.isArray(AllFurnitureData));


    return (
        <Container fluid>

            <Row className="justify-content-center">

                <Col className="col-lg-6">
                    {
                        AllFurnitureData.length > 0 && (Array.isArray(AllFurnitureData) && AllFurnitureData !== [] ? AllFurnitureData.map((d, index) => {
                            if (!Array.isArray(d)) {
                                return (

                                    <div className="border">
                                        <div className="addtocartshow d-flex">
                                            <div className="addtocartshow-img">
                                                <img src={d.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                            </div>
                                            <div className="addtocartshow-text ">
                                                <p className="cart">{d.productName}</p>
                                                {/* <p>Price : {d.sellrate}</p> */}
                                                <Form className="cart2">
                                                    <h3>Price:-${d.mrp_rate}</h3>
                                                </Form>
                                                {/* <p>{d.sellrate1}</p> */}
                                                
                                                {/* <p>{d.delivery}</p> */}
                                                <div className="d-flex">
                                                    <Button style={{position:'relative', left:'60px'}} variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                    <Button style={{position:'relative', left:'80px'}}  variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                </div>

                                            </div>

                                            <div className="addtocartshow-text">

                                            </div>
                                        </div>
                                    </div>


                                )
                            } if (Array.isArray(d)) {
                                return (
                                    d.map(dd => (
                                        <div className="border">
                                            <div className="addtocartshow d-flex">
                                                <div className="addtocartshow-img">
                                                    <img src={dd.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                                </div>
                                                <div className="addtocartshow-text ">
                                                    <p className="cart">{dd.text2}</p>
                                                    <p>Price : {dd.mrp_rate}</p>
                                                    <p>Qty : {1}</p>
                                                    {/* <p>{dd.delivery}</p> */}
                                                    <div className="d-flex">
                                                        <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                        <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                    </div>

                                                </div>

                                                <div className="addtocartshow-text">

                                                </div>
                                            </div>
                                        </div>


                                    ))
                                )
                            }
                        }) :

                            AllFurnitureData.map((d, index) => {
                                if (d !== []) {
                                    return (
                                        <div className="border">
                                            <div className="addtocartshow d-flex">
                                                <div className="addtocartshow-img">
                                                    <img src={d.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                                </div>
                                                <div className="addtocartshow-text ">
                                                    <p className="cart">{d.text2}</p>
                                                    <p>Price : {d.Price}</p>
                                                    <p>Qty : {1}</p>
                                                    {/* <p>{d.delivery}</p> */}
                                                    <div className="d-flex">
                                                        <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                        <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                    </div>
                                                </div>

                                                <div className="addtocartshow-text">

                                                </div>
                                            </div>
                                        </div>


                                    )
                                }
                            }

                            )



                        )}
                </Col>
                <Col>
                <center><img src={img1} style={{width:'100%', height:'600px'}}/></center>
                <center className="cartvisit">Buy Now!</center>
                                <center className="cartpay"> “Furniture possesses an extraordinary power to transform our living spaces, transcending mere utility to become a harmonious blend of functionality and aesthetic delight. Each piece tells a unique story, captivating our senses with its graceful lines, exquisite materials, and thoughtful craftsmanship. From the sleek contours of modern designs to the timeless elegance of traditional styles, furniture weaves together the threads of artistry and practicality, creating an enchanting tapestry that enriches our daily lives."</center>
                    <center><Link className="buynow" to="/Payment"> <Button className="cartpaybutton">Proceed to Payment</Button></Link></center>

                </Col>

            </Row>

            <br /> <br />
            <br /> <br />

            <br /> <br />
            <br /> <br />
        </Container>

    )
}