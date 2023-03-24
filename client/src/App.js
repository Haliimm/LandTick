import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyTicket from "./pages/MyTiket";
import Payment from "./pages/Payment";
import IndexAdmin from "./pages/IndexAdmin";
import AddTicket from "./pages/AddTicket";

import DetailProduct from "./pages/DetailProduct";
import MyCart from "./pages/MyCart";
import MyTransaction from "./pages/MyTransaction";
import AddCard from "./pages/AddCard";
import UpdateCard from "./pages/UpdateCard";
import AdminDashboard from "./pages/AdminDashboard";
import ListProductAdmin from "./pages/ListProductAdmin";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import Navbar from "./component/Navbar";
import { UserContext } from "./context/userContext";
import React, { useContext } from "react";
// import AdminRoute from "./component/AdminRoute";
// import UserRoute from "./component/UserRoute";

function App() {
  const [state] = useContext(UserContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={state.user.is_admin ? <AdminDashboard /> : <Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/my-ticket" element={<MyTicket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin/dashboard" element={<IndexAdmin />} />
        <Route path="/admin/add-ticket" element={<AddTicket />} />

        <Route path="/detail-product/:id" element={<DetailProduct />} />

        {/* Route User */}
        {/* <Route path="/" element={<UserRoute />}> */}
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/my-transaction" element={<MyTransaction />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        {/* </Route> */}

        {/* Route Admin */}
        {/* <Route path="/" element={<AdminRoute />}> */}
        <Route path="/add-product" element={<AddCard />} />
        <Route path="/update-product/:id" element={<UpdateCard />} />
        <Route path="/list-product" element={<ListProductAdmin />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
