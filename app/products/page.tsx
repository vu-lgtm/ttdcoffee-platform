import { SiteHeader } from "../components/SiteHeader";
import { Footer } from "../components/Footer";
import { ProductCatalog } from "../components/ProductCatalog";

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

        <ProductCatalog />
      </main>

      <Footer />
    </>
  );
}