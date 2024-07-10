import '@/app/globals.css'
import React from 'react';
import { Providers } from '@/components/Providers';
import { ViewTransitions } from 'next-view-transitions'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <InitColorSchemeScript />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
