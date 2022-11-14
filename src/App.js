import React from "react";
import ReactDOM from "react-dom/client";
import MainText from "./MainText";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="bg-sky-700">
      <div className="col-start-2 col-span-4 w-80 place-content-center bg-sky-900 w-317 mt-20 m-auto rounded-xl">
        <Header />
        <MainText />
        <Footer />
      </div>
    </div>
  );
}
