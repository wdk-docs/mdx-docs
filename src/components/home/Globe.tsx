export function Globe({ title, ...props }: any) {
  const style = {
    minWidth: "400px",
    aspectRatio: "1",
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
    opacity: 0,
    animation: "fadein 1s ease .2s forwards",
  };
  return <canvas className="h-52" width="800" style={style} height="416"></canvas>;
}
