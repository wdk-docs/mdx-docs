export function InlinePrompt({ initialInput, blocking, ...props }: any) {
  let style1 = {
    fontFamily: "var(--font-sans)",
    height: "80px !important",
  };
  let style2 = {
    fontFamily: "var(--font-sans)",
  };
  return (
    <div className="my-4 border rounded-md shadow-sm dark:border-gray-900 dark:shadow-none">
      <div className="items-start md:flex md:flex-row-reverse">
        <div className="divide-y w-full">
          <form className="relative flex items-center">
            <textarea
              name="name"
              rows={5}
              className="block resize-none dark:bg-white/10 w-full rounded-t-md border-0 py-4 pl-4 pr-14 focus:ring-0 whitespace-pre-wrap"
              spellCheck={false}
              style={style1}
              defaultValue={initialInput}
            ></textarea>
            <div className="absolute right-0 flex pr-3 space-x-2 items-end inset-y-3">
              <button
                type="button"
                className="inline-flex items-center rounded px-2 py-1.5 font-sans text-xs text-gray-900 hover:!bg-zinc-100 transition-colors"
                data-state="closed"
              >
                <span className="sr-only">重置</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  ></path>
                </svg>
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded shadow px-2 py-1.5 font-sans text-xs text-gray-400 !bg-zinc-900 hover:!bg-zinc-700 transition-colors"
                data-state="closed"
              >
                <span className="sr-only">生成</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 fill-white stroke-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
          <div
            className="bg-blue-100/25 rounded-b-md dark:bg-white/20 p-4 whitespace-pre-wrap h-full max-h-[200px] overflow-y-scroll"
            style={style2}
          >
            ...
            {/* {blocking ? <>德思礼夫妇住在女贞路四号，他们自豪地说</> : <>...</>} */}
          </div>
        </div>
      </div>
    </div>
  );
}
