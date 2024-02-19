import "./globals.css";

export const metadata = {
  title: "Rahkley Agency",
  description: "Online Marketing",
  metadataBase: "https://rahkley-agency.vercel.app/",
  openGraph: {
    title: "Rahkley Agency",
    description: "Online Marketing",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
