type Card = {
  letter: string;
  name: string;
  version: string;
  color: string;
  pill: { label: string; tone: "green" | "muted" | "amber" };
  status: string;
  primary: string;
  secondary?: string;
  progress?: string;
};

const cards: Card[] = [
  {
    letter: "U",
    name: "Ubuntu",
    version: "24.04 LTS",
    color: "#E95420",
    pill: { label: "● Running", tone: "green" },
    status: "The desktop is running.",
    primary: "Open desktop",
    secondary: "Stop",
  },
  {
    letter: "D",
    name: "Debian",
    version: "13 (trixie)",
    color: "#D70A53",
    pill: { label: "Installing", tone: "amber" },
    status: "Downloads about 600 MB…",
    primary: "Installing…",
    progress: "Unpacking xfce4-panel (4.20.3-1) …",
  },
  {
    letter: "K",
    name: "Kali Linux",
    version: "rolling",
    color: "#367BF0",
    pill: { label: "Not installed", tone: "muted" },
    status: "Needs about 2 GB of free space.",
    primary: "Install",
  },
];

/** Stylised mock-up of the LinDex distro picker. */
export default function Phone() {
  return (
    <div className="phone" aria-label="LinDex app screenshot mock-up" role="img">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-title">LinDex</div>
        <div className="app-sub">Pick a distro to install or start.</div>
        <div className="app-banner">
          <span className="dot" /> Ubuntu desktop is running
          <span className="mini-btn green">Open</span>
        </div>
        {cards.map((c) => (
          <div className="app-card" key={c.name}>
            <div className="app-card-head">
              <span className="badge" style={{ background: c.color }}>
                {c.letter}
              </span>
              <span className="names">
                <b>{c.name}</b>
                <small>{c.version}</small>
              </span>
              <span className={`pill ${c.pill.tone}`}>{c.pill.label}</span>
            </div>
            <div className="app-status">{c.status}</div>
            {c.progress && (
              <>
                <div className="bar" style={{ ["--c" as string]: c.color }}>
                  <i />
                </div>
                <div className="step">{c.progress}</div>
              </>
            )}
            <div className="app-btns">
              <span
                className="mini-btn"
                style={{ background: c.color, opacity: c.progress ? 0.5 : 1 }}
              >
                {c.primary}
              </span>
              {c.secondary && <span className="mini-btn outline">{c.secondary}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
