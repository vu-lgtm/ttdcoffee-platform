import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTD Coffee | Giải pháp cà phê toàn diện từ Việt Nam",
  description: "TTD Coffee cung cấp cà phê nhân xanh, cà phê rang xay, OEM, thiết bị và giải pháp xuất khẩu cà phê Việt Nam.",
  alternates: {
    canonical: "https://ttdcoffee.com",
    languages: { vi: "https://ttdcoffee.com", en: "https://ttdcoffee.com/en" }
  },
  openGraph: {
    title: "TTD Coffee",
    description: "From Vietnam to the World",
    url: "https://ttdcoffee.com",
    siteName: "TTD Coffee",
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
