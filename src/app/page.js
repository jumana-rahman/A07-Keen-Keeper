import Banner from "@/components/homepage/Banner";
import Counters from "@/components/homepage/Counters";
import YourFriends from "@/components/homepage/YourFriends";
import FriendsLoader from "@/components/loaders/FriendsLoader";
import { Suspense } from "react";


export default async function Home() {
  const res = await fetch("http://localhost:3000/friends.json", {
        cache: "no-store",
    });

    const friends = await res.json();
  return (
   <div className="bg-[#F8FAFC]">
    <Banner/>

   <Counters/>

   <Suspense fallback={<FriendsLoader/>}> <YourFriends friends={friends}/> </Suspense>

   </div>
  );
}
