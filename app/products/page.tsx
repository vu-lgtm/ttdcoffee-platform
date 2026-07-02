import { SiteHeader } from "../components/SiteHeader";
import { Footer } from "../components/Footer";
import { products } from "../data/content";

const groups = [
  "Tất cả",
  "Green Coffee",
  "Roasted",
  "Retail",
  "Convenience",
  "Equipment",
];

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Products</p>
            <h1>Sản phẩm TTD Coffee</h1>
            <p className="lead">
              Danh mục dành cho khách lẻ, quán cà phê, đại lý, nhà rang xay và
              nhà nhập khẩu.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Danh mục</p>
                <h2>Chọn nhóm sản phẩm</h2>
              </div>
              <a className="btn" href="/quote">
                Yêu cầu báo giá
              </a>
            </div>

            <div className="actions" style={{ marginBottom: 24, flexWrap: "wrap" }}>
              {groups.map((group) => (
                <span className="pill" key={group}>
                  {group}
                </span>
              ))}
            </div>

            <div className="grid-4">
              {products.map((p) => (
                <article className="card" key={p.title}>
                  <span className="pill">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a className="btn secondary" href="/quote">
                    Nhận báo giá
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}