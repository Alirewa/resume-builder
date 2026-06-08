import type { Metadata } from 'next'
import './globals.css'
import DarkModeSync from '@/components/ui/DarkModeSync'

export const metadata: Metadata = {
  title: 'Resume Builder — FA / EN / DE',
  description: 'Build professional resumes in Persian, English, and German with PDF export.',
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Serve Vazirmatn locally so it works offline and renders correctly in html2canvas */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Vazirmatn';
            src: url('${basePath}/fonts/Vazirmatn-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Vazirmatn';
            src: url('${basePath}/fonts/Vazirmatn-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Vazirmatn';
            src: url('${basePath}/fonts/Vazirmatn-Medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Vazirmatn';
            src: url('${basePath}/fonts/Vazirmatn-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        ` }} />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300" suppressHydrationWarning>
        <DarkModeSync />
        {children}
      </body>
    </html>
  )
}
