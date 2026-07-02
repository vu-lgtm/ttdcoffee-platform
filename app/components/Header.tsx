export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a className="logo" href="/">TTD Coffee</a>
        <nav className="menu">
          <a href="/about">Giới thiệu</a>
          <a href="/products">Sản phẩm</a>
          <a href="/services">Dịch vụ</a>
          <a href="/export">Xuất khẩu</a>
          <a href="/market">Thị trường</a>
          <a href="/blog">Tin tức</a>
        </nav>
        <div className="actions">
          <span className="lang">VI | EN</span>
          <a className="btn" href="/quote">Nhận báo giá</a>
        </div>
      </div>
    </header>
  );
}
