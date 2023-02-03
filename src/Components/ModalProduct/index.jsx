import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const ModalProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [saveImage, setSaveImage] = useState(null);

  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    nama: '',
    price: '',
    size: '',
    color: '',
    stock: '',
    description: '',
    rating: '',
  });

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
    formData.append('photo', photo);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createData = async (data) => {
    try {
      const response = axios.post(`${process.env.REACT_APP_BACKEND}/product`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // alert('product created');
    } catch (error) {
      console.log(error);
      alert(error);
      setShow(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', data.name);
  //   formData.append('price', data.price);
  //   formData.append('size', data.size);
  //   formData.append('color', data.color);
  //   formData.append('stock', data.stock);
  //   formData.append('photo', saveImage);
  //   formData.append('description', data.description);

  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND}/product`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       alert('product created');
  //       setShow(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err);
  //       setShow(false);
  //     });
  // };

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
            <form>
              <div className="modal-body">
                <div className="mb-3 w-100">
                  <input className="form-control" type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="price" name="price" value={formData.price} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="size" name="size" value={formData.size} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="color" name="color" value={formData.color} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="stock" name="stock" value={formData.stock} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="file" placeholder="photo" name="photo" onChange={handleUpload} />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="description" name="description" value={formData.description} onChange={handleChange} />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" onClick={() => createData(formData)} className="btn btn-primary">
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
