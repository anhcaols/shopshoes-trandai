import { faClose, faEdit, faPlusSquare, faTrash, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Order = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);

  const handleCloseAdd = () => setIsShowAdd(false);

  //TODO: handle Events
  const handleAddOrderDetail = () => {
    console.log("add order detail");
  };

  const handleAddOrder = () => {
    console.log("add order");
    // if add order success then call handleCloseAdd()
  };

  const handleDeleteOrder = (id) => {
    console.log("delete order");
  };

  const handleDeleteOrderDetail = (id) => {
    console.log("delete order detail");
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
          Hóa đơn bán
        </h6>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Ngày bán</th>
              <th scope="col">Giá trị</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Đại</td>
              <td>24/12/2022</td>
              <td>400000</td>
              <td style={{ cursor: "pointer" }}>
                <FontAwesomeIcon style={{ marginLeft: 20 }} onClick={(id) => handleDeleteOrder(id)} icon={faTrash} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal size="xl" show={isShowAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="form-group col col-lg-6" style={{ marginRight: "100%" }}>
                <label>Ngày hóa đơn</label>
                <input type="date" name="name" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
              </div>
              <h5 className="mt-4">Thông tin khách hàng</h5>
              <div className="form-group col col-lg-6 ">
                <label>Khách hàng</label>
                <select id="type" name="type" className="form-control">
                  <option>Cao Anh 1</option>
                  <option>Cao Anh 2</option>
                </select>
              </div>
              <div className="form-group col col-lg-6">
                <label>Địa chỉ</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Nhập địa chỉ" />
              </div>
              <div className="form-group col col-lg-6 mt-4">
                <label>Số điện thoại</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Nhập số điện thoại" />
              </div>
              <div className="form-group col col-lg-6  mt-4">
                <label>Nhân viên</label>
                <select id="type" name="type" className="form-control">
                  <option>Trần Đại 1</option>
                  <option>Trần Đại 2</option>
                </select>
              </div>
              <h5 className="mt-4">Chi tiết đơn đặt</h5>
              <div className="form-group col col-lg-6">
                <label>Tên sản phẩm</label>
                <select id="type" name="type" className="form-control">
                  <option>Nike 1</option>
                  <option>Nike 2</option>
                </select>
              </div>
              <div className="form-group col col-lg-6 ">
                <label>Số lượng</label>
                <input type="text" name="quantity" className="form-control" id="quantity" placeholder="Nhập số lượng" />
              </div>
              <div className="form-group col col-lg-6 mt-4">
                <label>Đơn giá</label>
                <input type="text" name="price" className="form-control" id="price" placeholder="Nhập đơn giá" />
              </div>
            </div>
          </form>
          <Button
            style={{ width: 100 }}
            className="btn btn-success mt-4"
            variant="primary"
            onClick={handleAddOrderDetail}
          >
            Thêm
          </Button>
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Thành tiền</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Đại</td>
                <td>2</td>
                <td>200000</td>
                <td>400000</td>
                <td style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon
                    style={{ marginLeft: 20 }}
                    onClick={(id) => handleDeleteOrderDetail(id)}
                    icon={faTrash}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: 100 }} className="btn btn-success" variant="primary" onClick={handleAddOrder}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
