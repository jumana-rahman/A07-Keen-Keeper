import Banner from "@/components/homepage/Banner";
import Counters from "@/components/homepage/Counters";
import YourFriends from "@/components/homepage/YourFriends";


export default function Home() {
  return (
   <div className="bg-[#F8FAFC]">
    <Banner/>

   <Counters/>

   <YourFriends/>
   </div>
  );
}
