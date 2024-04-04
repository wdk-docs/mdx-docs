export function Steps({ children, ...props }: any) {
  return (
    <div className="dl-steps ml-4 mb-12 border-l border-gray-200 pl-6 dark:border-neutral-800 [counter-reset:step]">
      {/* <li className="step step-primary">Register</li> */}
      {children}
    </div>
  );
}
