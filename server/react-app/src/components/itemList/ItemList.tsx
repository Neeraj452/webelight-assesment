import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { getItemList, getCategoryItem } from "../../api/api";
import './itemlist.css'

interface MyComponentProps {
    setCardItemFn: React.Dispatch<React.SetStateAction<object[]>>; // Update the prop type
    cardItem: object[];
}
const ItemList: React.FC<MyComponentProps> = ({ setCardItemFn, cardItem }) => {

    const [category, setCategory] = useState<any[]>([])
    const [price, setPrice] = useState<number | null | "">(null);
    const { data: categoryItem, } = useQuery(["getCategoryItem"], () => getCategoryItem())

    const { data: itemList, isLoading, isError } = useQuery(["getItemList", price, category],
        () => getItemList({ price: price, category: category })
    )
    useEffect(() => {

    }, [price, category])

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        let data = category
        if (data.includes(e.target.value)) {
            let index = data.indexOf(e.target.value);
            data.splice(index, 1);
            setCategory([...data]);
        } else {
            data.push(e.target.value);
            setCategory([...data]);
        }

    };
    const firstLater = (inputString: string): string => {
        const words = inputString.split(" ");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(" ");

    }
    const handlePriceChange = (e: any) => {
        const newPrice = parseFloat(e.target.value);
        setPrice(isNaN(newPrice) ? null : newPrice);
    };
    const addToCard = (item: object) => {
        let data = [...cardItem]
        data?.push(item)
        setCardItemFn([...data])
        localStorage.setItem("CartItem", JSON.stringify(data));


    }
    return <> <Container fluid className='container-fluid'>
        <Row>
            <Col xs={2}>
                <div className="filter">
                    <div className="filter-checkbox">
                        <p>Category</p>
                        {categoryItem?.map((item: any, key: number) => {
                            return (
                                <div className="list" key={key}>
                                    <input
                                        type="checkbox"
                                        className="vh"
                                        id={item.name}
                                        value={item.name}
                                        checked={category.includes(item.name)}
                                        onChange={(e) => handleCheckBox(e)}
                                    />
                                    <label
                                        htmlFor={item.name}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        className="label"
                                    >
                                        {firstLater(item.name)}
                                    </label>
                                </div>
                            );
                        })}

                    </div>
                    <div>
                        <p style={{ margin: "0px" }}>Price</p>
                        <input
                            type="number"
                            value={price === null ? '' : price}
                            onChange={handlePriceChange}
                            className="price"
                        />
                    </div>
                </div></Col>
            <Col xs={10}>
                <div>
                    {isLoading && <div style={{ textAlign: "center" }}>Loading...</div>}
                    {isError && <div style={{ textAlign: "center" }}>Something Went Wrong</div>}
                    {!isLoading && !isError ? itemList?.length > 0 ? itemList?.map((item: any) => {
                        return <>
                            <p className="text-size">{firstLater(item?.category)}</p>
                            <div className="card-Cantainers">
                                {item?.categoryItem?.map((e: any, index: number) => {
                                    return (
                                        <Card style={{ width: '22rem' }} key={index}>
                                            <div style={{ height: "17rem", overflow: "hidden" }}>
                                                <Card.Img variant="top" src={e?.image} style={{
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center"
                                                }} />
                                            </div>
                                            <Card.Body>
                                                <div className="title">{e?.title}</div>
                                                <Card.Text className="title">
                                                    ${e?.price}
                                                </Card.Text>
                                                <div style={{ textAlign: "center" }}>
                                                    <Button variant="primary" onClick={() => addToCard(e)}>Add To Card</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    )
                                }


                                )}

                            </div>
                        </>
                    }) : <div style={{ textAlign: "center" }}>No Item</div> : null}
                </div>
            </Col>
        </Row></Container>
    </>
}
export default ItemList