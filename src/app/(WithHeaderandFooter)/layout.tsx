
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";



export default function RootLayout({children,}: { children: React.ReactNode;}) {
//   const currentRoute= usePathname()
  return (
   <>
    <Header />
  {children}
    <Footer />
   </>
  );
}