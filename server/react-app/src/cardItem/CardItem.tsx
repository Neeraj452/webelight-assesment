import React from 'react';
import { useState } from 'react';
interface Props {
  item: object;
}

const Person: React.FC<Props> = ({ item }) => {
  const [cardItem, setCardItem] = useState<any[]>([])
  const addCard = () => {
    console.log("sdsfdf")
  }

  return (
    <div>
      <h2>{cardItem?.length}</h2>
      {/*cart count*/}
    </div>
  );
};

export default Person;
