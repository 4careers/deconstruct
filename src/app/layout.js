import "./globals.css";
import Shortcuts from '../components/Shortcuts';

export const metadata = {
  title: "Deconstruct | A Modern Philosophy Blog",
  description: "Atheism, Critical Thinking, Secularism, Humanism, Minimalism, Materialism, and Philosophy.",
  verification: {
    google: "s5VZZzQILLJ13Cfkbycr4pW4_MnqFBTZQwI3k8G_sc8",
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
