import axios from 'axios';
import swal from 'sweetalert2';
import swal1 from 'sweetalert';
// Read ( GET )
export const getProduct = (setProducts) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/product`).then(function (response) {
      console.log(response.data);
      setProducts(response.data.data);
    });
    dispatch({ type: 'GET_ALL_PRODUCT', payload: 'success' });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Create
export const createProduct = (dataProduct) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();

    for (let attr in dataProduct) {
      formData.append(attr, dataProduct[attr]);
    }

    formData.append('id_categories', 'c123b284-4429-4d3c-895e-8829f26804d8');

    axios
      .post(`${process.env.REACT_APP_BACKEND}/product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        swal.fire({
          title: 'Product Added',
          text: `New product have been added`,
          icon: 'success',
        });
      });

    dispatch({ type: 'CREATE_PRODUCT', payload: 'success' });

    window.location.reload();
  } catch (err) {
    swal.fire({
      text: err.response.data.message,
      icon: 'warning',
    });
  }
};

// Update
export const updateProduct = (dataProduct, product) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
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
        swal.fire({
          title: 'Product Update',
          text: `Update Product Success`,
          icon: 'success',
        });
      });

    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: 'Update Success',
    });

    window.location.reload();
  } catch (error) {
    swal.fire({
      text: 'error',
      icon: 'error',
    });
  }
};

// Delete
export const deleteProducts = (id) => async (dispatch) => {
  try {
    axios.delete(`${process.env.REACT_APP_BACKEND}/product/${id}`).then((res) => {
      console.log(res);
      swal1({
        title: `${res.data.message}`,
        text: 'Once deleted, you will not be able to recover this Product!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal1('Success! Your Product has been deleted!', {
            icon: 'success',
          });
        } else {
          swal1('Your Product is safe!');
        }
      });
    });
    window.location.reload();
    dispatch({ type: 'DELETE_PRODUCT', payload: 'success' });
  } catch (error) {
    swal.fire({
      text: 'success delete product',
      icon: 'warning',
    });
  }
};
