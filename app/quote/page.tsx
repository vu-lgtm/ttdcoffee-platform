import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteForm } from '../components/QuoteForm';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Request a Quote</p><h1>Yêu cầu báo giá</h1><p className="lead">Gửi nhu cầu để TTD Coffee tư vấn sản phẩm, số lượng, đóng gói, OEM hoặc xuất khẩu.</p></div></section>
        <section className="section"><div className="container"><div className="grid-3"></div></div></section>
        <section className="section"><div className="container"><QuoteForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
