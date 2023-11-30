<<<<<<< HEAD
=======
import '@/app/ui/global.css'
import {interFont} from '@/app/ui/fonts'

>>>>>>> master
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
=======
      <body className={`${interFont.className} antialised`}>{children}</body>
>>>>>>> master
    </html>
  );
}
