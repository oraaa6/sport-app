import { HeaderRound } from "@/components/header-round/header-round";
import { RoundRow } from "@/components/round-row/round-row";
import styles from "./home.module.scss";
import { Button } from "@/components/button/button";
import Flag from "@/assets/images/eng.png";
import Arrow from "@/assets/icons/arrow-right-circle.svg";

const MOCK = [
  {
    id: 1,
    round: 13,
    date: "2027-11-20",
    home_team: "Fulham",
    away_team: "Wolves",
    home_score: 3,
    away_score: 2,
    created_at: "2023-11-28T12:07:36.000000Z",
    updated_at: "2023-11-28T12:07:36.000000Z",
    home_team_object: {
      id: 14,
      name: "Fulham",
      image:
        "https://static.flashscore.com/res/image/data/fkbYUWme-ImMEe0UF.png",
      created_at: "2023-11-28T12:07:31.000000Z",
      updated_at: "2023-11-28T12:07:31.000000Z",
    },
    away_team_object: {
      id: 12,
      name: "Wolves",
      image:
        "https://static.flashscore.com/res/image/data/OMUzjDkC-CjV6Eptm.png",
      created_at: "2023-11-28T12:07:29.000000Z",
      updated_at: "2023-11-28T12:07:29.000000Z",
    },
  },
  {
    id: 2,
    round: 13,
    date: "2026-11-20",
    home_team: "Everton",
    away_team: "Manchester Utd",
    home_score: 0,
    away_score: 3,
    created_at: "2023-11-28T12:07:36.000000Z",
    updated_at: "2023-11-28T12:07:36.000000Z",
    home_team_object: {
      id: 19,
      name: "Everton",
      image:
        "https://static.flashscore.com/res/image/data/EBfZuwme-bRmKmISE.png",
      created_at: "2023-11-28T12:07:35.000000Z",
      updated_at: "2023-11-28T12:07:35.000000Z",
    },
    away_team_object: {
      id: 6,
      name: "Manchester Utd",
      image:
        "https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png",
      created_at: "2023-11-28T12:07:25.000000Z",
      updated_at: "2023-11-28T12:07:25.000000Z",
    },
  },
  {
    id: 3,
    round: 13,
    date: "2026-11-20",
    home_team: "Tottenham",
    away_team: "Aston Villa",
    home_score: 1,
    away_score: 2,
    created_at: "2023-11-28T12:07:36.000000Z",
    updated_at: "2023-11-28T12:07:36.000000Z",
    home_team_object: {
      id: 5,
      name: "Tottenham",
      image:
        "https://static.flashscore.com/res/image/data/v3SzDxVH-SOY3p1Si.png",
      created_at: "2023-11-28T12:07:24.000000Z",
      updated_at: "2023-11-28T12:07:24.000000Z",
    },
    away_team_object: {
      id: 4,
      name: "Aston Villa",
      image:
        "https://static.flashscore.com/res/image/data/UHchCEVH-dC4qHhKr.png",
      created_at: "2023-11-28T12:07:24.000000Z",
      updated_at: "2023-11-28T12:07:24.000000Z",
    },
  },
  {
    id: 4,
    round: 13,
    date: "2025-11-20",
    home_team: "Brentford",
    away_team: "Arsenal",
    home_score: 0,
    away_score: 1,
    created_at: "2023-11-28T12:07:36.000000Z",
    updated_at: "2023-11-28T12:07:36.000000Z",
    home_team_object: {
      id: 11,
      name: "Brentford",
      image:
        "https://static.flashscore.com/res/image/data/SjSCLv86-r9Mudk7j.png",
      created_at: "2023-11-28T12:07:28.000000Z",
      updated_at: "2023-11-28T12:07:28.000000Z",
    },
    away_team_object: {
      id: 1,
      name: "Arsenal",
      image:
        "https://static.flashscore.com/res/image/data/0n1ffK6k-vcNAdtF9.png",
      created_at: "2023-11-28T12:07:22.000000Z",
      updated_at: "2023-11-28T12:07:22.000000Z",
    },
  },
  {
    id: 5,
    round: 13,
    date: "2025-11-20",
    home_team: "Burnley",
    away_team: "West Ham",
    home_score: 1,
    away_score: 2,
    created_at: "2023-11-28T12:07:36.000000Z",
    updated_at: "2023-11-28T12:07:36.000000Z",
    home_team_object: {
      id: 20,
      name: "Burnley",
      image:
        "https://static.flashscore.com/res/image/data/xO3nES96-6PhTI7J6.png",
      created_at: "2023-11-28T12:07:36.000000Z",
      updated_at: "2023-11-28T12:07:36.000000Z",
    },
    away_team_object: {
      id: 9,
      name: "West Ham",
      image:
        "https://static.flashscore.com/res/image/data/YeSfKGlC-ARW4wdCc.png",
      created_at: "2023-11-28T12:07:27.000000Z",
      updated_at: "2023-11-28T12:07:27.000000Z",
    },
  },
] as const;

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button variant="dark">Wszystkie</Button>
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
        {MOCK.map(
          (
            {
              round,
              created_at,
              home_score,
              away_score,
              away_team_object,
              home_team_object,
            },
            index
          ) => (
            <>
              {(index === 0 || round !== MOCK[index - 1].round) && (
                <HeaderRound roundNumber={round} />
              )}
              <RoundRow
                date={created_at}
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
            </>
          )
        )}
      </div>
    </div>
  );
}
