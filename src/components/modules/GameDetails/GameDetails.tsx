"use client";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameScreenshotData } from "@/src/types/GameScreenshotData";
import useAxios from "@/src/hooks/useAxios";

import { SwiperCarousel } from "@/src/components/modules";

interface Props {
  id: number;
}

const GameDetails: React.FC<Props> = (props) => {
  const { id } = props;
  const [screenshotsData, error, loading] = useAxios<GameScreenshotData>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: `/${id}/screenshots`,
  });

  if (screenshotsData) {
    return (
      <>
        <SwiperCarousel data={screenshotsData.results} />
        <div>Details with tabs</div>
        <div>You will be interested</div>
      </>
    );
  }

  return (
    <>
      <div>
        <div>Loading</div>
      </div>
    </>
  );
};

export default GameDetails;
