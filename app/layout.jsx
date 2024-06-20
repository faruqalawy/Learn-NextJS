import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: {
    default: "My First NextJs Project",
    template: "%s | My First NextJs Project",
  },
  description: "Website that become my first NextJs Project",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 py-4 flex flex-col min-h-screen bg-gray-100">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t text-center text-xs py-3">[footer]</footer>
      </body>
    </html>
  );
}
