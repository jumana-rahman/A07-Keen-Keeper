"use client"
import Banner from "@/components/homepage/Banner";
import Counters from "@/components/homepage/Counters";
import YourFriends from "@/components/homepage/YourFriends";
import { useEffect, useState } from "react";

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      });
  }, []);

  return (
    <div className="bg-[#F8FAFC]">
      <Banner />
      <Counters />
      <YourFriends friends={friends} />
    </div>
  );
}