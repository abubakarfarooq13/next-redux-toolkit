import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
