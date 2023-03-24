import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Footer from "../component/Footer";
import ModalDetailTicket from "../component/ModalDetailTicket";
import ModalEdit from "../component/ModalEdit";

export default function IndexAdmin() {
  const [showTicket, setShowTicket] = useState(null);
  const [showEdit, setShowEdit] = useState(null);

  const handleShowTicket = () => setShowTicket(true);
  const handleCloseTicket = () => setShowTicket(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  return (
    <>
      <div className="container mt-5">
        <h1>List Transaksi</h1>
        <div className="mt-5">
          <Table striped className="m-auto w-100" style={{ border: "none", width: "100%" }}>
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Tiket</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Halim Awaludein</td>
                <td>Surabaya - Jakarta</td>
                <td>bca.png</td>
                <td>Pending</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <div>
                      <img onClick={handleShowTicket} src="/images/IconSearch.png" alt="" className="" style={{ cursor: "pointer" }} />
                    </div>
                    <div>
                      <img onClick={handleShowEdit} src="/images/IconEdit.png" alt="" className="ms-5" style={{ cursor: "pointer" }} />
                    </div>
                    <div>
                      <img src="/images/IconTrash.png" alt="" className="ms-5" style={{ cursor: "pointer" }} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
      <ModalDetailTicket show={showTicket} onHide={handleCloseTicket} />
      <ModalEdit show={showEdit} onHide={handleCloseEdit} />
    </>
  );
}
