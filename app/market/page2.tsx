import QuoteFormPro from "./components/QuoteFormPro";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Market</p><h1>Coffee Market Center</h1><p className="lead">Trung tâm giá cà phê, tin thị trường và báo cáo AI cho nhà rang xay, trader và nhà nhập khẩu.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>Giá Robusta</h3><p>Kết nối dữ liệu thị trường ở Sprint sau.</p></article><article className="card"><h3>Giá Arabica</h3><p>Theo dõi xu hướng và phân tích kỹ thuật.</p></article><article className="card"><h3>Giá nội địa</h3><p>Cập nhật Tây Nguyên, basis và differential.</p></article><article className="card"><h3>AI Report</h3><p>Bản tin thị trường tự động mỗi ngày.</p></article></div></div></section>
        
      </main>
      <QuoteFormPro />
    </>
  );
}
