export function QuoteForm() {
  return (
    <div className="quote-box">
      <p className="eyebrow" style={{ color: "#C9A227" }}>Request a Quote</p>
      <h2>Gửi yêu cầu báo giá</h2>
      <p>Form này sẽ kết nối Supabase, HubSpot, Gmail và AI Sales ở Sprint sau.</p>
      <form className="form">
        <input placeholder="Họ và tên" />
        <input placeholder="Email" />
        <input placeholder="Số điện thoại / WhatsApp / Zalo" />
        <select defaultValue=""><option value="" disabled>Nhóm khách hàng</option><option>Khách lẻ</option><option>Quán cà phê</option><option>Đại lý</option><option>Nhà rang xay</option><option>Nhà nhập khẩu</option></select>
        <input placeholder="Sản phẩm quan tâm" />
        <input placeholder="Số lượng dự kiến" />
        <textarea placeholder="Nhu cầu chi tiết: loại cà phê, đóng gói, FOB/CIF, thị trường..." />
        <button className="btn" type="button">Gửi yêu cầu</button>
      </form>
    </div>
  );
}
