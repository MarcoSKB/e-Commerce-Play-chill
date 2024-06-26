import { AdsBanner, TabsGameList } from "@/src/components/modules";
import { Container } from "@/src/components/elements";
import {
  MainCarousel,
  TopGames,
  Announcement,
  GameDiscounts,
} from "./components";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <Container className="flex flex-col gap-y-[35px] md:gap-y-[80px] pt-3 md:pt-[80px] mb-20">
        <TopGames />
        <Announcement />
        <TabsGameList />
        <GameDiscounts />
        <AdsBanner />
      </Container>
    </>
  );
}
