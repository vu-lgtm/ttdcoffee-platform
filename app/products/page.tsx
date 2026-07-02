import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Products</p><h1>Sản phẩm TTD Coffee</h1><p className="lead">Danh mục dành cho khách lẻ, quán cà phê, đại lý, nhà rang xay và nhà nhập khẩu.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>Cà phê nhân xanh</h3><p>Robusta, Arabica, Specialty, Fine Robusta.</p></article><article className="card"><h3>Cà phê rang xay</h3><p>Hạt rang, cà phê bột, blend espresso, phin.</p></article><article className="card"><h3>Drip Bag / Capsule / Cold Brew</h3><p>Dòng tiện lợi cho bán lẻ và quà tặng.</p></article><article className="card"><h3>Máy pha cà phê</h3><p>Thiết bị cho quán, văn phòng, showroom.</p></article><article className="card"><h3>Máy xay cà phê</h3><p>Giải pháp xay cho espresso, pha phin, pour-over.</p></article><article className="card"><h3>Phụ kiện</h3><p>Dụng cụ barista và vật tư vận hành.</p></article></div></div></section>
        
      </main>
      <Footer />
    </>
  );
}
