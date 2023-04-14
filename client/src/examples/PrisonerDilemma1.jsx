import {
    usePlayer,
    usePlayers,
    useStage,
  } from "@empirica/core/player/classic/react";
  import React from "react";
  import { Avatar } from "../components/Avatar";
  import { Button } from "../components/Button";
  
  export function PrisonerDilemma() {
    const player = usePlayer();
    const players = usePlayers();
    const stage = useStage();
  
    function handleCooperate() {
      player.round.set("decision", "cooperate");
      player.stage.set("submit", true);
    }
  
    function handleBetray() {
      player.round.set("decision", "betray");
      player.stage.set("submit", true);
    }
  
    const isResultStage = stage.get("name") === "Result";
  
    return (
      <div className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-10">
        <p>
          {isResultStage
            ? "Result"
            : "Choose whether to cooperate or betray your partner."}
        </p>
  
        {!isResultStage ? (
          <div className="flex space-x-4">
            <Button handleClick={handleCooperate} primary>
              Cooperate
            </Button>
            <Button handleClick={handleBetray} primary>
              Betray
            </Button>
          </div>
        ) : (
          <div>
            {players.map((p) => PlayerScore(p, isResultStage))}
          </div>
        )}
      </div>
    );
  }
  
  function PlayerScore(player, isResultStage) {
    return (
      <div key={player.id} className="py-4">
        <div className="flex items-center space-x-6">
          <div className="h-12 w-12 shrink-0">
            <Avatar player={player} />
          </div>
          <div>
            {player.round.get("decision")}
          </div>
          {isResultStage ? (
            <div className="flex flex-col items-center space-y-0.5">
              <div className="text-2xl font-semibold leading-none font-mono">
                {player.round.get("score") || 0}
              </div>
              <h1 className="text-xs font-semibold uppercase tracking-wider leading-none text-gray-400">
                Score
              </h1>
            </div>
          ) : null}
        </div>
      </div>
    );
  }