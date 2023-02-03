import React, { useEffect, useState } from 'react';
import '../../Assets/css/style.css';
import axios from 'axios';

import ModalProduct from '../ModalProduct';
import ModalUpdate from '../ModalUpdate';

const MainSidebar = () => {
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

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/product/${id}`)
      .then((res) => {
        console.log(res);
        alert('delete success');
      })
      .catch((err) => {
        alert('delete failed');
      });
  };

  return (
    <>
      <div class="main-content vh-100">
        <div class="container">
          <div class="wrapper-card">
            <h3 class="title mb-0">My Product</h3>
            <span class="sub-title">Manage your Product</span>
            <hr class="mb-4" />

            <div class="row">
              <div class="col-lg-12">
                <ModalProduct />
                <table class="table ">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Id Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Images</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (
                        <>
                          <ModalUpdate product={item} />
                          <tr>
                            <td>{item.id_product}</td>
                            <td>{item.name}</td>
                            <td>{item.size}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>
                              <img crossOrigin="anonymous" src={item.photo} className="photo-table" alt="" />
                            </td>

                            <td>
                              <button type="button" className="btn btn-success me-1" data-bs-toggle="modal" data-bs-target={`#update${item.id_product}`}>
                                <i className="bi bi-pencil-square"></i>
                              </button>

                              <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id_product)}>
                                <i className="bi bi-trash3-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal Create*/}
    </>
  );
};

export default MainSidebar;
