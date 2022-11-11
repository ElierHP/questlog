import Footer from "../footer/Footer";
import Header from "../header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <Header />
      <main className="page">{children}</main>
      <Footer />
    </div>
  );
}
