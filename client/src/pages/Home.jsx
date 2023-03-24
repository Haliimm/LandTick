import React from "react";
import Jumbotron from "../component/Jumbotron";
import Ticket from "../component/Ticket";
import Footer from "../component/Footer";
import { Form, Button } from "react-bootstrap";

export default function Home(props) {
  return (
    <>
      <Jumbotron />
      <div className="d-flex position-absolute" style={{ background: "#FFFFFF", width: "1220px", height: "236px", marginTop: "-40px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)", marginLeft: "60px", borderRadius: "5px" }}>
        <div className="d-flex" style={{ background: "#F2F2F2", width: "284px", height: "236px", borderRadius: "5px" }}>
          <div className="mt-4" style={{ background: "#E67E22", width: "9px", height: "53px" }}></div>
          <div className="d-flex mt-4" style={{ background: "#FFFFFF", width: "284px", height: "53px" }}>
            <img className="items-center my-auto" src="/images/Icon.png" alt="" style={{ width: "30px", height: "30px" }} />
            <h5 className="items-center ms-3 my-auto">Tiket Kereta Api</h5>
          </div>
        </div>
        <div className="ms-3 mt-2">
          <form action="">
            <h4>Tiket Kereta Api</h4>
            <div className="d-flex">
              <div style={{ width: "400px" }}>
                <h5>Asal</h5>
                <div className="">
                  <Form.Select aria-label="Default select example">
                    <option hidden>Start Station</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="d-flex">
                  <h5 className="mt-3">Tanggal Berangkat</h5>
                  <div className="d-flex">
                    <Form.Group className="ms-5 mt-3 fw-bold" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Pulang Pergi" />
                    </Form.Group>
                  </div>
                </div>
                <Form.Control className="mt-2" type="date" style={{ width: "138px", height: "30px" }} />
              </div>
              <div>
                <img className="mt-4 ms-3" src="/images/switch.png" alt="" style={{ width: "50px", height: "50px" }} />
              </div>
              <div className="ms-3" style={{ width: "400px" }}>
                <h5>Tujuan</h5>
                <div className="">
                  <Form.Select aria-label="Default select example">
                    <option hidden>End Station</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="d-flex mt-3">
                  <div>
                    <h5 className="">Dewasa</h5>
                    <Form.Select aria-label="Default select example" style={{ width: "116px", height: "auto" }}>
                      <option hidden>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </div>
                  <div className="ms-3">
                    <h5>Bayi</h5>
                    <Form.Select aria-label="Default select example" style={{ width: "116px", height: "auto" }}>
                      <option hidden>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </div>
                  <Button className="ms-3 fw-bold" variant="outline-light" style={{ background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)", width: "134px", height: "auto", marginTop: "30px" }}>
                    Cari Ticket
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Ticket />
      <Footer />
    </>
  );
}