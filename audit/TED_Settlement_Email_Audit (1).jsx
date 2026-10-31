import { useState } from "react";

const C = {
  bg: "#EEF1F4", ink: "#17202B", panel: "#FFFFFF", line: "#D5DBE2", mute: "#5B6676",
  safe: "#1F7A5A", safeBg: "#E3F3EC", warn: "#9A6200", warnBg: "#FBF0D9",
  bad: "#B3362F", badBg: "#FBE7E5", navy: "#24406B",
};
const serif = "Charter, 'Iowan Old Style', Georgia, serif";
const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const TONE = {
  ok: { c: C.safe, bg: C.safeBg, t: "Supports legitimacy" },
  note: { c: C.warn, bg: C.warnBg, t: "Minor concern" },
  bad: { c: C.bad, bg: C.badBg, t: "Needs action" },
};

const evidence = [
  ["Court case details", "Sutton v. TED Foundation Inc., No. 1:23-cv-09219-DEH, S.D.N.Y., Judge Dale E. Ho. The header details match public reporting (ClassAction.org, Top Class Actions).", "ok"],
  ["Settlement terms", "$350,000 fund, $5 cash or two free months of membership, preliminary approval July 14, 2026, claim deadline Oct 26, 2026. All match public sources.", "ok"],
  ["Contact details", "Toll-free 1-888-312-3966 and www.tedvppasettlement.com both appear on the official long-form notice copy hosted by ClassAction.org.", "ok"],
  ["Link handling", "The destination is written out as plain text in the body. It is not hidden behind an image or a button.", "ok"],
  ["DKIM signature", "Passed. The message was signed by the claimed domain and was not altered in transit. This proves who sent it, not that the sender is trustworthy.", "ok"],
  ["VirusTotal", "No security vendor flagged the URL as malicious.", "ok"],
  ["Blacklists", "0 errors and 0 warnings. Your notes show 141 passed in one place and 144 in another, which is a small transcription mismatch.", "ok"],
  ["Original TED emails", "Your inbox holds earlier TED emails, so the address is tied to a real TED account. That fits how a class list is built.", "ok"],
  ["What it asks for", "A Claim ID and PIN only. Payment is by check, PayPal or Venmo. No password, Social Security number or bank login is requested.", "ok"],
  ["Cookies", "Three cookies: two Google Analytics cookies (_ga, _ga_) and one site cookie (scms). This is routine analytics. None are Secure-flagged, which is low risk on an informational site.", "note"],
  ["Domain email protection", "DMARC is not enforcing and SPF is lenient. This is a weakness in the sender's setup and the most likely reason the filter flagged it.", "note"],
  ["Claim deadline", "The notice says October 26, 2026. Today is October 30, 2026, so that date has passed.", "bad"],
];

const mx = [
  {
    t: "HTTP timed out", tag: "Error", tone: "note",
    plain: "The scanner knocked on the website's front door and nobody answered in time. That can happen when a server is busy or when it declines automated checks.",
    meaning: "Low concern. The same report shows the web server tests passing, and VirusTotal found nothing. Re-run the test once to confirm.",
  },
  {
    t: "MX: use a quarantine or reject policy", tag: "Supplemental", tone: "note",
    plain: "MX records say where a domain's incoming mail goes. This message is really about mail-protection settings, and it repeats the DMARC and SPF items below. It is a recommendation, not a failed check.",
    meaning: "Low concern. It does not affect whether this email is real.",
  },
  {
    t: "DMARC quarantine/reject not enabled", tag: "Error", tone: "bad",
    plain: "DMARC is the sender's instruction to inboxes about what to do with mail that fails identity checks. Right now the domain only asks inboxes to watch and report. It does not ask them to block fakes. Picture a guard told to write down suspicious visitors but not turn them away.",
    meaning: "A real weakness. Someone could imitate this domain more easily, and weak DMARC often pushes bulk mail into spam. It does not show that this email is fake, because DKIM passed.",
  },
  {
    t: "SPF: use a quarantine or reject policy", tag: "Supplemental", tone: "note",
    plain: "SPF is the list of servers allowed to send mail for the domain. The list exists, but its ending is soft. Strict wording would tell inboxes to reject mail from servers not on the list. The BIMI note refers to the logo some inboxes show beside a verified sender, which is cosmetic.",
    meaning: "Low to moderate concern. It is a hardening suggestion and does not make this message unsafe.",
  },
  {
    t: "Mail server: 1 test failed", tag: "Error", tone: "note",
    plain: "The domain's incoming mail is relayed through ImprovMX, a third-party forwarding service. That is common for short-lived campaign sites. Your screenshot does not show which test failed.",
    meaning: "Unclear. Open that row in MX Toolbox to read the failing test. The heading in your screenshot looks like a slightly different spelling from tedvppasettlement.com, so confirm the exact domain you tested.",
  },
  {
    t: "DNS: 2 warnings", tag: "Warning", tone: "note",
    plain: "DNS is the internet's address book. Warnings here usually mean housekeeping issues, such as records set up in a less-than-ideal way.",
    meaning: "Low concern. The warnings are not named in your notes, so they cannot be judged individually.",
  },
];

