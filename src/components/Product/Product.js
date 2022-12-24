import { faClose, faEdit, faPlusSquare, faTrash, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Product = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleCloseAdd = () => setIsShowAdd(false);
  const handleCloseEdit = () => setIsShowEdit(false);

  //TODO: handle Events
  const handleAddProduct = () => {
    console.log("add product");
    // if add product success then call handleCloseAdd()
  };

  const handleUpdateProduct = (id) => {
    console.log("update product");
  };

  const handleDeleteProduct = (id) => {
    console.log("delete product");
  };

  return (
    <>
      <div>
        <h6 className="mb-4" style={{ fontSize: 26 }}>
          <span
            onClick={() => {
              setIsShowAdd(true);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: 20, fontSize: 20, cursor: "pointer" }} />
          </span>
          Sản Phẩm
        </h6>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Kích thước</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thể loại</th>
              <th scope="col">Thương thiệu</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Nike 1</td>
              <td>M</td>
              <td>400000</td>
              <td>20</td>
              <td>Thể thao</td>
              <td>Nike</td>
              <td style={{ cursor: "pointer" }}>
                <FontAwesomeIcon
                  onClick={() => {
                    setIsShowEdit(true);
                  }}
                  icon={faEdit}
                  style={{ marginRight: 10 }}
                />
                <FontAwesomeIcon onClick={(id) => handleDeleteProduct(id)} icon={faTrash} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal style={{ marginTop: 100 }} size="lg" show={isShowAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div className="row">
                <div className="form-group col col-lg-6">
                  <label>Tên sản phẩm</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group col col-lg-6">
                  <label>Kích thước</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group col col-lg-6 mt-4">
                  <label>Đơn giá</label>
                  <input type="text" name="price" className="form-control" id="price" placeholder="Nhập đơn giá" />
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Số lượng</label>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    id="quantity"
                    placeholder="Nhập số lượng"
                  />
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Loại sản phẩm</label>
                  <select id="type" name="type" className="form-control">
                    <option>Thể thao</option>
                    <option>Lười</option>
                  </select>
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Thương hiệu</label>
                  <select id="brand" name="brand" className="form-control">
                    <option>Nike</option>
                    <option>Adidas</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: 120 }} className="btn btn-success" variant="primary" onClick={handleAddProduct}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal style={{ marginTop: 100 }} size="lg" show={isShowEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div className="row">
                <div className="form-group col col-lg-6">
                  <label>Tên sản phẩm</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group col col-lg-6">
                  <label>Kích thước</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group col col-lg-6 mt-4">
                  <label>Đơn giá</label>
                  <input type="text" name="price" className="form-control" id="price" placeholder="Nhập đơn giá" />
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Số lượng</label>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    id="quantity"
                    placeholder="Nhập số lượng"
                  />
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Loại sản phẩm</label>
                  <select id="type" name="type" className="form-control">
                    <option>Thể thao</option>
                    <option>Lười</option>
                  </select>
                </div>
                <div className="form-group col col-lg-6  mt-4">
                  <label>Thương hiệu</label>
                  <select id="brand" name="brand" className="form-control">
                    <option>Nike</option>
                    <option>Adidas</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ width: 120 }}
            className="btn btn-success"
            variant="primary"
            onClick={(id) => handleUpdateProduct(id)}
          >
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
