import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import { Form, Button } from "react-bootstrap";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";

export default function AddTicket() {
  const [form, setForm] = useState({
    train_name: "",
    train_type: "",
    start_date: "",
    start_station_id: "",
    start_time: "",
    destination_station_id: "",
    arrival_time: "",
    price: "",
    qty: "",
  });
  console.log(form);

  let { data: stations, refetch } = useQuery("stationsCache", async () => {
    const response = await API.get("/stations");
    return response.data.data.stations;
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.set("train_name", form.train_name);
      formData.set("train_type", form.train_type);
      formData.set("start_date", form.start_date);
      formData.set("start_time", form.start_time);
      formData.set("start_station_id", form.start_station_id);
      formData.set("destination_station_id", form.destination_station_id);
      formData.set("arrival_time", form.arrival_time);
      formData.set("price", form.price);
      formData.set("qty", form.qty);

      const response = await API.post("/ticket", formData);
      if (response.status === 200) {
        Swal.fire({
          title: "New product has been added!",
          icon: "success",
          timer: 1500,
          width: 600,
          padding: "3em",
          color: "#c23a63",
          background: "#fff)",
          backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
          `,
        });
        setForm({
          train_name: "",
          train_type: "",
          start_date: "",
          start_station_id: "",
          start_time: "",
          destination_station_id: "",
          arrival_time: "",
          price: "",
          qty: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    refetch();
  }, [stations]);

  return (
    <>
      <div className="container mt-5">
        <h1 className="fw-bold">Tambah Tiket</h1>
        <Form
          className="mt-5"
          onSubmit={(e) => {
            handleSubmit.mutate(e);
          }}
        >
          <Form.Group className="mb-3">
            <Form.Control type="text" name="train_name" placeholder="Nama Kereta" onChange={handleChange} value={form.train_name} />
          </Form.Group>

          <Form.Select className="mb-3" name="train_type" aria-label="Default select example" onChange={handleChange} required={true} value={form.train_type}>
            <option hidden>Jenis Kereta</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Bisnis">Bisnis</option>
            <option value="Eksekutif">Eksekutif</option>
            <option value="Luxury">Luxury</option>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="date" name="start_date" placeholder="Tanggal Keberangkatan" onChange={handleChange} value={form.start_date} />
          </Form.Group>

          <Form.Select className="mb-3" name="start_station_id" aria-label="Default select example" onChange={handleChange} value={form.start_station_id}>
            <option hidden>Stasiun Keberangkatan</option>
            {stations?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="time" name="start_time" placeholder="Jam Keberangkatan" onChange={handleChange} value={form.start_time} />
          </Form.Group>

          <Form.Select className="mb-3" name="destination_station_id" aria-label="Default select example" onChange={handleChange} value={form.destination_station_id}>
            <option hidden>Stasiun Tujuan</option>
            {stations?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="time" name="arrival_time" placeholder="Jam Tiba" onChange={handleChange} value={form.arrival_time} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="price" min={0} placeholder="Harga Tiket" onChange={handleChange} value={form.price} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="qty" min={0} placeholder="Qty" onChange={handleChange} value={form.qty} />
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
