import React from 'react';
import Header from './Header';
import { prisma } from '../db';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const footer=(
      <footer>
        <label className=' text-blue-700 font-serif font-bold self-end'>this is a footer</label>
      </footer>
    );
  
    const header =(
      <Header  />
    )
    return (
      <html lang="en">
        <body>
         {header}
          {children}
          {footer}
        </body>
      
      </html>
    );
  }