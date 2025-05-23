import ChallengeCarousel from "../components/ChallengeCarousel";
import NavBar from "../components/Navbar";

export default function DinoCodePage() {
  return (
    <>
      <NavBar />
      <main
        className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#f5f5f5]"
        style={{ paddingTop: "82px" }}
      >
        <ChallengeCarousel />
      </main>
    </>
  );
}
