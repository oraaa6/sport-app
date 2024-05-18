import { RoundRow } from "@/components/round-row/round-row";
import styles from "./home.module.scss";
import { Button } from "@/components/button/button";
import { useGames } from "@/hooks/use-games";
import { Fragment } from "react/jsx-runtime";
import ArrowRight from "@/assets/icons/chevron-right.svg?react";
import ArrowLeft from "@/assets/icons/chevron-left.svg?react";
import { GameParams } from "@/services/games/games.service.types";
import { useState } from "react";
import { Spinner } from "@/components/spinner/spinner";
import { LeagueHeader } from "@/components/leauge-header/leauge-header";

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
        <LeagueHeader linkDescription="Tabela" linkHref="/tabela" />
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
                  <div className={styles.headerContainer}>
                    <p className={styles.round}>{`RUNDA ${round}`}</p>
                  </div>
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
          Icon={() => <ArrowLeft stroke={styles.iconColor} />}
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
          Icon={() => <ArrowRight stroke={styles.iconColor} />}
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
