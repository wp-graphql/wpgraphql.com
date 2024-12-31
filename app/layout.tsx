import "./globals.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { RootContent } from '@/components/layout/root-content';

export const metadata: Metadata = {
  title: "WPGraphQL",
  description: "The GraphQL API for WordPress",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootContent>{children}</RootContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
