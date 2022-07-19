import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  let productsConsult;

  useEffect(() => {

    const productsCollection = collection(db, "productos");
      const productsQuery = query(
      productsCollection,
      where("categoria", "==", categoryId)
    
    
    );
  
    
if (categoryId) {
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
    <>
      <h2>{mensaje} </h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
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
