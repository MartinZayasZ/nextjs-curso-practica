import "../styles/globals.css";
import { font } from './font.js'
import { Navigation } from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>NextJS Page</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
