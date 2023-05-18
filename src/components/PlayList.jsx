const PlayList = () => {
  const songs = [
    "Unavailable by Davido",
    "Unavailable by Davido",
    "Unavailable by Davido",
    "Unavailable by Davido",
    "Unavailable by Davido",
    "Unavailable by Davido",
  ];

  return (
    <main className="play-list">
      <section className="play-list-info">
        <h1>Make your party fun!</h1>
        <p>Create your own custom playlist today.</p>

        <button>Create playlist</button>
      </section>

      <aside className="play-list-trend">
        <h2>Trending songs</h2>

        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <span className="song">{song}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </span>
            </li>
          ))}
        </ul>

        <button>View more</button>
      </aside>
    </main>
  );
};

export default PlayList;
