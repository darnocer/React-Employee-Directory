import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Searchbar />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
