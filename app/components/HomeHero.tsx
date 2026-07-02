export function HomeHero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">One-stop Coffee Solution</span>
          <h1>Giải pháp cà phê toàn diện từ Việt Nam</h1>
          <p className="lead">
            TTD Coffee cung cấp cà phê nhân xanh, cà phê rang xay,
            OEM / Private Label, thiết bị và giải pháp xuất khẩu cho
            nhà rang xay, chuỗi cà phê và nhà nhập khẩu.
          </p>

          <div className="actions" style={{ marginTop: 26 }}>
            <a className="btn" href="/quote">Yêu cầu báo giá</a>
            <a className="btn secondary" href="/products">Xem sản phẩm</a>
          </div>
        </div>

        <div className="hero-visual">
          <div>
            <p className="eyebrow" style={{ color: "#C9A227" }}>
              From Vietnam to the World
            </p>
            <h2 style={{ color: "white" }}>
              Vietnam Coffee Sourcing Network
            </h2>
            <p>
              Kết nối vùng nguyên liệu, xưởng rang, OEM và xuất khẩu cà phê
              Việt Nam đến khách hàng toàn cầu.
            </p>
          </div>

          <div className="metric-row">
            <div className="metric">
              <strong>10+</strong>
              <br />
              Vùng nguyên liệu
            </div>
            <div className="metric">
              <strong>B2B</strong>
              <br />
              Quote-first
            </div>
            <div className="metric">
              <strong>AI</strong>
              <br />
              Sales ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}