import type { Metadata } from "next";
import "../styles/style.css";
import Header from "@/components/header";
import NavbarDetails from "@/components/navbar-details";
import ShareProvider from "@/context";

export const metadata: Metadata = {
  title: "LuxDin || Luxdin-Restaurant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=zodiak@400&=swdisplayap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body>
        <ShareProvider>
          <Header Color={'black'} />
          <NavbarDetails />
          {children}
        </ShareProvider>
      </body>
    </html>
  );
}
