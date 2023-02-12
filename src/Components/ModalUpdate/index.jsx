import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/action/productAction';

const ModalUpdate = ({ product }) => {
  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState({
    name: `${product.name}`,
    price: `${product.price}`,
    size: `${product.size}`,
    color: `${product.color}`,
    stock: `${product.stock}`,
    description: `${product.description}`,
    photo: `${product.photo}`,
  });

  const handleUpload = (e) => {
    setDataProduct((prev) => {
      return { ...prev, photo: e.target.files[0] };
    });
  };

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(dataProduct, product))
      .then((res) => {
        console.log(res);
        swal({
          title: `${res.data.message}`,
          text: 'You clicked the button!',
          icon: 'success',
          button: 'OK',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="modal fade" id={`update${product.id_product}`} tabindex="-1" aria-labelledby="updateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateLabel">
                Update Product
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3 w-100">
                  <input className="form-control" type="text" placeholder="name" name="name" value={dataProduct.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="price" name="price" value={dataProduct.price} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="size" name="size" value={dataProduct.size} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="color" name="color" value={dataProduct.color} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="stock" name="stock" value={dataProduct.stock} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="file" placeholder="photo" name="photo" onChange={handleUpload} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="description" name="description" value={dataProduct.description} onChange={handleChange} />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpdate;
