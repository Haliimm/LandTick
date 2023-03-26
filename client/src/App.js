import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import MyTicket from "./pages/MyTiket";
import Payment from "./pages/Payment";
import IndexAdmin from "./pages/IndexAdmin";
import AddTicket from "./pages/AddTicket";
import AddStation from "./pages/AddStation";

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
        <Route path="/" element={state.user.role === "admin" ? <IndexAdmin /> : <Home />} />
        <Route path="/my-ticket" element={<MyTicket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin/add-ticket" element={<AddTicket />} />
        <Route path="/admin/add-station" element={<AddStation />} />

        {/* Route User */}
        {/* <Route path="/" element={<UserRoute />}> */}

        {/* </Route> */}


        {/* Route Admin */}
        {/* <Route path="/" element={<AdminRoute />}> */}

        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
