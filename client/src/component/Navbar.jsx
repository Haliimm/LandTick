import React, { useEffect, useState, useContext } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { API, setAuthToken } from "../config/api";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import Profile from "../assets/image/blank-profile.png";
import Logout from "../assets/image/Logout.png";
import IconAddTicket from "../assets/image/more.png";
import IconPayment from "../assets/image/bill.png";
import Ticket from "../assets/image/Ticket.png";

export default function Header(props) {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  let { data: profile } = useQuery("profileCache", async () => {
    const response = await API.get("/profile");
    return response.data.data;
  });

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    handleClose(true);
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    handleClose(true);
    setShowRegister(true);
  };

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Success",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
    // window.location.reload();
  };

  return (
    <>
      <Navbar className="" style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.25)", height: "60px" }}>
        <Container>
          <Navbar.Brand href="#">
            <img src="/images/LandTick.png" alt="LandTick" />
            <img className="ms-2" src="/images/Logo.png" alt="Logo LandTick" />
          </Navbar.Brand>
          <Navbar.Collapse id="">
            {state.isLogin === true ? (
              state.user.is_admin === true ? (
                <Nav className="ms-auto gap-3">
                  <NavDropdown id="dropdown" title={<img src={Profile} alt="" className="rounded-circle" style={{ cursor: "pointer", objectFit: "cover", width: "60px", height: "60px" }} />}>
                    <NavDropdown.Item href="/add-product">
                      <img src={IconAddTicket} alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">Add Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                      <img src={Logout} alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <Nav className="ms-auto gap-3">
                  <NavDropdown id="dropdown" title={<img src={Profile} alt="" className="rounded-circle" style={{ cursor: "pointer", objectFit: "cover", width: "60px", height: "60px" }} />}>
                    <NavDropdown.Item href="/list-product">
                      <img src={Ticket} alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">List Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/list-product">
                      <img src={IconPayment} alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">List Product</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                      <img src={Logout} alt="" style={{ width: 40, height: 38.17 }} />
                      <span className="ms-2 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )
            ) : (
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
                <Form className="d-flex">
                  <div type="submit" onClick={handleShowRegister} className="me-2 px-4 fw-bold rounded" style={{ border: "3px solid #EC7AB7" }}>
                    <p className="my-auto mt-1 mb-1" style={{ color: "#EC7A7A" }}>
                      Daftar
                    </p>
                  </div>
                  <div type="submit" onClick={handleShowLogin} className="me-2 px-4 fw-bold rounded" style={{ border: "3px solid #EC7AB7", background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)" }}>
                    <p className="my-auto mt-1 mb-1 text-light">Login</p>
                  </div>
                </Form>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalLogin show={showLogin} onHide={handleClose} onClick={handleShowRegister} />
      <ModalRegister show={showRegister} onHide={handleClose} onClick={handleShowLogin} />
    </>
  );
}