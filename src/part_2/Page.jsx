import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cinema/MovieList";
import { DarkMoodContext } from "./context";

const Page = () => {
  const { darkMood } = useContext(DarkMoodContext);

  return (
    <>
      <div className={` h-full w-full ${darkMood ? "dark" : ""}`}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
