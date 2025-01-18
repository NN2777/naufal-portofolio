import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";


const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto_mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const segoeUIFont = localFont({
  src: "../../fonts/SegoeUI.ttf",
  variable : "--font-segoe_ui",
});

const segoeUIBoldFont = localFont({
  src: "../../fonts/SegoeUIBold.ttf",
  variable : "--font-segoe_ui_bold",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={`${poppinsFont.variable} ${robotoMonoFont.variable} ${segoeUIFont.variable} ${segoeUIBoldFont.variable} max-w-screen `}>
          {children}
      </body>
    </html>
  );
}
