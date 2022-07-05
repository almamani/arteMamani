import React, { useEffect, useState } from "react";
import { getProds } from "../../mocks/fakeApi";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList.jsx";

import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProds
      .then((result) => setProductList(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

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
          <ItemDetailContainer />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
