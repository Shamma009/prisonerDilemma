import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Alert } from "../components/Alert";
import { Button } from "../components/Button";
import { CountryDropdown } from 'react-country-region-selector';
import { OccupationDropdown } from "../components/OccupationDropdown"

export function ExitSurvey({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();

  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [strength, setStrength] = useState("");
  const [fair, setFair] = useState("");
  const [feedback, setFeedback] = useState("");
  const [education, setEducation] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");


  function handleSubmit(event) {
    event.preventDefault()
    player.set("exitSurvey", {
      age,
      selectedGender,
      strength,
      fair,
      feedback,
      education,
      country, 
      occupation
    });
    next();
  }

  function handleEducationChange(e) {
    setEducation(e.target.value);
  }

  function handleCountryChange(country) {
    setCountry(country);}

  function handleGenderChange(e) {
    setSelectedGender(e.target.value);
    }

  function handleOccupationChange(e) {
      setOccupation(e.target.value);
      }

    return (
      <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Alert title="Bonus">
          <p>
            Please submit the following code to receive your bonus:{" "}
            <strong>{player.id}</strong>.
          </p>
          <p className="pt-1">
            Your final <strong>bonus</strong> is in addition to the{" "}
            <strong>1 base reward</strong> for completing the HIT.
          </p>
        </Alert>
        <legend className="text-2xl font-semibold mt-4 mb-8">
          Thank you for participating in this research study!
        </legend>
        <form
          className="mt-12 space-y-8 divide-y divide-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Exit Survey
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Please answer the following short survey. You do not have to
                  provide any information you feel uncomfortable with.
                </p>
              </div>
                <div>
                  <label htmlFor="age" className={labelClassName}>
                    Age
                  </label>
                  <div className="mt-1">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      autoComplete="off"
                      className={inputClassName}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min="1"
                      max="100"
                      step="1"
                      required
                    />
                  </div>

                  <div style={{ height: '1rem' }}></div> 


                <div>
          <label htmlFor="country" className={labelClassName}>
            Country
          </label>
          <div className="mt-1">
            <CountryDropdown
              id="country"
              name="country"
              className={inputClassName}
              value={country}
              onChange={handleCountryChange}
              required
            />
          </div>
        </div>
      </div>
      <div style={{ height: '1rem' }}></div> 

                <div>
                  <label className={labelClassName}>
                    Highest Education Qualification
                  </label>
                  <div className="mt-1 text-sm text-gray-500 grid gap-2">

                    <Radio
                      selected={education}
                      name="education"
                      value="high-school"
                      label="High School"
                      onChange={handleEducationChange}
                    />
                    <Radio
                      selected={education}
                      name="education"
                      value="bachelor"
                      label="US Bachelor's Degree"
                      onChange={handleEducationChange}
            
                    />
                    <Radio
                      selected={education}
                      name="education"
                      value="master"
                      label="Master's or higher"
                      onChange={handleEducationChange}
                    />
                    <Radio
                      selected={education}
                      name="education"
                      value="other"
                      label="Other"
                      onChange={handleEducationChange}
                   
                      />
          </div>
        </div>

        <div style={{ height: '1rem' }}></div> 


        <div>
      <label htmlFor="occupation" className={labelClassName}>
      What is your occupation?
          </label>
          <div className="col-sm-4">
            <OccupationDropdown
              id="occupation"
              name="occupation"
              className={inputClassName}
              value={occupation}
              onChange={handleOccupationChange}
              required
            />
 </div>
</div>

<div style={{ height: '1rem' }}></div> 

        <div>
                  <label className={labelClassName}>Gender</label>
                  <div className="mt-1 grid gap-2">
                    <Radio
                      selected={selectedGender}
                      name="selectedGender"
                      value="male"
                      label="Male"
                      onChange={handleGenderChange}
                    />
                    <Radio
                      selected={selectedGender}
                      name="selectedGender"
                      value="female"
                      label="Female"
                      onChange={handleGenderChange}
                    />
                  </div>
                </div>


      <div className="mt-8">
        <label className={labelClassName}>
          How would you describe your strength in the game?
        </label>
        <textarea
          className={inputClassName}
          dir="auto"
          id="strength"
          name="strength"
          rows={4}
          value={strength}
          onChange={(e) => setStrength(e.target.value)}
          required
        />
      </div>

      <div className="mt-8">
        <label className={labelClassName}>
          Do you feel the pay was fair?
        </label>
        <textarea
          className={inputClassName}
          dir="auto"
          id="fair"
          name="fair"
          rows={4}
          value={fair}
          onChange={(e) => setFair(e.target.value)}
          required
        />
      </div>

      <div className="mt-8">
        <label className={labelClassName}>
          Feedback, including problems you encountered.
        </label>
        <textarea
          className={inputClassName}
          dir="auto"
          id="feedback"
          name="feedback"
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </div>

      <div style={{ height: '1rem' }}></div> 

<p style={{ fontSize: '0.875rem', color: '#888' }}>
  Thank you for filling out this survey. Your feedback will help us to produce better quality HITs in the future.
</p>
      <div className="mb-12 mt-8">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  </div>
</form>
</div>

);



}



export function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="text-sm font-small text-gray-700">
      <input
        className="mr-2 shadow-sm sm:text-sm"
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
        required
      />
      {label}
    </label>
  );
}



