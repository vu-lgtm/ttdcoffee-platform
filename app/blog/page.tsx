import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Blog</p><h1>Coffee Knowledge & Market Hub</h1><p className="lead">Trung tâm nội dung SEO về cà phê, thị trường, xuất khẩu, rang xay, cupping và thiết bị.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"><article className="card"><h3>Giá cà phê hôm nay</h3><p>Nhóm bài SEO cập nhật thị trường cà phê.</p></article><article className="card"><h3>Kiến thức cà phê</h3><p>Arabica, Robusta, processing, cupping, roast.</p></article><article className="card"><h3>Xuất khẩu cà phê</h3><p>FOB, CIF, Incoterms, chứng từ, logistics.</p></article><article className="card"><h3>OEM cà phê</h3><p>Quy trình phát triển sản phẩm và nhãn riêng.</p></article></div></div></section>
        
      </main>
      <Footer />
    </>
  );
}
