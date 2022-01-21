import iconlg from "../react-icon-lg.png";

export default function Main() {
  return (
    <main className="Main">
      <h1 className="Main--header">Fun fact about React</h1>

      <ul className="Main--list-items">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className="Main--icon-lg" src={iconlg} alt="React logo icon" />
    </main>
  );
}
