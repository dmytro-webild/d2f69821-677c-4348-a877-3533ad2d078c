import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Kvetinárstvo CARMEN | Luxusná Floristika Bratislava',
  description: 'Objavte prémiové kvetinárstvo CARMEN v Bratislave. Ponúkame čerstvé kvety, nádherné aranžmány a exkluzívnu svadobnú floristiku s individuálnym prístupom. Kvety, ktoré vytvárajú emócie.',
  keywords: ["kvetinárstvo, Bratislava, kvety, floristika, svadobná výzdoba, kytice na mieru, flower boxy, rozvoz kvetov, prémiové kvety, luxusné aranžmány, darčeky"],
  openGraph: {
    "title": "Kvetinárstvo CARMEN | Luxusná Floristika Bratislava",
    "description": "Objavte prémiové kvetinárstvo CARMEN v Bratislave. Ponúkame čerstvé kvety, nádherné aranžmány a exkluzívnu svadobnú floristiku s individuálnym prístupom.",
    "url": "https://www.kvetinarstvocarmen.sk",
    "siteName": "Kvetinárstvo CARMEN",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/look-from-bouquet-pinks-standing-rays-daylight_8353-625.jpg",
        "alt": "Luxusné floristické aranžmány"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Kvetinárstvo CARMEN | Luxusná Floristika Bratislava",
    "description": "Objavte prémiové kvetinárstvo CARMEN v Bratislave. Ponúkame čerstvé kvety, nádherné aranžmány a exkluzívnu svadobnú floristiku s individuálnym prístupom.",
    "images": [
      "http://img.b2bpic.net/free-photo/look-from-bouquet-pinks-standing-rays-daylight_8353-625.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
