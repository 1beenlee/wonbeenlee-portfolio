import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #fcfcfc 0%, #f3f6f8 100%)",
          color: "#1a202c",
          padding: "60px 68px"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -110,
            width: 360,
            height: 360,
            borderRadius: "999px",
            background: "rgba(181, 201, 214, 0.22)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -90,
            width: 280,
            height: 280,
            borderRadius: "999px",
            background: "rgba(217, 198, 160, 0.2)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 30,
            borderRadius: 36,
            border: "1px solid rgba(148, 163, 184, 0.24)"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 32,
            background: "rgba(255,255,255,0.76)",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
            padding: "52px 54px",
            zIndex: 1
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 820
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 18,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#52606d"
              }}
            >
              <span>Wonbeen Lee</span>
              <span
                style={{
                  width: 46,
                  height: 1,
                  background: "rgba(82, 96, 109, 0.4)"
                }}
              />
              <span>Portfolio</span>
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 62,
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                maxWidth: 720
              }}
            >
              AI-enabled B2B SaaS for complex enterprise workflows.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                lineHeight: 1.35,
                color: "#475569",
                maxWidth: 560
              }}
            >
              Workflow Design / Product Ops / SRM-S2P
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: "1px solid rgba(148, 163, 184, 0.18)",
              paddingTop: 24
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                maxWidth: 520
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 32,
                  lineHeight: 1.1
                }}
              >
                Wonbeen Lee
              </div>
              <div
                style={{
                  fontSize: 18,
                  lineHeight: 1.35,
                  color: "#52606d"
                }}
              >
                Global Product Manager at emro / Tokyo, Japan
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 18,
                  background: "linear-gradient(145deg, #18232f 0%, #31414d 100%)",
                  color: "#f5f1e8",
                  fontFamily: "Georgia, serif",
                  fontSize: 30,
                  fontWeight: 600
                }}
              >
                W
              </div>
              <div
                style={{
                  width: 42,
                  height: 3,
                  borderRadius: 999,
                  background: "#d9c6a0"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
