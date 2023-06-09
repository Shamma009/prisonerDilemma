{/* <template name="numberRadioButtons">
  {{#each options}}
  <label class="radio-inline">
    <input type="radio" value="{{value}}" {{attributes}} required>
    <b>{{caption}}</b>
  </label>
  {{/each}}
</template>

<template name="exitsurvey">
  <div class="container well">
      <form class="survey">
	  <legend>Thank you for participating in this research study!</legend>

	  <div class="row col-sm-12">
	      <p>
		  We are interested in your experience playing the game over the past several weeks.
		  Please read the study debrief below, and then answer the following questions to
		  receive an additional bonus of <strong>$5.00</strong>.
	      </p>

	      <p>The answers you provide below
	      <strong>will not affect your payment</strong> for this study in any
              way. We would simply like you to reflect honestly on your
              experience.</p>

	      <hr>

	      <h4>Study Debrief</h4>

	      <p>In this study you played a game known as <a href="https://en.wikipedia.org/wiki/Prisoner%27s_dilemma" target="_blank">Prisoner's Dilemma</a>, which is a classic two-player game often studied in economics and the social sciences. In this game, two players are each given a choice: either <b>cooperate</b> with your partner, or
              <b>defect</b>. The
              two players are not allowed to communicate. Depending on what the players choose, they each receive a specified payoff.</p>

	      <p>If the game is repeated for multiple rounds with the same partner (as in this study), it is called the <i>iterated</i> or <i>repeated</i> Prisoner's Dilemma.
              Thus every day for the past month, you played up to 20 ten-round games of iterated Prisoner's Dilemma &mdash; all in all, up to 400 games or 4,000 rounds.</p>

	      <p>Interestingly, when playing prisoner's dilemma, a purely <a
href="https://en.wikipedia.org/wiki/Rational_choice_theory"
target="_blank">economically rational</a> player should always choose to defect.
This is because for a single round, 1) if you think your partner is going to
cooperate, then you should defect, because you'll earn more than if you
cooperate, and 2) if you think your partner is going to defect, then you should
also defect, because you'll again earn more than if you cooperate. So the
<i>equilibrium</i> of this game is for both players to always defect, regardless
of their partner's choice. Furthermore, if you believe that your partner is
going to defect in round 10, then you should defect in round 9, and so on, such
that there would be ten rounds of defection by both players in the iterated
game.</p>

	      <p>However, as you have experienced, people play this game differently in
reality. Most will cooperate with their partner for the first several rounds,
and defect in the last few rounds. So this means that people do not play
according to the "rational" equilibrium strategy as predicted by economics.</p>

	      <p>Our hypothesis was that if people play the game over and over again for a very
long period of time, they might eventually converge to the equilibrium strategy. Thus,
we recruited you to play the game every day with the same group for an entire month.</p>

	      <p>We really appreciate your commitment to this study. Thank you so much for participating!</p>

          <hr>
	  </div>

      <h4>Survey</h4>

      <div class="row form-group">
        <div class="col-sm-4">
          <label>What is your age?</label>
        </div>
        <div class="col-sm-2">
          <input type="number" class="form-control" name="age" min="1"
                 max="100" step="1" required>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-4">
          <label>What is your gender?</label>
        </div>
        <div class="col-sm-2">
          <select class="form-control" name="gender" required>
            <option selected disabled>Select:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-4">
          <label>What is your location (US ZIP code or Canadian
            postal code)?</label>
        </div>
        <div class="col-sm-2">
          <input class="form-control" name="location" required>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-4">
          <label>What is your occupation?</label>
        </div>
        <div class="col-sm-4">
          <input class="form-control" name="occupation" required>
        </div>
      </div>

      <hr>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>The game you played in this study is known as
            <i>prisoner's dilemma</i>. <b>Before participating in this
            study</b>, on how many previous occasions had you played a
            similar game on Mechanical Turk?</label>
          {{> numberRadioButtons name="PD"}}
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>In some experiments, such as this one, participants play
	    many individual games of prisoner's dilemma. For instance, in this
	    study, you played about 20 games each day. <b>Before participating
	    in this study</b>, how many individual games of prisoner's dilemma
	    had you played on Mechanical Turk?</label>
          {{> numberRadioButtons name="PD_games"}}
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>Another variant of this game is known as a <i>public
	    goods game</i>. In this game, players voluntarily contribute
            some fraction of their wealth to a common pool that is then
            shared equally among all participants. <b>Before participating
              in this study</b>, on how many previous occasions had you played
            a public goods game on Mechanical Turk?</label>
          {{> numberRadioButtons name="PG"}}
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label><b>Before participating in this study</b>, how many individual
	    games of public goods had you played on Mechanical Turk?</label><br/>
          {{> numberRadioButtons name="PG_games"}}
        </div>
      </div>


      <div class="row form-group">
        <div class="col-sm-12">
          <label>In choosing your actions in each game, what particular
            plan or strategy did you settle on, if any? Please describe it
            in your own words.</label>
	  <textarea class="form-control" rows="4" name="strategies" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>If you followed a strategy, did it change over the
            course of the study? What were your previous strategies? When
            and why did they change?</label>
	  <textarea class="form-control" rows="4" name="strategies_time" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>What strategies, if any, did you notice other players
            using?</label>
	  <textarea class="form-control" rows="4" name="other_strategies" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>Did the strategies of other players appear to change over
            time?</label>
	  <textarea class="form-control" rows="4" name="other_strategies_time" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>Did you learn anything about <b>yourself</b> during this
            study?</label>
	  <textarea class="form-control" rows="4" name="learn_yourself" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>
            Did you learn anything about <b>other people</b> during
            this study?</label>
	  <textarea class="form-control" rows="4" name="learn_others" required></textarea>
        </div>
      </div>

      <div class="row form-group">
          <div class="col-sm-12">
              <label>
                  Do you feel like the people you played with
                  developed any social norms or standards as a group, whether
                  implicitly or explicitly? If so, describe them.
              </label>
              <textarea class="form-control" rows="4" name="norms"
                        required></textarea>
          </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>
            <b>Imagine the study had continued for another 20 days.</b> What do you think would have changed, if anything?</label>
	  <textarea class="form-control" rows="4" name="continued" required></textarea>
        </div>
      </div>

      <div class="row form-group">
          <div class="col-sm-12">
              <label>
                  Did you discuss this study with other workers (either in person, in forums, or in chat rooms) while playing? If so, what did you find most intriguing to talk about?</label>
              <textarea class="form-control" rows="4" name="discuss" required></textarea>
          </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>Do you think the compensation was fair?</label>
	  <textarea class="form-control" rows="4" name="compensation" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>
            Would you be interested in playing similar games on Mechanical Turk in the future? How might we make it easier for you to participate over a long period of time?</label>
	  <textarea class="form-control" rows="4" name="future" required></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>
            Do you have any other comments or feedback for us
            regarding this study?
          </label>
	  <textarea class="form-control" rows="4" name="misc"></textarea>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-12">
          <label>Would you like to be contacted when the results of this study are published?</label>
          <label class="radio-inline">
	      <input name="contact" type="radio" value="Yes" required>
	      <b>Yes</b>
	  </label>
	  <label class="radio-inline">
	      <input name="contact" type="radio" value="No" required>
	      <b>No</b>
	  </label>
	</div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <p><b>
              We try our utmost to pay workers fairly and provide prompt
              responses to issues and questions. Please leave us a review on
              <a
                 href="https://turkopticon.ucsd.edu/reports?id=A3RXXNTGSUSTQ9"
                 target="_blank">TurkOpticon</a> about your experience with this study.</b>
          </p>

          <p>Thank you for filling out this survey. Your feedback will help us to produce better quality HITs in the future.</p>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit the HIT</button>
    </form>
  </div>
</template> */}