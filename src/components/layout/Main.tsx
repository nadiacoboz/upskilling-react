import type { JSX } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Main(): JSX.Element {
  return (
    <>
      <Header title="Movies" />
      <main className="flex-grow-1">
        <Outlet></Outlet>
      </main>
      <Footer title="Accenture" />
    </>
  );
}

export default Main
