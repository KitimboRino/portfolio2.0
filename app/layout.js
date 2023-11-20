import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="items-start bg-neutral-900 flex flex-col">
          <div className="items-center bg-neutral-900 self-stretch flex w-full flex-col max-md:max-w-full">
            <div className="bg-[radial-gradient(70.71%_50.71%_at_50%_50%,rgba(255,0,0,0.59)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex w-full flex-col pt-6 pb-11 px-5 max-md:max-w-full">
              <Header />
              {children}
              <Footer />
              <Copyright />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
