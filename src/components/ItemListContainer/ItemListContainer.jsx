import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  let productsConsult;

  useEffect(() => {
    const productsCollection = collection(db, "productos");
    if (categoryId) {
      const productsQuery = query(
        productsCollection,
        where("categoria", "==", categoryId)
      );
      productsConsult = productsQuery;
    } else {
      productsConsult = productsCollection;
    }

    getDocs(productsConsult)
      .then((result) => {
        const listProducts = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductList(listProducts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="categoria">
      {categoryId ? <h2>{categoryId}</h2> : <h2>{mensaje}</h2>}
      {loading ? (
        <div className="spinner">
          <FadeLoader color="#756d6d" size={150} />
          <span>Cargando...</span>
        </div>
      ) : (
        <>
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
