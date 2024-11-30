import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Tatum App',
  description: 'Tatum App Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}
