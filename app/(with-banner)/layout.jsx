export default function BannerLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "purple" }}>
        El mejor canal de Twitch de programación
      </marquee>
      {children}
    </div>
  );
}