const steps = [
  "Move the email to the main inbox and choose Not spam so the filter learns from it.",
  "In Gmail, open Show original and confirm SPF, DKIM and DMARC for this specific message. The domain in the DKIM d= tag should match the From address.",
  "Do not click the link in the email. Type tedvppasettlement.com into the browser yourself.",
  "Check the site for the current claim status and whether late claims are accepted. Use the phone number printed on the site, not only the one in the email.",
  "File only if you actually watched TED videos between Oct 19, 2021 and July 14, 2026. The claim is submitted under penalty of perjury.",
  "Keep the email until the final approval hearing. The free membership benefit does not require a claim form, so watch for a follow-up email.",
];

const second = [
  ["I agree with the verdict, but the yes/no framing is too coarse", "Moving the email to the inbox is right. The better outcome is a third state: not phishing, safe to open, verify before acting. Nothing in the evidence justifies deleting or blocking the sender."],
  ["The deadline is the biggest practical finding", "Your draft says you would proceed with filing if eligible. The Oct 26 claim and exclusion deadlines have already passed. Cash may no longer be claimable unless the site announces an extension or accepts late claims. Confirm this on the official site rather than assuming either way."],
  ["DKIM pass is necessary, not sufficient", "It proves the message came from a domain that holds the signing key. Scammers can also sign mail from domains they own. The strong evidence is the combination of a signed message, matching public case records, matching contact details and a clean reputation."],
  ["The spam label was almost certainly a false positive", "Bulk sending, a money-related subject, a link to a newer domain and DMARC that is not enforced are the usual triggers. This is a legitimate legal notice that was filtered automatically."],
  ["Unsubscribe is not the same as opting out", "Unsubscribing only stops emails. Excluding yourself from the class requires a written letter to the administrator by the stated deadline. Do not treat the unsubscribe link as a legal choice."],
  ["Clean up three data points before you file the audit", "Blacklist passed count (141 vs 144), mail server counts (28 vs 29 passed, 5 vs 6 warnings), and the final approval hearing date. Your screenshot says Nov 13, 11:00 a.m., while the sources I found say Nov 12. Confirm the date on the court docket or settlement site."],
  ["Limits of this audit", "It relies on your notes and screenshots. I did not inspect the raw message headers or visit the claim site, so the Gmail Show original check is worth doing."],
];

function Badge({ tone, children }) {
  const t = TONE[tone];
  return (
    <span style={{ background: t.bg, color: t.c, fontSize: 12, fontWeight: 600, padding: "3px 9px", borderRadius: 4, whiteSpace: "nowrap" }}>
      {children}
    </span>
  );
}

function Card({ children, style }) {
  return <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 8, padding: 20, ...style }}>{children}</div>;
}

