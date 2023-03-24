import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Payment() {
  return (
    <>
      <div className="ms-5 mt-5 d-flex">
        <div className="">
          <h1>Invoice</h1>
          <div className="">
            <Card style={{ background: "#EEEEEE", width: "796px", height: "154px" }}>
              <div className="d-flex">
                <div className="ms-5 mt-5">
                  <img src="/images/error.png" alt="" />
                </div>
                <div className="ms-5 mt-4">
                  <p>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera.</p>
                  <p>No.rek : 09812312312</p>
                </div>
              </div>
            </Card>
            <Card style={{ marginTop: "24px", width: "796px", height: "154px" }}>
              <div>
                <img className="position-absolute ms-4 my-auto" src="/images/Land.png" alt="Logo" />
                <img src="/images/Vector.png" alt="Rectangle" />
              </div>
              <div>
                <div className="d-flex">
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
                </div>
              </div>
            </Card>
            <div className="d-flex">
              <div className="mt-3">
                <h2>Rincian Harga</h2>
                <Card style={{ width: "446px", height: "137px" }}>
                  <div className="d-flex my-auto justify-content-between">
                    <h5 className="ms-5">Argo Wilis (Dewasa) x1</h5>
                    <h5 className="me-5">Rp. 25.000</h5>
                  </div>
                  <div className="d-flex justify-content-between" style={{ background: "#E6E6E6" }}>
                    <h5 className="ms-5 mt-2">Total</h5>
                    <h5 className="fw-bold me-5 mt-2">Rp. 25.000</h5>
                  </div>
                </Card>
                <Button variant="outline-light" className="fw-bold mt-3 mb-5" style={{ width: "446px", height: "auto", background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)" }}>
                  Bayar Sekarang
                </Button>
              </div>
              <div className="ms-5 mt-5">
                <div className="">
                  <img src="/images/Placeholder.webp" alt="" style={{ width: "215px", height: "215px" }} />
                  <p className="text-center text-secondary mt-2">upload payment proof</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-3 mt-5" style={{ background: "#F5F5F5", width: "447px", height: "414px" }}>
          <div style={{ background: "#D0D0D0", width: "447px", height: "115px" }}>
            <div className="d-flex justify-content-between">
              <div className="mt-3 ms-4">
                <h1 className="fw-bold">Kereta Api</h1>
                <p className="text-secondary">
                  <b className="text-secondary">Saturday</b>, 21 February 2023
                </p>
              </div>
              <div className="mt-4 me-3">
                <img src="/images/Barcode.png" alt="" />
                <p>INV0101</p>
              </div>
            </div>
          </div>
          <div className="ms-4 mt-3">
            <div>
              <h3 className="fw-bold">Argo Wilis</h3>
              <p className="text-secondary">Executive (H)</p>
            </div>
            <div className="d-flex">
              <div className="mt-3">
                <div className="rounded-circle" style={{ width: "16px", height: "16px", border: "2px solid #EC7AB7" }}></div>
                <div className="ms-2 mt-3 border-start border-2" style={{ width: "0px", height: "50px" }}></div>
                <div className="rounded-circle mt-3" style={{ width: "16px", height: "16px", backgroundColor: "#EC7AB7" }}></div>
              </div>
              <div className="ms-4 mt-1">
                <div>
                  <h5 className="fw-bold">05.00</h5>
                  <h5 className="text-secondary">21 Februari 2023</h5>
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold">10.00</h5>
                  <h5 className="text-secondary">21 Februari 2023</h5>
                </div>
              </div>
              <div className="ms-4 mt-1">
                <div>
                  <h5 className="fw-bold">Jakarta (GMB)</h5>
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
      </div>
    </>
  );
}
