import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="font-josefin min-h-full">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
