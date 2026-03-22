import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, rgba(24,35,47,1) 0%, rgba(49,65,77,1) 100%)",
          borderRadius: 40,
          color: "#f5f1e8",
          fontSize: 92,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 16,
            borderRadius: 30,
            border: "1px solid rgba(245,241,232,0.14)"
          }}
        />
        <div
          style={{
            transform: "translateY(-4px)"
          }}
        >
          W
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            width: 72,
            height: 4,
            borderRadius: 999,
            background: "#d9c6a0"
          }}
        />
      </div>
    ),
    size
  );
}
