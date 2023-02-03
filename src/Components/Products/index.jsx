import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/product`)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section id="newProduct">
      <div class="container">
        <div class="row mt-3">
          <div class="col-lg-12 p-1 wrapper-title">
            <h3 class="title-categories fw-bold mb-0">New</h3>
            <p class="sub-title mb-0">You've never seen it before</p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row container-row p-1">
          {products.map((item) => {
            return (
              <div class="col-lg-3 col-xl-3 col-xxl-2 col-md-4 col-sm-12 p-0">
                <div class="card">
                  <a class="btn-card-product" href="/pages/detailProduct.html">
                    <img class="card-image" crossOrigin="anonymous" src={item.photo} alt="..." />
                    <div class="card-body">
                      <h5 class="title-product mb-1">{item.name}</h5>
                      <p class="card-text">Rp. {item.price}</p>
                      <p class="text-seller">{item.seller_name}</p>

                      <div class="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <span>(10)</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
