import React from "react";
import Table from "react-bootstrap/Table";
import Footer from "../component/Footer";

export default function IndexAdmin() {
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
                  <img src="/images/IconSearch.png" alt="" className="" />
                  <img src="/images/IconEdit.png" alt="" className="ms-5" />
                  <img src="/images/IconTrash.png" alt="" className="ms-5" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Surya Bagus</td>
                <td>Surabaya - Jakarta</td>
                <td>bca.png</td>
                <td>Pending</td>
                <td className="text-center">
                  <img src="/images/IconSearch.png" alt="" className="" />
                  <img src="/images/IconEdit.png" alt="" className="ms-5" />
                  <img src="/images/IconTrash.png" alt="" className="ms-5" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}
