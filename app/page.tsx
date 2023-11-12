import Footer from "@/components/Footer";
import Heroes from "@/components/Heroes";
import Howtobuy from "@/components/Howtobuy";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Tags from "@/components/Tags";

export default function Home() {
  return (
    <main className="bg-primary-lightblue">
      <Navbar />
      <Heroes />
      <Tags />
      <Howtobuy />
      <Tags />
      <Roadmap />
      <Footer />
    </main>
  );
}
