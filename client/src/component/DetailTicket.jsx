import React from "react";
import { Table } from "react-bootstrap";

export default function DetailTicket() {
  return (
    <>
      <div>
        <div>
          <h1 className="fw-bold">INVOICE</h1>
          <p>Kode Invoice : INV0101</p>
        </div>
        <div className="d-flex">
          <div>
            <div className="d-flex mt-5">
              <div>
                <h4 className="fw-bold">Kereta Api</h4>
                <p className="text-secondary">
                  <b className="text-secondary">Saturday</b>, 21 Febuari 2020
                </p>
              </div>
              <div className="ms-5">
                <img src="/images/Barcode.png" alt="" />
                <p>TCK0101</p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="fw-bold">Argo Wilis</h4>
                <p>Eksekutif (H)</p>
              </div>
              <div className="d-flex">
                <div className="mt-5">
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
            </div>
          </div>
          <div className="ms-5">
            <img src="/images/Placeholder.webp" alt="" style={{ width: "220px", height: "250px" }} />
            <p className="text-center text-secondary">upload payment proof</p>
          </div>
        </div>

        <table class="mt-3 border-top border-bottom border-1 border-dark w-100">
          <thead>
            <tr>
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

        <div className="mt-3" style={{ background: "#E6E6E6" }}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <h5 className="ms-3 mb-0 fw-bold">Total</h5>
            <h5 className="me-3 mb-0 text-danger fw-bold">Rp. 250.000</h5>
          </div>
        </div>
      </div>
    </>
  );
}
