import React from "react";
import ReactDOM from "react-dom/client";
import MainText from "./MainText";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="bg-sky-200">
      <div className="col-start-2 col-span-4 w-80 place-content-center bg-sky-700 w-317 mt-20 m-auto rounded-xl border-sky-800	border-2">
        <Header />
        <MainText />
        <Footer />
      </div>
    </div>
  );
}
