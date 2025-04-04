"use client";

import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div> 

      <Hero />

    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-200">
       <div  className="container mx-auto px-4">

         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Unsere Top-Features
         </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

       <FeatureCard
      title={"Erste Karte"}
      description={"Vergiss nie T beim Text"}
      />

      <FeatureCard
      title={"Erste Karte"}
      description={"Vergiss nie T beim Text"}
      
      
      />

      <FeatureCard
      title={"Erste Karte"}
      description={"Vergiss nie T beim Text"}
      
      
      />  


      </div>
     </div>
    </section>
    
    <Footer />
    </div>
 
  );
}
