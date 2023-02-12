import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/action/productAction';

const ModalProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
    size: '',
    color: '',
    stock: '',
    description: '',
    photo: '',
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
    console.log(dataProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(dataProduct));
  };

  return (
    <>
      <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#Create">
        Create Product
      </button>

      <div className="modal fade" id="Create" tabindex="-1" aria-labelledby="CreateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="CreateLabel">
                Create Product
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
                <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
