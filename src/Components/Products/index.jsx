import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/action/productAction';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(setProducts));
  }, []);

  return (
    <section id="newProduct">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12 p-1 wrapper-title">
            <h3 className="title-categories fw-bold mb-0">{props.titleInformasi}</h3>
            <p className="sub-title mb-0">{props.subInformasi}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row container-row p-1">
          {products.map((item) => {
            return (
              <div className="col-lg-3 col-xl-3 col-xxl-2 col-md-4 col-sm-12 p-0">
                <div className="card">
                  <Link className="btn-card-product" to={`/product/${item.id_product}`}>
                    <img className="card-image" crossOrigin="anonymous" src={item.photo} alt="..." />
                    <div className="card-body">
                      <h5 className="title-product mb-1">{item.name}</h5>
                      <p className="card-text">Rp. {item.price}</p>
                      <p className="text-seller">{item.seller_name}</p>

                      <div className="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(255, 186, 73, 1)" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <span>(10)</span>
                      </div>
                    </div>
                  </Link>
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
