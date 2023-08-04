import React, { useEffect, useState } from "react";

const initialvalue = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/128/128/xif0q/electric-bike-scooter/8/n/i/-original-imaggcdwr2fbmxeg.jpeg?q=70",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/image/128/128/xif0q/electric-bike-scooter/t/i/z/-original-imagg9u88gfe3guk.jpeg?q=70",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/image/128/128/xif0q/electric-bike-scooter/e/e/h/-original-imagg9u8p4g8zhbh.jpeg?q=70",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/image/128/128/xif0q/electric-bike-scooter/r/h/l/-original-imagg9u839pkhwhz.jpeg?q=70",
  },
  {
    id: 5,
    img: "https://rukminim2.flixcart.com/image/128/128/xif0q/electric-bike-scooter/l/b/j/-original-imagg9u8arbztbwr.jpeg?q=70",
  },
];
const BikeTask = () => {
  const [bike, setBike] = useState(initialvalue);
  const [img, setImg] = useState(initialvalue[0].img);

  const handleBike = (img) => {
    setImg(img);
  };

  return (
    <div style={{ height: "100vh", display: "flex", gap: "30px" }}>
      <ul>
        {bike.map((data) => (
          <li style={{ display: "flex" }}>
            <img
              onClick={() => handleBike(data.img)}
              src={data.img}
              alt="bike"
            />
          </li>
        ))}
      </ul>
      <div>
        <h1>bike imges</h1>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BikeTask;
