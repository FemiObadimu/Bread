import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import ProductState from "./context/product/ProductState";
import SignUp from "./components/basic/SignUp";
import Login from "./components/basic/Login";
import Dashboard from "./components/basic/Dashboard";
import NotFound from "./components/basic/NotFound";
import Home from "./components/basic/Home";
import setAuthHeader from "./utils/setAuthHeader";
import Admins from "./components/basic/Admins";
import AdminRoute from "./components/routing/AdminRoute";
import TokenRouting from "./components/routing/TokenRouting";
import Success from "./components/basic/Dashboard-Compnents/Success";
import Cart from "./components/basic/Dashboard-Compnents/Cart";
import Shop from "./components/basic/Dashboard-Compnents/Shop";
import CheckOut from "./components/basic/Dashboard-Compnents/CheckOut";

// Setting a global header to keep user loaded
if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ProductState>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route
                exact
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/dashboard/cart"
                element={
                  <TokenRouting>
                    <Cart />
                  </TokenRouting>
                }
              />
              <Route
                exact
                path="/dashboard/shop"
                element={
                  <TokenRouting>
                    <Shop />
                  </TokenRouting>
                }
              />

              <Route
                exact
                path="/dashboard/payment/success"
                element={
                  <TokenRouting>
                    <Success />
                  </TokenRouting>
                }
              />
              <Route
                exact
                path="/dashboard/checkout"
                element={
                  <TokenRouting>
                    <CheckOut />
                  </TokenRouting>
                }
              />
              <Route
                exact
                path="/admin/manage-products"
                element={
                  <TokenRouting>
                    <AdminRoute>
                      <Admins />
                    </AdminRoute>
                  </TokenRouting>
                }
              />

              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ProductState>
    </AuthState>
  );
}

export default App;
