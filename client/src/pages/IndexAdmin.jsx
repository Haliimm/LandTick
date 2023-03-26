import React, { useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import Footer from "../component/Footer";
import ModalDetailTicket from "../component/ModalDetailTicket";
import ModalEdit from "../component/ModalEdit";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

export default function IndexAdmin() {
  const [state] = useContext(UserContext);
  const [showTicket, setShowTicket] = useState(null);
  const [showEdit, setShowEdit] = useState(null);

  const handleShowTicket = () => setShowTicket(true);
  const handleCloseTicket = () => setShowTicket(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  let { data: transactionList } = useQuery("allTansactionCache", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });
  console.log(transactionList);

  return (
    <>
      <div className="container mt-5">
        <h1>List Transaksi</h1>
        <div className="mt-5">
          <Table striped className="m-auto w-100" style={{ border: "none", width: "100%" }}>
            <thead className="">
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Tiket</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactionList?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.user.fullname}</td>
                    <td>
                      {data.ticket.start_station.name} - {data.ticket.destination_station.name}
                    </td>
                    {data.status === "pending" && <td style={{ color: "#FF9900" }}>{data.status}</td>}
                    {data.status === "success" && <td style={{ color: "#78A85A" }}>{data.status}</td>}
                    {data.status === "failed" && <td style={{ color: "#E83939" }}>{data.status}</td>}
                    <td className="">
                      <div className="d-flex">
                        <div>
                          <img onClick={handleShowTicket} src="/images/IconSearch.png" alt="" className="" style={{ cursor: "pointer" }} />
                        </div>
                        <div>
                          <img src="/images/IconTrash.png" alt="" className="ms-5" style={{ cursor: "pointer" }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
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
