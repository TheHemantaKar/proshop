import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
          {/* <Routes>
              <Route path='/' element={<HomeScreen/>} exact></Route>
              <Route path='/product/:id' element={<ProductScreen/>}></Route>
            </Routes> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
