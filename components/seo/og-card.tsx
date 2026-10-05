export function OgCard({
  kicker,
  title,
  detail,
}: {
  kicker: string;
  title: string;
  detail: string;
}) {
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
      <div style={{ display: "flex", color: "#A3A3A3", fontSize: 24 }}>{kicker}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", color: "#FFFFFF", fontSize: 72, lineHeight: 1.05 }}>{title}</div>
        <div style={{ display: "flex", marginTop: 24, color: "#A3A3A3", fontSize: 28 }}>{detail}</div>
      </div>
    </div>
  );
}
