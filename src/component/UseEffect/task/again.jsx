import React, { useEffect, useState } from "react";
const initial = [
  {
    id: 1,
    isPresent: true,
    price: 100,
    title: "puma",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/z/r/6-395712-6-puma-iron-gate-black-original-imagp7nnep6d64dh.jpeg?q=70",
  },
  {
    id: 2,
    isPresent: true,
    price: 200,
    title: "adidas",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/l/t/8-grand-8-go-ride-white-original-imagqq4fs4bebaqd.jpeg?q=70",
  },
  {
    id: 3,
    isPresent: false,
    price: 300,
    title: "nike",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/p/q/-original-imagpgpegvbyjg9h.jpeg?q=70",
  },
];

const Again = () => {
  const [item, setItem] = useState(initial);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(
      item
        .filter((data) => data.isPresent)
        .map((data) => data.price * data.count)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }, [item]);
  const HandleIncrement = (id) => {
    setItem(
      item.map((data) =>
        data.id === id ? { ...data, count: data.count + 1 } : data
      )
    );
  };
  const HandleDecrement = (id) => {
    setItem(
      item.map((data) =>
        data.id === id ? { ...data, count: data.count - 1 } : data
      )
    );
  };
  return (
    <div>
      <div>
        <h1>Checkout Goods</h1>
        <ul>
          {item.map(
            (data) =>
              data.isPresent && (
                <li key={data.id}>
                  <input
                    type="checkbox"
                    checked
                    onChange={() =>
                      setItem(
                        item.map((d) =>
                          d.id === data.id ? { ...d, isPresent: false } : d
                        )
                      )
                    }
                  />
                  <img src={data.img} alt="" />
                  {data.title}
                  <button
                    disabled={data.count < 1 ? true : false}
                    onClick={() => {
                      HandleDecrement(data.id);
                    }}
                  >
                    -
                  </button>
                  {data.count}
                  <button
                    onClick={() => {
                      HandleIncrement(data.id);
                    }}
                  >
                    +
                  </button>
                  {data.price * data.count}
                </li>
              )
          )}
        </ul>
        <h1>Grand Total-{total}</h1>
      </div>
    </div>
  );
};

export default Again;
