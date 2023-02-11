import { useEffect } from "react";
import AddressIcon from "./assets/AddressIcon";
import InstaIcon from "./assets/InstaIcon";
import PhoneIcon from "./assets/PhoneIcon";
import Bg from "./assets/pic1.jpg";
import Pic2 from "./assets/pic2.jpg";
import Pic3 from "./assets/pic3.jpg";
import Pic4 from "./assets/pic4.jpg";
import Pic5 from "./assets/pic5.jpg";
import Pic6 from "./assets/pic6.jpg";
import Pic7 from "./assets/pic7.jpg";
import Pic8 from "./assets/pic8.jpg";
import Pic9 from "./assets/pic9.jpg";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  let breakpointColumnsObj = {
    100000000: 5,
    1400: 4,
    1000: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center">
      <section
        id="home"
        className="flex md:flex-row flex-col w-screen h-screen relative text-center"
      >
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className="bg-img h-screen w-screen"
        ></div>
        <div className="flex flex-col absolute md:static w-full h-full items-center justify-center px-2">
          <h1 className="font-bold text-white text-9xl">Rex Chairs</h1>
          <p className="text-white text-4xl font-light">Best Chairs Ever</p>
        </div>
      </section>
      <section
        id="chairs"
        className="w-screen min-h-screen pt-24 mt-28 flex flex-col items-center text-center px-5"
      >
        <h1 className="text-white text-6xl font-bold mb-10">
          Chairs For AnyWhere AnyTime
        </h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <img
            data-aos="fade-up"
            className="w-full mb-8 rounded"
            src={Pic2}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="w-full mb-8 rounded"
            src={Pic3}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="w-full mb-8 rounded"
            src={Pic4}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="w-full mb-8 rounded"
            src={Pic8}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="w-full mb-8 rounded"
            src={Pic6}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="w-full mb-8 rounded"
            src={Pic7}
            alt=""
          />

          <img
            data-aos="fade-down"
            className="w-full mb-8 rounded"
            src={Pic9}
            alt=""
          />
        </Masonry>
      </section>
      <section
        id="contact-us"
        className="w-screen flex justify-center pt-16"
      >
        <div className="bg-slate-900 w-11/12 text-center rounded-xl mt-20 pb-5 flex flex-col items-center md:pb-5 md:pt-10 md:flex-row md:w-4/6 justify-center">
          <p className="text-white font-light text-3xl px-2 py-5 md:w-1/2">
          If You Have Any Question <br />
          <span className="font-bold text-6xl">Contact Us</span>
        </p>
        <div className="w-full flex flex-col items-start justify-center text-white text-xl sm:text-2xl w-3/6">
          <span className="flex items-center justify-start mb-4">
            <span className="mr-6">
              <PhoneIcon />
            </span>
            <p className="">111-222-333</p>
          </span>
          <span className="flex items-center justify-start mb-4">
            <span className="ml-1 mr-6">
              <InstaIcon />
            </span>
            <p className="">@RexChairs</p>
          </span>
          <span className="flex items-center justify-start mb-4">
            <span className="ml-2 mr-8">
              <AddressIcon />
            </span>
            <p className="">Rex Av. Chair St.</p>
          </span>
        </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${Pic5})` }} className="text-white w-screen flex flex-col items-center justify-center mt-20 bg-img h-96  mb-20 mt-40" id="buy">
        <p className="font-bold text-4xl">What Are You Waiting For?</p>
        <a href="#buy" className="bg-white text-black p-4 mt-3 hover:rounded-3xl">Buy Now</a>
      </section>
      <footer className="text-white mb-5">
        Created By TeaRex
      </footer>
    </div>
  );
}

export default App;
