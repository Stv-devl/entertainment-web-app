import Banner from '../component/banner/Banner';
import ApiProvider from '../context/ManageApi';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ApiProvider>
          <Banner />
          {children}
        </ApiProvider>
      </body>
    </html>
  );
}
