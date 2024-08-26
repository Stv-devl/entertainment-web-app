import '../global.css';
import React from 'react';
import Banner from '../component/banner/Banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>entertainment-web-app</title>
        <meta name="description" content="video app" />
      </head>
      <body className="h-screen w-full flex flex-col bg-[#10141E]  text-white font-outfit text-[15px] font-light  ">
        <div className="sm:h-[2%]"></div>
        <Banner />
        <div className="xl:hidden h-[1.6rem]"></div>
        <main className="overflow-y-auto  ">{children}</main>
      </body>
    </html>
  );
}
