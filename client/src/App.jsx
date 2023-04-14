import { EmpiricaClassic } from "@empirica/core/player/classic";
import { EmpiricaContext } from "@empirica/core/player/classic/react";
import { EmpiricaMenu, EmpiricaParticipant } from "@empirica/core/player/react";
import React from "react";
import "virtual:windi.css";
import { Game } from "./Game";
import { ExitSurvey } from "./intro-exit/ExitSurvey";
import { Introduction } from "./intro-exit/Introduction";
import { Consent } from "@empirica/core/player/react";



export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const playerKey = urlParams.get("participantKey") || "";

  const { protocol, host } = window.location;
  const url = `${protocol}//${host}/query`;

  function introSteps({ game, player }) {
    return [Introduction];
  }

  function exitSteps({ game, player }) {
    return [ExitSurvey];
  }

  function MyConsent({ onConsent }) {
    return (
      <Consent
        title="Do you consent to participate in this experiment?"
        text="Thank you for deciding to participate in this experiment. his is part of a research project which belongs to the British University in Dubai.
        Your decision to complete this experiment, where your identity will not be revealed to us, is voluntary. 
        There are no known or anticipated risks to participating in this experiment. The only information we will have, in addition to your responses, is the timestamps of your interactions with our site. The results of our research may be presented at scientific meetings or published in scientific journals. We seek your participation in furthering our understanding of human behavior in games." 
        buttonText=" Clicking on the AGREE button indicates that you are at least 18 years of age, and agree to participate voluntary"
        onConsent={onConsent}
      />
    );
    }
    return (
      <EmpiricaParticipant url={url} ns={playerKey} modeFunc={EmpiricaClassic}>
        <div className="h-screen relative">
          <EmpiricaMenu />
          <div className="h-full overflow-auto">
            <EmpiricaContext consent={MyConsent} introSteps={introSteps} 
              exitSteps={exitSteps}>
              <Game />
            </EmpiricaContext>
          </div>
        </div>
      </EmpiricaParticipant>
    );
  
  }