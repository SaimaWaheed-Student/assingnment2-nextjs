import Header from "@/components/header/Header";
import Link from "next/link";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div className="bg-red-600">
       <Header abc={22} hello="hello world " boolean={true}></Header>

   <h1 className="bg-color to-blue-700">this is Home page</h1>
   <Hero />
   <Footer />
   </div>
  );
}
