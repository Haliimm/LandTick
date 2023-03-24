import React from "react";
import { Card } from "react-bootstrap";

export default function Ticket() {
  return (
    <>
      {/* <Table className="position-absolute" striped bordered hover style={{ marginTop: "250px", width: "1220px", height: "236px", marginLeft: "60px" }}>
        <thead>
          <tr className="text-center">
            <th className="text-center">Kereta</th>
            <th className="text-center">Berangkat</th>
            <th className="text-center">Tiba</th>
            <th className="text-center">Durasi</th>
            <th className="text-center">Harga Per Orang</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="text-center">Argo Wilis</td>
            <td className="text-center">05.00</td>
            <td className="text-center">10.00</td>
            <td className="text-center">5j05m</td>
            <td className="text-center">Rp. 250.000</td>
          </tr>
          <tr className="text-center">
            <td className="text-center">Argo Wilis</td>
            <td className="text-center">05.00</td>
            <td className="text-center">10.00</td>
            <td className="text-center">5j05m</td>
            <td className="text-center">Rp. 250.000</td>
          </tr>
        </tbody>
      </Table> */}

      <div style={{ marginTop: "250px", width: "1000px", marginLeft: "180px" }}>
        <div className="d-flex justify-content-between">
          <h5 className="">Nama Kereta</h5>
          <h5 className="">Berangkat</h5>
          <h5 className="text-white">Jeda</h5>
          <h5 className="">Tiba</h5>
          <h5 className="">Durasi</h5>
          <h5 className="">Harga Per Orang</h5>
        </div>
      </div>
      <Card
        // key={item.id}
        className="my-5 cursor-pointer"
        style={{ marginTop: "20px", width: "1220px", height: "100px", marginLeft: "60px" }}
        //     onClick={() => {
        //       state.isLogin == false ? setShowLogin(true) : HandleBuyying(item.id);
        //     }}
      >
        <div className="d-flex justify-content-between" style={{ marginTop: "20px", width: "1000px", marginLeft: "120px" }}>
          <div>
            <h5 className="fw-bold">Argo Wilis</h5>
            <h5 className="text-secondary">Eksekutif (H)</h5>
          </div>
          <div>
            <h5 className="fw-bold" style={{ marginLeft: "-15px" }}>
              05.00
            </h5>
            <h5 className="text-secondary" style={{ marginLeft: "-15px" }}>
              Gambir
            </h5>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/Arrow.png" alt="" className="h-3 w-3" style={{ marginLeft: "10px" }} />
          </div>
          <div>
            <h5 className="fw-bold" style={{ marginLeft: "-25px" }}>10.05</h5>
            <h5 className="text-secondary" style={{ marginLeft: "-25px" }}>Surabaya</h5>
          </div>
          <div>
            <h5 className="fw-bold" style={{ marginLeft: "-70px" }}>5j 05 m</h5>
          </div>
          <div>
            <h5 className="fw-bold">Rp. 250.000</h5>
          </div>
        </div>
      </Card>
    </>
  );
}
