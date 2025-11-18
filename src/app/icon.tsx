import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "22%",
          background:
            "radial-gradient(circle at 30% 30%, #34d399, rgba(5,16,35,0.95) 55%), linear-gradient(135deg, #0f172a, #082f49 60%, #0e7490)",
          border: "1px solid rgba(104, 211, 145, 0.3)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.04em",
            fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            color: "#f8fafc",
            textShadow: "0 4px 12px rgba(15, 118, 110, 0.55)",
          }}
        >
          MA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
