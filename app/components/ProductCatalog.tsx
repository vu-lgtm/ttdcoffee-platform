"use client";

import { useMemo, useState } from "react";
import { products } from "../data/content";

const groups = [
  "Tất cả",
  "Green Coffee",
  "Roasted",
  "Retail",
  "Convenience",
  "Equipment",
];

export function ProductCatalog() {
  const [activeGroup, setActiveGroup] = useState("Tất cả");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchGroup = activeGroup === "Tất cả" || p.tag === activeGroup;
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()) ||
        p.tag.toLowerCase().includes(search.toLowerCase());

      return matchGroup && matchSearch;
    });
  }, [activeGroup, search]);

  return (
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

        <input
          className="search-input"
          placeholder="Tìm sản phẩm: Robusta, Arabica, máy pha..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="actions" style={{ margin: "20px 0 26px", flexWrap: "wrap" }}>
          {groups.map((group) => (
            <button
              className={activeGroup === group ? "pill active" : "pill"}
              key={group}
              onClick={() => setActiveGroup(group)}
              type="button"
            >
              {group}
            </button>
          ))}
        </div>

        <div className="grid-4">
          {filteredProducts.map((p) => (
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
  );
}