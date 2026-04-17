import Banner from "@/components/homepage/Banner";
import Counters from "@/components/homepage/Counters";
import YourFriends from "@/components/homepage/YourFriends";


export default async function Home() {
  const res = await fetch("http://localhost:3000/friends.json", {
        cache: "no-store",
    });

    const friends = await res.json();
  return (
   <div className="bg-[#F8FAFC]">
    <Banner/>

   <Counters/>

   <YourFriends friends={friends}/>

   </div>
  );
}
