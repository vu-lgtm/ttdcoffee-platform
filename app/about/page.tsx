import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">About</p><h1>Giới thiệu TTD Coffee</h1><p className="lead">TTD Coffee là thương hiệu định vị theo mô hình One-stop Coffee Solution: sản phẩm, thiết bị, OEM và xuất khẩu.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>Sứ mệnh</h3><p>Mang cà phê Việt Nam đến thị trường trong nước và quốc tế.</p></article><article className="card"><h3>Định vị</h3><p>From Vietnam to the World.</p></article><article className="card"><h3>Giá trị</h3><p>Chất lượng, minh bạch, đối tác, đổi mới và bền vững.</p></article></div></div></section>
        
      </main>
      <Footer />
    </>
  );
}
