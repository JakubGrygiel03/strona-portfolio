export function OgCard({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0A0A0A",
        padding: "72px",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            width: 84,
            height: 84,
            borderRadius: 20,
            background: "#1B4332",
            color: "#FFFFFF",
            fontSize: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          GS
        </div>
        <div style={{ display: "flex", marginLeft: 24, color: "#C4A265", fontSize: 28 }}>{kicker}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: 54,
            lineHeight: 1.08,
            letterSpacing: -1.2,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
