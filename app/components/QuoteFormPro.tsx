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
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Yêu cầu báo giá đã được ghi nhận!");
    reset();
  };

  return (
    <section className="section">
      <div className="container">

        <div className="section-head">
          <div>
            <p className="eyebrow">
              AI Quote
            </p>

            <h2>
              Yêu cầu báo giá
            </h2>

            <p>
              Điền thông tin để TTD Coffee liên hệ trong thời gian sớm nhất.
            </p>

          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card"
          style={{
            display:"grid",
            gap:20
          }}
        >

          <input
            placeholder="Họ và tên"
            {...register("name")}
          />

          <input
            placeholder="Công ty"
            {...register("company")}
          />

          <input
            placeholder="Email"
            {...register("email")}
          />

          <input
            placeholder="WhatsApp / Phone"
            {...register("phone")}
          />

          <input
            placeholder="Quốc gia"
            {...register("country")}
          />

          <input
            placeholder="Sản phẩm"
            {...register("product")}
          />

          <input
            placeholder="Số lượng"
            {...register("quantity")}
          />

          <textarea
            rows={5}
            placeholder="Mô tả yêu cầu"
            {...register("message")}
          />

          <button className="btn">
            Gửi báo giá
          </button>

        </form>

      </div>
    </section>
  );
}