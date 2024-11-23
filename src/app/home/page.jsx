"use client"
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";



const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>You're logged in!</p>
    </div>
  );
};

export default Home;
