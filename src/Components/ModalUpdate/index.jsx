import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModalUpdate = ({ product }) => {
  const token = localStorage.getItem('token');

  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
    size: '',
    color: '',
    stock: '',
    description: '',
    photo: '',
  });

  console.log(dataProduct);

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
    console.log(dataProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let attr in dataProduct) {
      formData.append(attr, dataProduct[attr]);
    }

    formData.append('id_categories', 'c123b284-4429-4d3c-895e-8829f26804d8');

    axios
      .put(`${process.env.REACT_APP_BACKEND}/product/${product.id_product}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert('product created');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
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
                  <input className="form-control" type="text" placeholder="name" name="name" value={product.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="price" name="price" value={product.price} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="size" name="size" value={product.size} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="color" name="color" value={product.color} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="stock" name="stock" value={product.stock} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="file" placeholder="photo" name="photo" onChange={handleUpload} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="description" name="description" value={product.description} onChange={handleChange} />
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
