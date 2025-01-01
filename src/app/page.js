import BackGround from "../component/BackGround";
import NavBar from "@/component/NavBar";


export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="">
        <NavBar />
      </div>
      <BackGround/>
    </div>
  );
}
  