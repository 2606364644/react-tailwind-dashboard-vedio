import Image from "next/image";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Dashboard } from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
