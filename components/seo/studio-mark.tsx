export function StudioMark({ size }: { size: number }) {
  const bar = Math.max(3, Math.round(size * 0.12));
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#0A0A0A",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontFamily: "Inter",
          fontSize: Math.round(size * 0.4),
          letterSpacing: -0.8,
        }}
      >
        GS
      </div>
      <div style={{ display: "flex", height: bar, background: "#1B4332" }} />
    </div>
  );
}
