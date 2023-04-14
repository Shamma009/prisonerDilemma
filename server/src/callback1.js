import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const round = game.addRound({
    name: "Round 1 - Jelly Beans",
    task: "jellybeans",
  });
  round.addStage({ name: "Answer", duration: 300 });
  round.addStage({ name: "Result", duration: 120 });

  const round2 = game.addRound({
    name: "Prisoner Dilemma",
    task: "prisonerdilemma",
  });
  round2.addStage({ name: "Play", duration: 300 });
  round2.addStage({ name: "Result", duration: 120 });
});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

/* Empirica.onStageEnded(({ stage }) => {
  if (stage.round.get("task") === "jellybeans") {
    calculateJellyBeansScore(stage);
  } else if (stage.round.get("task") === "prisonerdilemma") {
    calculatePrisonerDilemmaScore(stage);
  }
}); */


function checkPlayersReadyToAdvance(stage) {
  const players = stage.currentGame.players;
  return players.every((player) => player.stage.get("submit") === true);
}


Empirica.onStageEnded(({ stage }) => {
  if (stage.round.get("task") === "jellybeans") {
    calculateJellyBeansScore(stage);
  } else if (stage.round.get("task") === "prisonerdilemma") {
    calculatePrisonerDilemmaScore(stage);
  }
  if (checkPlayersReadyToAdvance(stage)) {
    stage.currentGame.advanceCurrentStage(); // Advance to the next stage when all players are ready.
  }
});

Empirica.onSubmit(({ stage, player }) => {
  player.stage.set("submit", true);

  if (checkPlayersReadyToAdvance(stage)) {
    stage.currentGame.advanceCurrentStage(); // Advance to the next stage when all players are ready.
  }
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});

const jellyBeansCount = 634;

function calculateJellyBeansScore(stage) {
  if (stage.get("name") !== "Answer") {
    return;
  }

  for (const player of stage.currentGame.players) {
    let roundScore = 0;

    const playerGuess = player.round.get("guess");

    if (playerGuess) {
      const deviation = Math.abs(playerGuess - jellyBeansCount);
      const score = Math.round((1 - deviation / jellyBeansCount) * 10);
      roundScore = Math.max(0, score);
    }

    player.round.set("score", roundScore);

    const totalScore = player.get("score") || 0;
    player.set("score", totalScore + roundScore);
  }
}

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

  const totalScoreA = playerA.get("score") || 0
  const totalScoreB = playerB.get("score") || 0;

  playerA.set("score", totalScoreA + scoreA);
  playerB.set("score", totalScoreB + scoreB);
}