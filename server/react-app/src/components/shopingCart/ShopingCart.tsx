import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { purchaseItem } from "../../api/api";
import Rating from "../../common/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyComponentProps {
    setCardItemFn: React.Dispatch<React.SetStateAction<object[]>>; // Update the prop type
    cardItem: object[];
}
const ShopingCart: React.FC<MyComponentProps> = ({
    cardItem,
    setCardItemFn
}) => {

    const [total, setTotal] = useState<number>(0)
    const totalPrice = (item: object[]) => {
        let total = 0;
        item?.forEach((e: any) => {
            total = total + e?.price;
        });

        setTotal(total)
    };
    useEffect(() => {
        totalPrice(cardItem);
    }, [cardItem]);
    const mutation = useMutation(purchaseItem, {
        onSuccess: (res) => {
            localStorage.removeItem('CartItem')
            setCardItemFn([])
            Toastify("Request Received Successfully")

        }
    })
    const Toastify = (res: string) => {
        toast.success(res, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            closeButton: false,
        });

    };
    return (
        <Container fluid className="container-fluid" style={{ width: "80%" }}>
            <ToastContainer />
            <div style={{ background: "#fff", margin: "3rem 0 4rem 0" }}>

                <Row className="border-bottom">
                    <Col className="col-sm-3 col-md-4">
                        <div className="ps-2" style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                        }}>Shoping Cart</div>
                    </Col>
                    <Col className="col-sm-5 col-md-6">
                        <div></div>
                    </Col>
                    <Col className="col-sm-1 col-md-2">
                        <p
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                textAlign: "center",
                            }}
                        >
                            price
                        </p>
                    </Col>
                </Row>
                {cardItem?.length > 0 ? (
                    <>
                        {cardItem?.map((e: any) => {
                            return (
                                <Row className="border-bottom pt-2">
                                    <Col className="col-sm-3 col-md-4">
                                        <div>
                                            <img
                                                src={e?.image}
                                                alt={e?.image}
                                                // className="img-thumbnail"
                                                style={{ width: "15rem", height: "15rem" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col className="col-sm-5 col-md-6">
                                        <div>
                                            <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                                                {e?.title}
                                            </p>
                                            <p>{e?.description}</p>
                                            <Rating rating={e?.rating} />
                                        </div>
                                    </Col>
                                    <Col className="col-sm-1 col-md-2">
                                        <p
                                            style={{
                                                fontSize: "1.5rem",
                                                fontWeight: "600",
                                                textAlign: "center",
                                            }}
                                        >
                                            ${e?.price}
                                        </p>
                                    </Col>
                                </Row>
                            );
                        })}
                    </>
                ) : (
                    <div style={{ textAlign: "center" }}>No Item</div>
                )}
                {cardItem?.length > 0 && <><Row>
                    <Col className="col-sm-3 col-md-4">
                        <div></div>
                    </Col>
                    <Col className="col-sm-5 col-md-5">
                        <div></div>
                    </Col>
                    <Col className="col-sm-1 col-md-3">
                        <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>{`Total Price: $${total.toFixed(2)}`}</p>
                    </Col>
                </Row>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 3rem 3rem 0px" }}>
                        <Button variant="primary" onClick={() => mutation.mutate({ purchaseItems: cardItem })}>Buy Out</Button>
                    </div></>}
            </div>
        </Container>
    );
};
export default ShopingCart;