function Verdict() {
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div style={{ background: C.ink, color: "#fff", borderRadius: 10, padding: "32px 28px", borderLeft: `8px solid ${C.safe}` }}>
        <div style={{ fontSize: 14, color: "#AEB8C6", marginBottom: 10 }}>Final verdict</div>
        <div style={{ fontFamily: serif, fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.12, fontWeight: 700 }}>
          Not phishing. Move it to your inbox.
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "#D9E0EA", maxWidth: 640, margin: "16px 0 0" }}>
          This is a genuine court-authorized settlement notice that the spam filter caught by mistake. Open it, but reach the claim site by typing the address yourself. The Oct 26 claim deadline has already passed.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14 }}>
        <Card>
          <div style={{ color: C.mute, fontSize: 13 }}>Email type</div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginTop: 4 }}>Legitimate bulk legal notice</div>
          <p style={{ color: C.mute, fontSize: 14, lineHeight: 1.5, margin: "8px 0 0" }}>
            A filtered false positive. If it were a scam, it would be a settlement-claim lure built to harvest personal data. None of that behavior appears here.
          </p>
        </Card>
        <Card>
          <div style={{ color: C.mute, fontSize: 13 }}>Risk level</div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginTop: 4, color: C.safe }}>Low</div>
          <div style={{ height: 8, background: C.line, borderRadius: 4, marginTop: 12 }}>
            <div style={{ width: "15%", height: 8, background: C.safe, borderRadius: 4 }} />
          </div>
          <p style={{ color: C.mute, fontSize: 14, lineHeight: 1.5, margin: "10px 0 0" }}>Every scan came back clean. The open issues are on the sender's side.</p>
        </Card>
        <Card>
          <div style={{ color: C.mute, fontSize: 13 }}>Time sensitivity</div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginTop: 4, color: C.bad }}>Deadline passed</div>
          <p style={{ color: C.mute, fontSize: 14, lineHeight: 1.5, margin: "8px 0 0" }}>
            Claims were due Oct 26, 2026. Check the official site for late-claim or membership-benefit details.
          </p>
        </Card>
      </div>

      <Card>
        <h3 style={{ fontFamily: serif, fontSize: 20, margin: "0 0 4px" }}>Why it landed in spam</h3>
        <p style={{ color: C.mute, fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
          Your original assumption was that the email was a data-gathering attempt. The evidence points the other way. The filter reacts to mass mailing, money wording, a link and a sender domain that does not yet enforce DMARC. Those are traits of many scams, but here they come from a real administrator's setup.
        </p>
      </Card>

      <Card>
        <h3 style={{ fontFamily: serif, fontSize: 20, margin: "0 0 12px" }}>Remediation steps</h3>
        <ol style={{ margin: 0, paddingLeft: 22, display: "grid", gap: 10 }}>
          {steps.map((s, i) => (
            <li key={i} style={{ fontSize: 15, lineHeight: 1.55, maxWidth: 700 }}>{s}</li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

function Evidence() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <p style={{ color: C.mute, fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
        Findings from the tools and sources in your notes, plus a public cross-check of the case. Each row shows how it affects the verdict.
      </p>
      {evidence.map(([title, body, tone]) => (
        <Card key={title} style={{ borderLeft: `5px solid ${TONE[tone].c}`, padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700 }}>{title}</div>
            <Badge tone={tone}>{TONE[tone].t}</Badge>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.55, color: C.ink, maxWidth: 720 }}>{body}</p>
        </Card>
      ))}
      <Card style={{ background: "#F7F9FB" }}>
        <h3 style={{ fontFamily: serif, fontSize: 18, margin: "0 0 6px" }}>What a passing DKIM check means</h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.mute, maxWidth: 720 }}>
          The sender's digital signature matched the public key in its DNS records, the message was not changed after signing, and the signature is within its valid dates. A failure would mean the content was altered, the key was weak or expired, or the signing domain did not match the visible From address. None of those apply.
        </p>
      </Card>
    </div>
  );
}

function MX() {
  const [open, setOpen] = useState(2);
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <Card>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 }}>
          {[["Overall", "4 errors, 7 warnings, 184 passed"], ["Blacklist", "0 errors, 0 warnings"], ["Mail server", "3 errors, 6 warnings"], ["Web server", "0 errors, 0 warnings, 8 passed"], ["DNS", "0 errors, 2 warnings, 14 passed"]].map(([k, v]) => (
            <div key={k}>
              <div style={{ color: C.mute, fontSize: 13 }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
        <p style={{ color: C.mute, fontSize: 14, lineHeight: 1.55, margin: "14px 0 0" }}>
          The overall counts include everything. Almost every error is about how strictly the sender protects its own domain, not about danger to you. Select a finding to read it in plain language.
        </p>
      </Card>
      {mx.map((m, i) => (
        <Card key={m.t} style={{ padding: 0, overflow: "hidden" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: serif, fontSize: 18, fontWeight: 700 }}>{m.t}</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Badge tone={m.tone}>{m.tag}</Badge>
              <span aria-hidden="true" style={{ fontSize: 18, color: C.mute }}>{open === i ? "−" : "+"}</span>
            </span>
          </button>
          {open === i && (
            <div style={{ padding: "0 20px 18px", display: "grid", gap: 12, borderTop: `1px solid ${C.line}`, paddingTop: 16 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: C.navy }}>In plain terms</div>
                <p style={{ margin: "4px 0 0", fontSize: 15, lineHeight: 1.6, maxWidth: 700 }}>{m.plain}</p>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: C.navy }}>What it means for this email</div>
                <p style={{ margin: "4px 0 0", fontSize: 15, lineHeight: 1.6, maxWidth: 700 }}>{m.meaning}</p>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function Second() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <Card style={{ borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700 }}>Second opinion: agree, with three changes</div>
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.mute, maxWidth: 700 }}>
          Keep the email, treat the deadline as the main risk, and verify the message in Gmail before relying on it.
        </p>
      </Card>
      {second.map(([t, b]) => (
        <Card key={t} style={{ padding: "16px 20px" }}>
          <div style={{ fontFamily: serif, fontSize: 17, fontWeight: 700 }}>{t}</div>
          <p style={{ margin: "6px 0 0", fontSize: 15, lineHeight: 1.6, maxWidth: 720 }}>{b}</p>
        </Card>
      ))}
    </div>
  );
}

const tabs = [["Verdict", Verdict], ["Evidence", Evidence], ["MX Toolbox decoded", MX], ["Second opinion", Second]];

export default function Audit() {
  const [tab, setTab] = useState(0);
  const View = tabs[tab][1];
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: sans, color: C.ink, padding: "28px 16px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h1 style={{ fontFamily: serif, fontSize: "clamp(24px, 4vw, 32px)", margin: 0 }}>Email security audit</h1>
        <p style={{ color: C.mute, fontSize: 15, margin: "6px 0 22px" }}>
          Notice of Proposed Class Action Settlement, Sutton v. TED Foundation Inc. Audited October 30, 2026.
        </p>
        <div role="tablist" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20, borderBottom: `1px solid ${C.line}` }}>
          {tabs.map(([name], i) => (
            <button
              key={name}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              style={{
                cursor: "pointer", border: "none", background: tab === i ? C.ink : "transparent", color: tab === i ? "#fff" : C.ink,
                padding: "10px 16px", fontSize: 15, fontWeight: 600, borderRadius: "6px 6px 0 0", fontFamily: sans,
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <View />
      </div>
    </div>
  );
}
