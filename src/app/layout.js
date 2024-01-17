import { Lato, Open_Sans } from 'next/font/google'
import '@/styles/styles.sass'
import Navbar from '@/components/navbar'
import Header from '@/components/header'


const lato = Lato({
   subsets: ['latin'],
   weight: ['400', '700', '900'],
   variable: '--font-lato' 
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans' 
})

export const metadata = {
  title: 'Heart & Hand',
  description: 'Homeschool learning',
  
};

const RootLayout = ({ children }) => (
  
    <html lang="en">
      <body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
);

export default RootLayout;
