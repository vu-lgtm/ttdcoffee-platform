"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
};

export default function QuoteFormPro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!result.success) {
      alert("❌ Gửi thất bại");
      console.error(result);
      return;
    }

    alert("✅ Đã gửi báo giá thành công!");
    reset();
  };

  return (
    <section className="section">
      <div className="container">
        <div className="quote-box">
          <p className="eyebrow" style={{ color: "#C9A227" }}>
            AI Quote
          </p>

          <h2>Gửi yêu cầu báo giá</h2>

          <p>
            Điền thông tin để TTD Coffee tư vấn sản phẩm, số lượng, đóng gói,
            OEM hoặc xuất khẩu.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input placeholder="Họ và tên" {...register("name", { required: true })} />

            <input placeholder="Công ty" {...register("company")} />

            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />

            <input placeholder="WhatsApp / Phone" {...register("phone")} />

            <input placeholder="Quốc gia" {...register("country")} />

            <input placeholder="Sản phẩm" {...register("product")} />

            <input placeholder="Số lượng" {...register("quantity")} />

            <textarea
              placeholder="Mô tả yêu cầu"
              rows={5}
              {...register("message")}
            />

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Gửi báo giá"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}