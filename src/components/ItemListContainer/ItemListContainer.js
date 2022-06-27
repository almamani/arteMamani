import React, { useEffect, useState } from "react";
import { getData } from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
      .then((result) => setProductList(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>{mensaje} </h2>
      {loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemList productList={productList} />
      )}
    </>
  );
};

export default ItemListContainer;
