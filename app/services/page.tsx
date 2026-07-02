import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Services</p><h1>Dịch vụ cà phê trọn gói</h1><p className="lead">Từ nguồn hàng, rang, đóng gói đến xuất khẩu.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>OEM / Private Label</h3><p>Rang gia công, đóng gói và phát triển nhãn riêng.</p></article><article className="card"><h3>Setup quán cà phê</h3><p>Tư vấn thiết bị, menu, công thức và vận hành.</p></article><article className="card"><h3>Cung cấp B2B</h3><p>Nguồn hàng ổn định cho quán, đại lý, nhà rang xay.</p></article><article className="card"><h3>Coffee Consulting</h3><p>Tư vấn sản phẩm, thị trường và mô hình kinh doanh.</p></article></div></div></section>
        
      </main>
      <Footer />
    </>
  );
}
