import Phone from "@/components/Phone";
import { BASE_PATH, DOWNLOAD_URL, RELEASES_URL } from "./site";

const features = [
  {
    icon: "⚡",
    title: "Native-speed display",
    text: "A built-in X server draws straight to your screen. No VNC and no second app for the display.",
  },
  {
    icon: "🔓",
    title: "No root, no Termux",
    text: "Everything runs inside the app through PRoot. One APK, nothing else to install or configure.",
  },
  {
    icon: "🐧",
    title: "Three distros, side by side",
    text: "Install Ubuntu, Debian and Kali at the same time. Each keeps its own files and apps.",
  },
  {
    icon: "🖥️",
    title: "A real XFCE desktop",
    text: "Panels, a menu, a terminal and a file manager. Install anything else with apt.",
  },
  {
    icon: "🛡️",
    title: "Optional Kali tools",
    text: "Add kali-linux-default (nmap, Metasploit, Burp Suite, Wireshark and more) at install or later.",
  },
  {
    icon: "📜",
    title: "Logs when you need them",
    text: "Desktop, display and install logs each get their own view, with copy and share.",
  },
];

const distros = [
  { letter: "U", name: "Ubuntu", version: "24.04 LTS", color: "#E95420", note: "From the official Ubuntu Base image." },
  { letter: "D", name: "Debian", version: "13 (trixie)", color: "#D70A53", note: "Stable and lightweight." },
  { letter: "K", name: "Kali Linux", version: "Rolling", color: "#367BF0", note: "With optional penetration-testing tools." },
];

const steps = [
  { n: "1", title: "Install the APK", text: "Download LinDex and allow installs from your browser or file manager." },
  { n: "2", title: "Pick a distro", text: "Tap Install. LinDex downloads a fresh system (~600 MB) and sets up the desktop." },
  { n: "3", title: "Start the desktop", text: "Tap Start and you're in XFCE. Use touch, or plug in a keyboard and mouse." },
];

const faqs = [
  {
    q: "Do I need to root my phone?",
    a: "No. LinDex uses PRoot, which runs Linux programs as a normal Android app.",
  },
  {
    q: "Which phones are supported?",
    a: "64-bit ARM (arm64-v8a) phones and tablets running Android 8.0 or newer. You'll want at least 4 GB of RAM and 2 GB of free storage per distro.",
  },
  {
    q: "Does everything work like on a PC?",
    a: "Most desktop apps do. Things that need real root or kernel access, such as raw Wi-Fi monitor mode, Docker or systemd services, won't work inside the app.",
  },
  {
    q: "How do I update?",
    a: "Download the latest APK and install it over the old one. Your installed distros and files are kept.",
  },
  {
    q: "Android says the app is unsafe or from an unknown source.",
    a: "LinDex isn't on the Play Store, so Android asks before installing it. Allow installs from the app you downloaded it with.",
  },
];

function DownloadButton({ big }: { big?: boolean }) {
  return (
    <a className={`btn primary${big ? " big" : ""}`} href={DOWNLOAD_URL}>
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Download APK
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <img src={`${BASE_PATH}/icon.svg`} alt="" width={30} height={30} />
            LinDex
          </a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#distros">Distros</a>
            <a href="#faq">FAQ</a>
            <a className="btn small primary" href={DOWNLOAD_URL}>Download</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="glow" aria-hidden="true" />
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Free · Android 8.0+ · arm64</span>
              <h1>
                A full Linux desktop <span className="grad">in your pocket.</span>
              </h1>
              <p className="lead">
                LinDex runs Ubuntu, Debian or Kali Linux with an XFCE desktop on your Android phone.
                No root, no Termux, no VNC. Just one app.
              </p>
              <div className="cta">
                <DownloadButton big />
                <a className="btn ghost big" href={RELEASES_URL}>All releases</a>
              </div>
              <p className="fine">Not on the Play Store. Android will ask you to allow the install.</p>
            </div>
            <Phone />
          </div>
        </section>

        <section id="features" className="section">
          <div className="wrap">
            <h2>Everything you need, nothing you don't</h2>
            <p className="section-lead">A Linux PC that fits in one APK.</p>
            <div className="grid features">
              {features.map((f) => (
                <div className="card" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="distros" className="section alt">
          <div className="wrap">
            <h2>Choose your distro</h2>
            <p className="section-lead">Install one, or all three. One desktop runs at a time.</p>
            <div className="grid distros">
              {distros.map((d) => (
                <div className="card distro" key={d.name} style={{ ["--c" as string]: d.color }}>
                  <span className="badge lg" style={{ background: d.color }}>{d.letter}</span>
                  <h3>{d.name}</h3>
                  <span className="ver">{d.version}</span>
                  <p>{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>Up and running in three steps</h2>
            <div className="grid steps">
              {steps.map((s) => (
                <div className="step-card" key={s.n}>
                  <span className="num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section alt">
          <div className="wrap narrow">
            <h2>Questions</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section final">
          <div className="wrap final-inner">
            <h2>Ready to try it?</h2>
            <p className="section-lead">Free download. Installs in a minute; your first distro in about 15.</p>
            <DownloadButton big />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} LinDex</span>
          <span className="muted">
            Built on <a href="https://github.com/termux/termux-x11">Termux:X11</a> and{" "}
            <a href="https://proot-me.github.io/">PRoot</a>. Ubuntu, Debian and Kali Linux are
            trademarks of their respective owners; LinDex is not affiliated with them.
          </span>
        </div>
      </footer>
    </>
  );
}
