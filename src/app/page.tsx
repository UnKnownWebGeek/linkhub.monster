export default function Home() {
  return (
    <div>
      <h1>Welcome to LinkHub.Monster</h1>
      <p>Your personalized hub for managing all your professional and personal links.</p>
      
      {/* Links Section */}
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/unknownwebgeek/" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/UnKnownWebGeek" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://x.com/unknownwebgeek" target="_blank">X.com</a>
        </li>
        {/* YouTube Channel */}
        <li>
          <a href="https://www.youtube.com/@unknownwebgeek" target="_blank">YouTube Channel</a>
        </li>
        {/* Kick Live Streaming */}
        <li>
          <a href="https://kick.com/unknownwebgeek" target="_blank">Kick Live Streaming</a>
        </li>
      </ul>
    </div>
  );
}
