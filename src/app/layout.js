import "./globals.css";
import Shortcuts from '../components/Shortcuts';

export const metadata = {
  title: "Deconstruct | A Modern Philosophy Blog",
  description: "Atheism, Critical Thinking, Secularism, Humanism, Minimalism, Materialism, and Philosophy.",
  verification: {
    google: "ju_8BPFau20VshEp8dv6tXIq6Y6f-VDlUe0Gf_uXkPE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light-mode">
        <Shortcuts />
        <div className="bg-glow"></div>
        {children}
      </body>
    </html>
  );
}
