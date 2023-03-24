import React from "react";
import Footer from "../component/Footer";
import { Form, Button } from "react-bootstrap";

export default function AddTicket() {
  return (
    <>
      <div className="container mt-5">
        <h1>Tambah Tiket</h1>
        <Form className="mt-5">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Nama Kereta" />
          </Form.Group>

          <Form.Select className="mb-3" aria-label="Default select example">
            <option hidden>Jenis Kereta</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Tanggal Keberangkatan" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Stasiun Keberangkatan" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Jam Keberangkatan" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Stasiun Tujuan" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Jam Tiba" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Harga Tiket" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Harga Tiket" />
          </Form.Group>

          <Button className="mt-5" variant="outline-light fw-bold" type="submit" style={{ width: "535px", height: "50px", background: "#0ACF83", marginLeft: "282px" }}>
            Save
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
