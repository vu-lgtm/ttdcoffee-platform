import { SiteHeader } from "../components/SiteHeader";
import { Footer } from "../components/Footer";
import QuoteFormPro from "../components/QuoteFormPro";

export default function QuotePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Request a Quote</p>
            <h1>Yêu cầu báo giá</h1>
            <p className="lead">
              Gửi nhu cầu để TTD Coffee tư vấn sản phẩm, số lượng, đóng gói,
              OEM hoặc xuất khẩu.
            </p>
          </div>
        </section>

        <QuoteFormPro />
      </main>

      <Footer />
    </>
  );
}