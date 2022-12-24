// eslint-disable-next-line no-unused-vars
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h6 className="mb-4" style={{ fontSize: 24 }}>
                Trang chủ
              </h6>
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
