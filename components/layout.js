import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className=" font-josefin ">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
