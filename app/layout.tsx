import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darshan S | Full Stack Developer & CSE Student",
  description: "Portfolio of Darshan S — Computer Science Engineering student, Full Stack Developer and AI & ML Enthusiast. Explore projects, skills, and more.",
  keywords: ["Darshan S", "portfolio", "full stack developer", "CSE student", "AI ML", "React", "Next.js"],
  authors: [{ name: "Darshan S" }],
  openGraph: {
    title: "Darshan S | Portfolio",
    description: "Computer Science Engineering Student | Full Stack Developer | AI & ML Enthusiast",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
