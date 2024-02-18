import "./globals.css";


export const metadata = {
  title: "Rahkley Agency",
  description: "Online Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
