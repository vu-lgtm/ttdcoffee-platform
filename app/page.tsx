import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QuoteForm } from "./components/QuoteForm";
import { Hero } from "./components/Hero";
import { products, services, posts, origins } from "./data/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div><p className="eyebrow">Danh mục</p><h2>Sản phẩm nổi bật</h2></div>
              <a className="btn secondary" href="/products">Xem tất cả</a>
            </div>
            <div className="grid-4">
              {products.slice(0,8).map(p => <article className="card" key={p.title}><span className="pill">{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Dịch vụ</p><h2>Cho B2C, B2B và xuất khẩu</h2></div></div>
            <div className="grid-4">{services.map(s => <article className="card" key={s.title}><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <div className="card">
              <p className="eyebrow">Coffee Origin</p>
              <h2>Mạng lưới vùng nguyên liệu</h2>
              <p className="lead">TTD Coffee định vị là Vietnam Coffee Sourcing Network, không giới hạn ở một tỉnh.</p>
              <div className="origin-list">{origins.map(o => <div className="origin-item" key={o}>{o}</div>)}</div>
            </div>
            <div className="card dark-card">
              <p className="eyebrow" style={{ color: "#C9A227" }}>Coffee Market Center</p>
              <h2>Trung tâm thị trường cà phê</h2>
              <p className="lead">Khu vực cập nhật giá Robusta, Arabica, USD/VND, tin tức và báo cáo AI hằng ngày.</p>
              <a className="btn" href="/market">Xem thị trường</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">OEM / Private Label</p><h2>Từ ý tưởng đến sản phẩm</h2></div></div>
            <div className="timeline">
              {["Tư vấn sản phẩm", "Rang & phối trộn", "Đóng gói nhãn riêng", "Giao hàng / xuất khẩu"].map((x, i) => <article className="card" key={x}><span className="pill">Bước {i+1}</span><h3>{x}</h3><p>Quy trình sẽ được chuẩn hóa để khách B2B dễ hiểu và dễ gửi yêu cầu báo giá.</p></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Tin tức</p><h2>Blog & SEO Hub</h2></div><a className="btn secondary" href="/blog">Xem blog</a></div>
            <div className="grid-3">{posts.map(post => <a className="card" href={`/blog#${post.slug}`} key={post.slug}><h3>{post.title}</h3><p>Bài viết mẫu cho chiến lược SEO ngành cà phê.</p></a>)}</div>
          </div>
        </section>

        <section className="section"><div className="container"><QuoteForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
