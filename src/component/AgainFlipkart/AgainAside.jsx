import React, { useEffect, useState } from "react";
import AgainMain from "./AgainMain";
import { useCustomFlifkart } from "./AgainContext";
import "./AgainFlip.css";

const AgainAside = () => {
  const { datas, setDatas } = useCustomFlifkart();
  const [product, setProduct] = useState(datas);
  const [multiGender, setMultiGender] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleGender, setSingleGender] = useState("gender");
  const [finalProduct, setFinalProduct] = useState(product);
  useEffect(() => {
    setMultiGender([...new Set(datas.map((data) => data.gender))]);
  }, []);
  useEffect(() => {
    setCategories([...new Set(product.map((d) => d.category))]);
    setFinalProduct(product);
  }, [product]);
  useEffect(() => {
    if (singleGender === "gender") {
      setProduct(datas);
    } else {
      setProduct(datas.filter((data) => data.gender === singleGender));
    }
  }, [singleGender]);

  return (
    <div
      className="main-component"
      style={{ display: "flex", height: "100vh" }}
    >
      <aside
        className="component-one"
        style={{ flexGrow: "1"}}
      >
        <h1>Filter</h1>
        <select
        className="select-btn"
          id="gender"
          defaultValue={"gender"}
          onClick={(e) => setSingleGender(e.target.value)}
        >
          <option value="gender">Gender</option>
          {multiGender.map((gen) => (
            <option key={gen} value={gen}>
              {gen}
            </option>
          ))}
        </select>
        <div>
          {categories.map((d) => (
            <button className="btn"
              style={{ display: "flex" }}
              key={d}
              onClick={() =>
                setFinalProduct(datas.filter((data) => data.category === d))
              }
            >
              {d}
            </button>
          ))}
        </div>
      </aside>
      <div
        className="component-two"
        style={{ flexGrow: "6" }}
      >
        <AgainMain products={finalProduct} />
      </div>
    </div>
  );
};

export default AgainAside;
