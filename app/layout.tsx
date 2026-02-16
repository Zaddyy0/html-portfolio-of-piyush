import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Piyush Bhandari - Portfolio",
  description: "Portfolio of Piyush Bhandari - Full Stack Developer, Video Editor, and Tutor",
  keywords: ["Piyush Bhandari", "Portfolio", "Web Developer", "Full Stack", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
