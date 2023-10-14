import React from 'react';
import style from './style.module.css';
import NavbarLogin from '../../Components/NavbarLogin';
import img from '../../Assets/images/product/jeans.jpg';
const Checkout = () => {
  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  return (
    <>
      <NavbarLogin />
      <main id="" className="mt-4">
        <div className="container mb-4">
          <div className="row">
            <h2 className={style.heading}>Checkout</h2>
          </div>
        </div>
        <section className>
          <div className="container">
            <div className="row">
              <h5 className={style.subHeading}>Shipping Address</h5>
            </div>
            <div className="row">
              <div className="col-lg-8 mb-md-4">
                <div className={`${style.cardWrapper} align-content-center mb-3`}>
                  <h5 className={`${style.subHeading} mb-3`}>Dandi Gumelar</h5>
                  <p className={style.subAddress}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                  <a className={`btn ${style.btnAddress}`} data-bs-toggle="modal" href="#chooseAnotherAddress" role="button">
                    Choose another address
                  </a>
                  <div className="modal fade" id="chooseAnotherAddress" aria-hidden="true" aria-labelledby="chooseAnotherAddressLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className={`modal-header ${style.modalHeader}`}>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="container">
                            <div className="row">
                              <div className="col-12 mb-3">
                                <h5 className="text-center">Choose another address</h5>
                              </div>
                              <div className="col-12 p-0 mb-3">
                                <button type="button" className={style.modalNewAddress} data-bs-target="#addNewAddress" data-bs-toggle="modal">
                                  Add new address
                                </button>
                              </div>
                              <div className="col-12 p-0">
                                <div className={`${style.modalChangeAddress} text-start`}>
                                  <h5 className={`${style.subHeading} mb-3`}>Dandi Gumelar</h5>
                                  <p className={style.subAddressModal}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                  <button type="button" className={style.btnChangeAddress}>
                                    Change Address
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal fade" id="addNewAddress" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className={`modal-header ${style.modalHeader}`}>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="container">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h5 className="text-center">Add new address</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <form>
                                  <div className="mb-3">
                                    <label htmlFor="rumah" className="form-label">
                                      Save address as (ex : home address, office address)
                                    </label>
                                    <input type="text" className="form-control" id="rumah" placeholder="Rumah" />
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <form>
                                  <div className="mb-2">
                                    <label htmlFor="recipentsName" className="form-label">
                                      Recipient’s name
                                    </label>
                                    <input type="text" className="form-control" id="recipentsName" />
                                  </div>
                                </form>
                              </div>
                              <div className="col-6">
                                <form>
                                  <div className="mb-2">
                                    <label htmlFor="recipentsNumber" className="form-label">
                                      Recipient's number
                                    </label>
                                    <input type="text" className="form-control" id="recipentsNumber" />
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <form>
                                  <div className="mb-2">
                                    <label htmlFor="address" className="form-label">
                                      Address
                                    </label>
                                    <input type="text" className="form-control" id="address" />
                                  </div>
                                </form>
                              </div>
                              <div className="col-6">
                                <form>
                                  <div className="mb-2">
                                    <label htmlFor="postalCode" className="form-label">
                                      Postal code
                                    </label>
                                    <input type="text" className="form-control" id="postalCode" />
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <form>
                                  <div className="mb-2">
                                    <label htmlFor="city" className="form-label">
                                      City or Subdistrict
                                    </label>
                                    <input type="text" className="form-control" id="city" />
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-12 d-flex align-items-center">
                                <input type="checkbox" className="me-2" />
                                <span className={style.descCheckbox}>Make it the primary address</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`modal-footer ${style.modalFooter}`}>
                          <button className="btn-cancel" data-bs-target="#chooseAnotherAddress" data-bs-toggle="modal">
                            Cancel
                          </button>
                          <button className="btn-save" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className={style.listCheckouts}>
                  <li className={`${style.listCheckout} mb-3`}>
                    <div className="d-flex align-content-center justify-content-between">
                      <div className="d-flex align-content-center">
                        <div className={`${style.wrapperImgCheckbox} me-3`}>
                          <img className={style.imgCart} src={img} alt="" />
                        </div>
                        <div className="pt-3">
                          <h5 className={`${style.titleProduct} mb-2`}>Jeans Pendek Gray</h5>
                          <p className={style.textSeller}>Hosea Leonardo</p>
                        </div>
                      </div>
                      <p className={`${style.price} mb-0 pt-4 fw-bold`}>{currencyFormat(120000)}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <div className={`${style.cardWrapper} p-4`}>
                  <h5 className={`${style.titleHeading} mb-4`}>Shopping summary</h5>
                  <ul className={style.listShoppings}>
                    <li className={`${style.listShopping} mb-1`}>
                      <div className="d-flex justify-content-between">
                        <p className={style.subShopping}>Order</p>
                        <span className={style.price}>{currencyFormat(120000)}</span>
                      </div>
                    </li>
                    <li className={`${style.listShopping} mb-1`}>
                      <div className="d-flex justify-content-between">
                        <p className={style.subShopping}>Delivery</p>
                        <span className={style.price}>{currencyFormat(10000)}</span>
                      </div>
                    </li>
                  </ul>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className={style.subHeading}>Grand Total</h5>
                    <span className={`${style.grandTotal} fw-bold mb-4`}>{currencyFormat(130000)}</span>
                  </div>
                  <button type="submit" className={`btn ${style.btnCheckout}`} data-bs-toggle="modal" data-bs-target="#payment">
                    Select payment
                  </button>
                  <div className="modal fade" id="payment" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="paymentLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header modalHeader ">
                          <h1 className="modal-title fs-5" id="paymentLabel">
                            Payment
                          </h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="container-fluid">
                            <div className="row container-title">
                              <h5 className="fw-bold">Payment method</h5>
                            </div>
                            <div className="row">
                              <div className="col-12 p-0">
                                <ul className="list-payments mb-1">
                                  <li className="list-payment d-flex justify-content-between">
                                    <div className="wrapper-payment d-flex align-items-center">
                                      <img className="icon-payment me-4" src="/assets/images/payment/Logo-GoPay-Vector-CDR-dan-PNG 1.png" alt="gopay" />
                                      <span className="payment-name">Gopay</span>
                                    </div>
                                    <input type="checkbox" name id />
                                  </li>
                                  <li className="list-payment d-flex justify-content-between">
                                    <div className="wrapper-payment d-flex align-items-center">
                                      <img className="icon-payment me-5" src="/assets/images/payment/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png" alt="Pos Indonesia" />
                                      <span className="payment-name">Pos Indonesia</span>
                                    </div>
                                    <input type="checkbox" name id />
                                  </li>
                                  <li className="list-payment d-flex justify-content-between">
                                    <div className="wrapper-payment d-flex align-items-center">
                                      <img className="icon-payment me-5" src="/assets/images/payment/mastercard.png" alt="mastercard" />
                                      <span className="payment-name">Master Card</span>
                                    </div>
                                    <input type="checkbox" name id />
                                  </li>
                                </ul>
                                <div className="list-payments">
                                  <div className="container-fluid">
                                    <div className="row container-title mt-2 mb-2">
                                      <h5 className="mt-4 fw-bold">Shopping summary</h5>
                                    </div>
                                    <div className="list-order d-flex justify-content-between">
                                      <p className={style.subShopping}>Order</p>
                                      <span className={style.price}>$ 60.0</span>
                                    </div>
                                    <div className="list-order d-flex justify-content-between">
                                      <p className={style.subShopping}>Delivery</p>
                                      <span className={style.price}>$ 5.0</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                          <div className="wrapper-total">
                            <h5 className="title-grand fw-bold">Total Payment</h5>
                            <span className="grandTotal-font">$ 65.0</span>
                          </div>
                          <button type="button" className="btn-save">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
