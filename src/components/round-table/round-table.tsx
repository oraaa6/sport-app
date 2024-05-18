import {
  GameParams,
  GamesResponse,
} from "@/services/games/games.service.types";
import styles from "./round-table.module.scss";
import { Button } from "../button/button";
import { LeagueHeader } from "../leauge-header/leauge-header";
import { Spinner } from "../spinner/spinner";
import { Fragment } from "react/jsx-runtime";
import { RoundRow } from "../round-row/round-row";
import ArrowRight from "@/assets/icons/chevron-right.svg?react";
import ArrowLeft from "@/assets/icons/chevron-left.svg?react";
import Arrow from "@/assets/icons/arrow-right-circle.svg?react";
import { ON_PAGE_DEFAULT } from "./round-table.constans";

type RoundTableProps = {
  onParamsChange: (value: GameParams) => void;
  games: GamesResponse;
  params: GameParams;
  isLoading?: boolean;
};

export function RoundTable({
  onParamsChange,
  params,
  isLoading,
  games,
}: RoundTableProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.buttonTopContainer}>
          <Button
            variant="dark"
            onClick={() => {
              onParamsChange({
                ...params,
                page: 1,
                onPage: games?.total || ON_PAGE_DEFAULT,
              });
            }}
          >
            Wszystkie rundy
          </Button>
          <Button href={"/zespoly"} Icon={Arrow}>
            Zespoły
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
                    <p className={styles.round}>
                      {`runda ${round}`.toUpperCase()}
                    </p>
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
          onClick={() => onParamsChange({ ...params, page: params.page - 1 })}
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
            onParamsChange({
              ...params,
              page: params.page + 1,
            })
          }
          disabled={params.page === games?.pages}
        >
          Dalej
        </Button>
      </div>
    </div>
  );
}
