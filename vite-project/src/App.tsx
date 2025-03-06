import Hi from "./components/Hi"
import Button from "./components/Button"
import Kullanicilar from "./components/Kullanicilar"
import { useState } from "react";

function App() {
  const [metn, setMetn ] = useState("Tikla");

  const Tiklandi = () => {
    setMetn((prev)=>(prev === "Tikla"?  "Tiklandi" : "Tikla"))  
  }
  return(
    <div>
      <Hi isim="Senan" yas={20}></Hi>
      <Button text={metn} onClick={Tiklandi}></Button>
      {metn === "Tiklandi" && <Kullanicilar/>}
    </div>
  );
}
export default App;


// import Hi from "./components/Hi";
// import Button from "./components/Button";
// import Kullanicilar from "./components/Kullanicilar";
// import { useState } from "react";

// function App() {
//   const [metn, setMetn] = useState("Tikla");

//   const Tiklandi = () => {
//     setMetn((prev) => (prev === "Tikla" ? "Tiklandi" : "Tikla"));
//  };

//   let Kullaniciif = null;
//     if(metn === "Tiklandi"){
//        Kullaniciif = <Kullanicilar />;}
   
//   return (
//     <div>
//       <Hi isim="Senan" yas={20} />
//       <Button text={metn} onClick={Tiklandi} />
//       {Kullaniciif}
//     </div>
//   );
// }

// export default App;
