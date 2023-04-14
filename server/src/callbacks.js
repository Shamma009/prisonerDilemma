import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();


const averageRounds = 2;
const deviation = 1;
const numberOfRounds = generateRandomRounds(averageRounds, deviation);

Empirica.onGameStart(({ game }) => {
  for (let i = 0; i < numberOfRounds; i++) {
    const round = game.addRound({
      name: `Prisoner Dilemma - Round ${i + 1}`,
      task: "prisonerdilemma",
    });
    round.addStage({ name: "Play", duration: 300 });
    round.addStage({ name: "Result", duration: 10 });
  }
});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {
if (stage.round.get("task") === "prisonerdilemma") {
    calculatePrisonerDilemmaScore(stage);
  }
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});

const jellyBeansCount = 634;



function calculatePrisonerDilemmaScore(stage) {
  if (stage.get("name") !== "Play") {
    return;
  }

  const players = stage.currentGame.players;
  if (players.length !== 2) {
    return;
  }

  const playerA = players[0];
  const playerB = players[1];

  const decisionA = playerA.round.get("decision");
  const decisionB = playerB.round.get("decision");

  let scoreA = 0;
  let scoreB = 0;

  if (decisionA === "cooperate" && decisionB === "cooperate") {
    scoreA = 3;
    scoreB = 3;
  } else if (decisionA === "cooperate" && decisionB === "betray") {
    scoreA = 0;
    scoreB = 5;
  } else if (decisionA === "betray" && decisionB === "cooperate") {
    scoreA = 5;
    scoreB = 0;
  } else if (decisionA === "betray" && decisionB === "betray") {
    scoreA = 1;
    scoreB = 1;
  }

  playerA.round.set("score", scoreA);
  playerB.round.set("score", scoreB);

  const totalScoreA = playerA.get("score") || 0;
  const totalScoreB = playerB.get("score") || 0;

  playerA.set("score", totalScoreA + scoreA);
  playerB.set("score", totalScoreB + scoreB);
}

function generateRandomRounds(average, deviation) {
  const minRounds = average - deviation;
  const maxRounds = average + deviation;
  return Math.floor(Math.random() * (maxRounds - minRounds + 1)) + minRounds;
}
