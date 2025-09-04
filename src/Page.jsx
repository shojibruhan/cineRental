import React, { useContext } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Page = () => {
  const { darkMood } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
