import React, { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./cinema/CartDetails";
import { DarkMoodContext, MovieContext } from "./context";
const Header = () => {
  const { darkMood, setDarkMood } = useContext(DarkMoodContext);
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMood((darkMood) => !darkMood)}
            >
              <img src={darkMood ? moon : sun} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] p-[2px] w-[30px] h-[30px] bg-[#12CF6F] text-white text-center">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
