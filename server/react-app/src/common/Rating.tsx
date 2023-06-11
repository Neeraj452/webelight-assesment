import React from 'react'
import fill from "../asserts/star_fill.png"
import star_ep from "../asserts/star_em.png"
interface props {
    rating: number
}
const Rating: React.FC<props> = ({ rating }) => {
    let stars: Array<number> = [1, 2, 3, 4, 5]
    return <div >
        <div style={{ display: 'flex' }}>
            {stars?.map((e) => {
                if (e <= rating) {
                    return <div><img src={fill} alt="fill" /></div>
                } else {
                    return <div><img src={star_ep} alt="star_ep" /></div>
                }
            })}
        </div>
    </div>
}
export default Rating