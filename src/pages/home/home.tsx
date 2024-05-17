import { HeaderRound } from "@/components/header-round/header-round";
import { RoundRow } from "@/components/round-row/round-row";
import styles from "./home.module.scss";
import { Button } from "@/components/button/button";
import Flag from "@/assets/images/eng.png";
import Arrow from "@/assets/icons/arrow-right-circle.svg";
import { useGames } from "@/hooks/use-games";
import { Fragment } from "react/jsx-runtime";
import ArrowRight from "@/assets/icons/chevron-right.svg";
import ArrowLeft from "@/assets/icons/chevron-left.svg";
import { GameParams } from "@/services/games/games.service.types";
import { useState } from "react";
import { Spinner } from "@/components/spinner/spinner";

export function Home() {
  const ON_PAGE = 5;

  const [params, setParams] = useState<GameParams>({
    onPage: ON_PAGE,
    page: 1,
    orderBy: "round",
    orderDirection: "desc",
  });

  const { games, isLoading } = useGames(params);

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.buttonTopContainer}>
          <Button
            variant="dark"
            onClick={() => {
              setParams((prev) => ({
                ...prev,
                page: 1,
                onPage: games?.total || ON_PAGE,
              }));
            }}
          >
            Wszystkie
          </Button>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.leaugeContainer}>
            <img className={styles.flag} src={Flag} alt="flag" />
            <p className={styles.leaugeName}>Anglia: Premier League</p>
          </div>
          <Button href="/table" icon={Arrow}>
            Tabela
          </Button>
        </div>
        <div className={styles.resultsContainer}>
          {isLoading && <Spinner className={styles.spinner} />}
          {games?.data?.map(
            (
              {
                round,
                date,
                home_score,
                away_score,
                away_team_object,
                home_team_object,
                id,
              },
              index
            ) => (
              <Fragment key={id}>
                {(index === 0 || round !== games.data[index - 1].round) && (
                  <HeaderRound roundNumber={round} />
                )}
                <RoundRow
                  date={date}
                  homeTeam={{
                    image: home_team_object.image,
                    score: home_score,
                    name: home_team_object.name,
                  }}
                  awayTeam={{
                    image: away_team_object.image,
                    score: away_score,
                    name: away_team_object.name,
                  }}
                />
              </Fragment>
            )
          )}
        </div>
      </div>
      <div className={styles.buttonBottomContainer}>
        <Button
          iconPosition="left"
          className={styles.button}
          icon={ArrowLeft}
          withoutBorder
          onClick={() =>
            setParams((prev) => ({ ...prev, page: prev.page - 1 }))
          }
          disabled={params.page === 1}
        >
          Wstecz
        </Button>
        <Button
          iconPosition="right"
          className={styles.button}
          icon={ArrowRight}
          withoutBorder
          onClick={() =>
            setParams((prev) => ({
              ...prev,
              page: prev.page + 1,
            }))
          }
          disabled={params.page === games?.pages}
        >
          Dalej
        </Button>
      </div>
    </div>
  );
}
