import Image from "next/image";
import SideBar from "@/app/SideBar";
import Essential from "@/app/Essential";
import Footer from "@/app/Footer"
import BetterIngredients from "@/app/BetterIngredients"

export default function Home() {
  return (
    <div>
      {" "}
      <SideBar></SideBar>
      <Essential></Essential>
      <BetterIngredients></BetterIngredients>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
    
  );
}
