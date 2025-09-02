// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafu Coffee",
  description: "Coffee site dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
