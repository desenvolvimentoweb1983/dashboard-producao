export default function Skeleton() {
  return (
    <div
      style={{
        height: "100px",
        borderRadius: "12px",
        background: "linear-gradient(90deg, #eee, #ddd, #eee)",
        animation: "loading 1.5s infinite",
      }}
    />
  );
}