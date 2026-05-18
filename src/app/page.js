import Banner from "@/components/Banner";
import ExtraSection1 from "@/components/ExtraSection1";
import ExtraSection2 from "@/components/ExtraSection2";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <ExtraSection1 />
      <ExtraSection2 />
    </div>
  );
}
