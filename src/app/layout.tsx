import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Pointer } from "@/components/ui/pointer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Karan Yadav | Portfolio",
  description:
    "Karan Yadav is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  keywords:
    "Karan Yadav, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Karan Yadav" }],
  openGraph: {
    title: "karan",
    description: "",
    url: "https://karanyadav.vercel.app",
    siteName: "karan",
    images: [
      {
        url: "https://res.cloudinary.com/dl27j0qcm/image/upload/v1739721063/gradii-3840x2160_3_jqk2nt.png",
        width: 400,
        height: 200,
        alt: "karan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "karan",
    creator: "@karantwt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Theme loader script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      {/* Body must stay outside Provider to allow class to be set early */}
      <body className="bg-white dark:bg-black">
        <DarkModeProvider>
          <Toaster position="bottom-right" />
          <Theme className="dark:!bg-black">
            <Pointer />
            {children}
            <Analytics />
            <Footer />
          </Theme>
        </DarkModeProvider>
      </body>
    </html>
  );
}
