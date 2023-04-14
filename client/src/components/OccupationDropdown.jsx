import React from "react";

const occupations = [
  "Accountant",
  "Architect",
  "Artist",
  "Banker",
  "Biologist",
  "Chef",
  "Chemist",
  "Consultant",
  "Data Analyst",
  "Dentist",
  "Designer",
  "Doctor",
  "Economist",
  "Educator",
  "Engineer",
  "Entrepreneur",
  "Farmer",
  "Finance",
  "Healthcare Professional",
  "Human Resources",
  "IT Professional",
  "Journalist",
  "Lawyer",
  "Librarian",
  "Manager",
  "Marketing",
  "Mathematician",
  "Musician",
  "Nurse",
  "Pharmacist",
  "Photographer",
  "Physicist",
  "Pilot",
  "Police Officer",
  "Programmer",
  "Psychologist",
  "Real Estate Agent",
  "Researcher",
  "Sales",
  "Scientist",
  "Social Worker",
  "Software Engineer",
  "Student",
  "Teacher",
  "Technician",
  "Veterinarian",
  "Writer",
  "Other",
];

export function OccupationDropdown({ className, id, name, value, onChange, required }) {
    return (
      <select
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select an occupation</option>
        {occupations.map((occupation, index) => (
          <option key={index} value={occupation}>
            {occupation}
          </option>
        ))}
      </select>
    );
  }