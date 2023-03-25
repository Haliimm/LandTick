import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MyTicket() {
  return (
    <>
      <h1 style={{ marginTop: "68px", marginLeft: "120px" }}>My Ticket</h1>
      <Card className="" style={{ width: "1035px", height: "344px", marginTop: "33px", marginLeft: "165.50px" }}>
        <div className="">
          <div>
            <img className="position-absolute ms-4 my-auto" src="/images/Land.png" alt="Logo" />
            <img src="/images/Vector.png" alt="Rectangle" />
          </div>
          <div className="text-end position-absolute" style={{ marginLeft: "750px" }}>
            <h1>Kereta Api</h1>
            <h5 className="text-secondary">
              <b className="text-secondary">Saturday</b>, 21 February 2023
            </h5>
          </div>
          <div className="d-flex">
            <div>
              <h1 className="ms-5 mt-5 fw-bold">Argo Wilis</h1>
              <h5 className="ms-5 mt-3">Eksekutif (H)</h5>
              <div className="font-size-14px text-center rounded ms-5 mt-3" style={{ width: "69px", height: "24px", color: "#FF9900", backgroundColor: "rgba(255,153,0,0.125)" }}>
                Pending
              </div>
            </div>
            <div className="mt-5 ms-5">
              <div className="rounded-circle" style={{ width: "16px", height: "16px", border: "2px solid #EC7AB7" }}></div>
              <div className="ms-2 mt-3 border-start border-2" style={{ width: "0px", height: "50px" }}></div>
              <div className="rounded-circle mt-3" style={{ width: "16px", height: "16px", backgroundColor: "#EC7AB7" }}></div>
            </div>
            <div className="ms-3 mt-4">
              <div>
                <h5 className="fw-bold">05.00</h5>
                <h5 className="text-secondary">21 Februari 2023</h5>
              </div>
              <div className="mt-5">
                <h5 className="fw-bold">10.00</h5>
                <h5 className="text-secondary">21 Februari 2023</h5>
              </div>
            </div>
            <div className="ms-5 mt-4">
              <div>
                <h5 className="fw-bold">Jakarta (GMR)</h5>
                <h5 className="text-secondary">Stasiun Gambir</h5>
              </div>
              <div className="mt-5">
                <h5 className="fw-bold">Surabaya (SBY)</h5>
                <h5 className="text-secondary">Stasiun Surabaya</h5>
              </div>
            </div>
          </div>
          {/* <div className="d-flex">
            <h5 className="ms-5 mt-4">No. Tanda Pengenal</h5>
            <h5 className="ms-5 mt-4">Nama Pemesanan</h5>
            <h5 className="ms-5 mt-4">No. Handphone</h5>
            <h5 className="ms-5 mt-4">Email</h5>
          </div>
          <div className="d-flex" style={{ borderTop: "1px solid #B7B7B7", width: "796px" }}>
            <p className="ms-5 mt-3 text-secondary">3301072007000002</p>
            <p className="ms-5 mt-3 text-secondary">Halim</p>
            <p className="ms-5 mt-3 text-secondary">082118383431</p>
            <p className="ms-5 mt-3 text-secondary">halimawaludienkhafifie@gmail.com</p>
            <div>
              <Button className="ms-4" variant="outline-light text-white fw-bold" style={{ width: "206px", height: "40px", background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)" }}>
                Bayar Sekarang
              </Button>
            </div>
          </div> */}
          <div className="d-flex">
            <table class=" ms-3 mt-4 border-1 border-dark">
              <thead className="">
                <tr className="border-bottom border-2">
                  <th>No. Tanda Pengenal</th>
                  <th>Nama Pemesan</th>
                  <th>No. Handphone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-secondary">1230912309714098</td>
                  <td className="text-secondary">Mark</td>
                  <td className="text-secondary">08219123919</td>
                  <td className="text-secondary">mark@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <div>
              <Button className="mt-5 ms-4 me-3" variant="outline-light text-white fw-bold" style={{ width: "206px", height: "40px", background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)" }}>
                Bayar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
