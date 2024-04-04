export function Browser({ title, ...props }: any) {
  const style1 = {
    animation: "fadein .5s ease",
  };
  const style2 = {
    opacity: "0",
    animation: "0.4s ease 0s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "63.446%",
  };
  const style3 = {
    animation: "0.4s ease 0s 1 normal forwards running slideout",
  };
  const style4 = {
    opacity: "0",
    animation: "0.4s ease 0.2s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "39.1825%",
  };
  const style5 = {
    animation: "0.4s ease 0.2s 1 normal forwards running slideout",
  };
  const style6 = {
    opacity: "0",
    animation: "0.4s ease 0.4s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "74.3798%",
  };
  const style7 = {
    animation: "0.4s ease 0.4s 1 normal forwards running slideout",
  };
  const style8 = {
    opacity: "0",
    animation: "0.4s ease 0.6s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "22.7743%",
  };
  const style9 = {
    animation: "0.4s ease 0.6s 1 normal forwards running slideout",
  };
  const style10 = {
    opacity: "0",
    animation: "0.4s ease 0.8s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "40.7774%",
  };
  const style11 = {
    animation: "0.4s ease 0.8s 1 normal forwards running slideout",
  };
  const style12 = {
    opacity: "0",
    animation: "0.4s ease 1s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "53.9499%",
  };
  const style13 = {
    animation: "0.4s ease 1s 1 normal forwards running slideout",
  };
  const style14 = {
    opacity: "0",
    animation: "0.4s ease 1.2s 1 normal forwards running fadein",
    transformOrigin: "left center",
    width: "38.9694%",
  };
  const style15 = { animation: "0.4s ease 1.2s 1 normal forwards running slideout" };

  return (
    <div className="h-52 w-full px-4 flex items-center justify-center dot-background">
      <div
        className="w-64 max-w-full h-40 border rounded-md shadow bg-white dark:bg-neutral-900 hover:scale-105 duration-700 transition-transform"
        style={style1}
      >
        <div className="flex bg-slate-400/5 dark:bg-neutral-800/50 p-1 border-b gap-1 dark:border-neutral-800">
          <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
          <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
          <div className="border rounded-full w-2 h-2 dark:border-neutral-700"></div>
        </div>
        <div className="p-4 animate-pulse relative">
          <div className="h-2 w-2/3 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style2}>
            <span style={style3}></span>
          </div>
          <div className="h-2 w-1/2 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style4}>
            <span style={style5}></span>
          </div>
          <div className="h-2 w-1/2 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style6}>
            <span style={style7}></span>
          </div>
          <div className="h-2 w-3/4 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style8}>
            <span style={style9}></span>
          </div>
          <div className="h-2 w-2/3 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style10}>
            <span style={style11}></span>
          </div>
          <div className="h-2 w-1/4 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style12}>
            <span style={style13}></span>
          </div>
          <div className="h-2 w-1/2 mt-2 rounded bg-gray-300/80 dark:bg-neutral-800 browser-skeleton" style={style14}>
            <span style={style15}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
