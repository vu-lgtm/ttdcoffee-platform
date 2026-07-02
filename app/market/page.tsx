import { SiteHeader } from "./components/SiteHeader";
import { Footer } from "./components/Footer";
import { QuoteForm } from "./components/QuoteForm";
import { products, posts, origins } from "./data/content";

const strengths = [
  "Nguồn nguyên liệu trực tiếp từ vùng trồng",
  "Xưởng rang hiện đại",
  "Kinh nghiệm xuất khẩu",
  "OEM / Private Label",
  "Giá cạnh tranh",
  "Giao hàng quốc tế",
];

const exportSteps = [
  "Tư vấn nhu cầu",
  "Chọn sản phẩm",
  "Gửi mẫu",
  "Báo giá",
  "Sản xuất",
  "Giao hàng",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="badge">From Vietnam to the World</span>
              <h1>Giải pháp cà phê toàn diện cho B2B & xuất khẩu</h1>
              <p className="lead">
                TTD Coffee cung cấp cà phê nhân xanh, cà phê rang xay,
                OEM / Private Label, thiết bị và giải pháp xuất khẩu cho
                nhà rang xay, chuỗi cà phê, đại lý và nhà nhập khẩu.
              </p>

              <div className="actions" style={{ marginTop: 26 }}>
                <a className="btn" href="/quote">Yêu cầu báo giá</a>
                <a className="btn secondary" href="/products">Xem sản phẩm</a>
              </div>
            </div>

            <div className="hero-visual">
              <div>
                <p className="eyebrow" style={{ color: "#C9A227" }}>
                  Vietnam Coffee Sourcing Network
                </p>
                <h2 style={{ color: "white" }}>One-stop Coffee Solution</h2>
                <p>
                  Kết nối vùng nguyên liệu, xưởng rang, OEM, thiết bị và xuất khẩu
                  trên cùng một nền tảng.
                </p>
              </div>

              <div className="metric-row">
                <div className="metric"><strong>10+</strong><br />Vùng nguyên liệu</div>
                <div className="metric"><strong>B2B</strong><br />Quote-first</div>
                <div className="metric"><strong>AI</strong><br />Sales ready</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Vietnam Coffee Solutions</p>
                <h2>Một nền tảng cho nhiều nhu cầu cà phê</h2>
              </div>
            </div>

            <div className="grid-4">
              {products.slice(0, 8).map((p) => (
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

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Why TTD Coffee</p>
                <h2>Lý do khách hàng chọn chúng tôi</h2>
              </div>
            </div>

            <div className="grid-3">
              {strengths.map((item) => (
                <article className="card" key={item}>
                  <h3>{item}</h3>
                  <p>
                    Nội dung chi tiết sẽ được mở rộng bằng hình ảnh, dữ liệu,
                    chứng nhận và case study thực tế trong các sprint tiếp theo.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <div className="card">
              <p className="eyebrow">Coffee Origin</p>
              <h2>Mạng lưới vùng nguyên liệu Việt Nam</h2>
              <p className="lead">
                TTD Coffee không giới hạn ở một vùng, mà xây dựng mạng lưới
                nguồn cung từ các vùng cà phê trọng điểm.
              </p>

              <div className="origin-list">
                {origins.map((origin) => (
                  <div className="origin-item" key={origin}>
                    {origin}
                  </div>
                ))}
              </div>
            </div>

            <div className="card dark-card">
              <p className="eyebrow" style={{ color: "#C9A227" }}>
                Coffee Market Center
              </p>
              <h2>Trung tâm thị trường cà phê</h2>
              <p>
                Khu vực này sẽ cập nhật giá Robusta, Arabica, USD/VND, tin tức,
                phân tích kỹ thuật và báo cáo AI hằng ngày.
              </p>
              <a className="btn" href="/market">
                Xem thị trường
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Export Process</p>
                <h2>Quy trình làm việc với khách B2B</h2>
              </div>
            </div>

            <div className="timeline">
              {exportSteps.map((step, index) => (
                <article className="card" key={step}>
                  <span className="pill">Bước {index + 1}</span>
                  <h3>{step}</h3>
                  <p>
                    Quy trình được thiết kế để khách hàng dễ gửi yêu cầu,
                    nhận báo giá và theo dõi đơn hàng.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Blog & SEO</p>
                <h2>Kiến thức và thị trường cà phê</h2>
              </div>
              <a className="btn secondary" href="/blog">
                Xem blog
              </a>
            </div>

            <div className="grid-3">
              {posts.map((post) => (
                <a className="card" href={`/blog#${post.slug}`} key={post.slug}>
                  <h3>{post.title}</h3>
                  <p>
                    Bài viết mẫu cho chiến lược SEO ngành cà phê Việt Nam và
                    thị trường quốc tế.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}