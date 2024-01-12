import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import NotFound from "./NotFound";
import SushiBlock from "../components/SushiBlock";

export const API = "http://localhost:8000/products";

const Home = () => {
  const [elem, setElem] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((arr) => {
        setElem(arr);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все суши</h2>
      <div className="content__items">
        {elem.map((obj) => (
          <SushiBlock key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
};

export default Home;

// fetch(API)
//   .then((res) => {
//     return res.json();
//   })
//   .then((arr) => {
//     setElem(arr);
//   });

// title={obj.title}
// price={obj.price}
// imageUrl={obj.imageUrl}
// sizes={obj.sizes}
// types={obj.types}
