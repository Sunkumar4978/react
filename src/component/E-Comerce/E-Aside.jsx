import React, { useEffect, useState } from "react";
import Layout from "./E-Layout";
import { useCustom } from "./E-Context";

const Aside = () => {
  const { datas, setDatas } = useCustom();
  const [products, setProducts] = useState(datas);
  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState("gender");
  const [fProduct, setFProduct] = useState(products);

  useEffect(() => {
    setGenders([...new Set(products.map((g) => g.gender))]);
  }, []);
  useEffect(() => {
    setCategories([...new Set(products.map((c) => c.category))]);
    setFProduct(products);
  }, [products]);
  useEffect(() => {
    if (gender === "gender") setProducts(datas);
    else setProducts(datas.filter((d) => d.gender === gender));
  }, [gender]);
  return (
    <aside style={{ display: "flex", height: "100vh" }}>
      <div style={{ flexGrow: "1", border: "1px solid red" }}>
        <h1>Filter</h1>
        <select
          name="gender"
          id="gender"
          defaultValue={"gender"}
          onClick={(e) => setGender(e.target.value)}
        >
          <option value="gender">gender</option>
          {genders.map((gen) => (
            <option key={gen} value={gen}>
              {gen}
            </option>
          ))}
        </select>
        <div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setFProduct(datas.filter((img) => img.category === category))
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flexGrow: "6", border: "1px solid red" }}>
        <Layout product={fProduct} />
      </div>
    </aside>
  );
};

export default Aside;
