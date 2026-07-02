import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteForm } from '../components/QuoteForm';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Export</p><h1>Xuất khẩu cà phê Việt Nam</h1><p className="lead">Trang dành cho nhà nhập khẩu, đối tác quốc tế và khách hàng cần báo giá FOB/CIF.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>Green Coffee Export</h3><p>Cà phê nhân xanh theo specification và nguồn gốc.</p></article><article className="card"><h3>Roasted Coffee Export</h3><p>Cà phê rang, private label và sản phẩm bán lẻ.</p></article><article className="card"><h3>Documents</h3><p>COA, specification, packing list, invoice và chứng từ xuất khẩu.</p></article><article className="card"><h3>Shipment</h3><p>Theo dõi container và trạng thái đơn hàng ở giai đoạn portal.</p></article></div></div></section>
        <section className="section"><div className="container"><QuoteForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
