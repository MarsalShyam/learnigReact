import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Body from "./components/Body";
import Card from "./components/Card";
import "./App.css";
function App() {

  return (
    <>
      <Navbar/>
    
      <main>
        this is a sites main content
      </main>

      <div className="cards" >
        <Card title="Computer Network" description="It show the data transmission or communication across the networks" img="https://media.istockphoto.com/id/1488521147/photo/global-network-usa-united-states-of-america-north-america-global-business-flight-routes.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkq0qStfGt-_otOwJgSz6t3Qnhy5r1yPuSDbN5KlgRY="/>

        <Card title="Computer Science" description="it is branch" img="https://plus.unsplash.com/premium_photo-1687572807160-b5262826e4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBzZWNpZW5jZXxlbnwwfHwwfHx8MA%3D%3D"/>

        <Card title="Digital Marketing" description="marketing and advertising produce using digital platform" img="https://media.istockphoto.com/id/1143073025/photo/digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=eG7uf3tLyBm2lKujNtl9JuQiRmKqbmgqcSBRgzVgws8="/>

        <Card title="Cryptography $ Cyber Security" description="It helps to data encryption and decryption" img="https://media.istockphoto.com/id/913017342/photo/blue-circuitry-digital-lock-on-binary-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=JA8qeluJswInQj-HlVwtRq9Cb0JLfxg8ruiSDcMqLo0="/>
        <Card title="Compiler Design" desscription="Copiler Design help to design the compiler" img="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGlsZXIlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
