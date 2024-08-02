'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Copyright from './components/Copyright'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { ViewTransitions } from 'next-view-transitions'
import TitleChangeComponent from "./utils/meta";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <ViewTransitions>
      <html lang="en">
      <TitleChangeComponent />
        <body>
          <div className="items-start bg-neutral-900 flex flex-col">
            <div className="items-center bg-neutral-900 self-stretch flex w-full flex-col max-md:max-w-full">
              <div className="bg-[radial-gradient(70.71%_50.71%_at_50%_50%,rgba(255,0,0,0.59)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex w-full flex-col pt-6 pb-11 px-5 max-md:max-w-full">
                <Header />
                {children}
                {pathname !== '/contact' && <ContactForm />}
                <Copyright />
              </div>
            </div>
          </div>
          <Script id="custom-script" strategy="afterInteractive">
            {`
            <!-- Start of Async Drift Code -->
              "use strict";

              !function() {
                var t = window.driftt = window.drift = window.driftt || [];
                if (!t.init) {
                  if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                  t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                  t.factory = function(e) {
                    return function() {
                      var n = Array.prototype.slice.call(arguments);
                      return n.unshift(e), t.push(n), t;
                    };
                  }, t.methods.forEach(function(e) {
                    t[e] = t.factory(e);
                  }), t.load = function(t) {
                    var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i);
                  };
                }
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('vnrkdgzim6ut');
              <!-- End of Async Drift Code -->
          `}
          </Script>
        </body>
      </html>
    </ViewTransitions>
  )
}
