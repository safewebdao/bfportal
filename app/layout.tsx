import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GFPortal - Web3 GameFi Gateway on Sonic Chain',
  description: 'GFPortal is an innovative Web3 platform that combines high-speed WiFi access, cryptocurrency payments, and a comprehensive GameFi ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <script defer data-domain="getgrass.space" src="https://app.pageview.app/js/script.js"></script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={inter.className}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
