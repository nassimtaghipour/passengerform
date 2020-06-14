import React from "react";
import { MyForm } from "./components/MyForm";
import Layout from "./components/layout/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Layout>
        <MyForm />
      </Layout>
    </div>
  );
}

export default App;
