import {
  AdsBanner,
  Announcement,
  GameDiscounts,
  LatestBlogs,
  MainCarousel,
  TabsGameList,
  TopGames,
} from "@/src/components/modules";
import { Container } from "@/src/components/elements";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <Container className="flex flex-col gap-y-[80px] mb-20">
        <TopGames />
        <Announcement />
        <TabsGameList />
        <GameDiscounts />
        <AdsBanner />
        <LatestBlogs />
      </Container>
    </>
  );
}
