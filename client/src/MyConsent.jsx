export function MyConsent({ onConsent }) {

  return (
    <div>
      <div>Do you consent?</div>
      <div>
        <button type="button" onClick={onConsent}>
          Yes!
        </button>
      </div>
    </div>
  );
  console.log("App component is being rendered"); // Add this line

}