import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getPurchaseItemList } from "../../api/api";
import Rating from "../../common/Rating";
const History: React.FC = () => {
    const { data, isLoading, isError } = useQuery([
        "getPurchaseItemList"],
        () => getPurchaseItemList(),
    );
    console.log({ data })
    return (
        <Container fluid className="container-fluid" style={{ width: "80%" }}>
            <div style={{ background: "#fff", margin: "3rem 0 4rem 0" }}>
                <Row>
                    <div
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            textAlign: "center",
                        }}
                    >

                        History
                    </div>
                </Row>
                {isLoading && <div style={{ textAlign: "center" }}>Loading...</div>}
                {isError && <div style={{ textAlign: "center" }}>Something Went Wrong</div>}
                {!isLoading && !isError ? data?.length > 0 ? data?.map((e: any) => {
                    return (
                        <Row className="border-top pt-2">
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
                                    <p>${e?.price}</p>
                                    <Rating rating={e?.rating} />
                                </div>
                            </Col>

                        </Row>
                    );
                }) : <div style={{ textAlign: "center" }}>No Item</div> : null}
            </div>
        </Container>
    );
};
export default History;
