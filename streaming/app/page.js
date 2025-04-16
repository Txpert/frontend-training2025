import { Suspense } from "react";
import SlowDataComponent from "@/components/SlowDataComponent";

export default async function HomePage() {

  
  
  return (
    <div>
      <h1>Willkommen zum Streaming-Beispiel!</h1>
      <p>Dieser Teil der Seite wird sofort angezeigt.</p>

      <br></br>
      <br></br>
      <br></br>

    <Suspense fallback={<p>Loading Data.</p>}>
    <SlowDataComponent />
    </Suspense>

    <br></br>
    <br></br>
    
    <p>Dieser Text erscheint auch sofort, da er nicht auf dei langsame Komponente warten muss.</p>
    </div>

  )
}