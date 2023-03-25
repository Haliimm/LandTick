import React, { useState, useContext, useEffect } from "react";
import Footer from "../component/Footer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { useMutation } from "react-query";
import { UserContext } from "../context/userContext";
import Swal from "sweetalert2";

export default function AddTicket() {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  const [form, setForm] = useState({
    name_train: "",
    type_train: "",
    start_date: "",
    start_station_id: "",
    start_time: "",
    destination_station_id: "",
    arrival_time: "",
    price: "",
    qty: "",
  });
  console.log(form);

  const [station, setStation] = useState();

  const getStation = async () => {
    try {
      const response = await API.get("/stations");
      setStation(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/ticket", form, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add Ticket Success",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("ticked berhasil tambah", response.data.data);
      navigate("/index-admin");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Add Ticket Failed",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(error);
    }
  });

  useEffect(() => {
    getStation();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="fw-bold">Tambah Tiket</h1>
        <Form className="mt-5">
          <Form.Group className="mb-3">
            <Form.Control type="text" name="name_train" placeholder="Nama Kereta" onChange={handleChange} />
          </Form.Group>

          <Form.Select className="mb-3" name="type_train" aria-label="Default select example" onChange={handleChange}>
            <option hidden>Jenis Kereta</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Bisnis">Bisnis</option>
            <option value="Eksekutif">Eksekutif</option>
            <option value="Luxury">Luxury</option>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="date" name="start_date" placeholder="Tanggal Keberangkatan" onChange={handleChange} />
          </Form.Group>

          <Form.Select className="mb-3" name="start_station_id" aria-label="Default select example" onChange={handleChange}>
            <option hidden>Stasiun Keberangkatan</option>
            {station?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="time" name="start_time" placeholder="Jam Keberangkatan" onChange={handleChange} />
          </Form.Group>

          <Form.Select className="mb-3" name="destination_station_id" aria-label="Default select example" onChange={handleChange}>
            <option hidden>Stasiun Tujuan</option>
            {station?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control type="time" name="arrival_time" placeholder="Jam Tiba" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="price" placeholder="Harga Tiket" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="qty" placeholder="Qty" onChange={handleChange} />
          </Form.Group>

          <Button onClick={(e) => handleSubmit.mutate(e)} className="mt-5" variant="outline-light fw-bold" type="submit" style={{ width: "535px", height: "50px", background: "#0ACF83", marginLeft: "282px" }}>
            Save
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
