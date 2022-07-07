import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList.jsx";

import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    getProds(categoryId)
      .then((res) => {
        setProductList(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <h2>{mensaje} </h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <ItemList productList={productList} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
