import "../globals.css";

export const metadata = {
  title: "Furniture Homes – Modern Furniture for Modern Living",
  description: "Minimal, premium furniture for modern homes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
