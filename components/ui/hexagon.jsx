export default function Hexagon({ children, title, items }) {
  return (
    <>
      <div className="hexagon-wrap relative flex min-w-full md:min-w-96 ">
        <div className="flex flex-col p-2 absolute left-9 md:left-7 top-0 md:top-0 md:ml-4 bg-slate-100 bg-opacity-5 rounded-md w-10/12 md:w-72 min-h-20 md:min-h-24 ml-1  ps-12 md:ps-16">
          <div className="information w-full text-slate-100 ">
            <span className="text-xs font-bold uppercase text-amber-500">
              {title}
              </span>
            <ol className="grid grid-cols-2 list-inside list-disc text-xs">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="hexagon">
          <div className="hexagon-content text-slate-700 font-black">{children}</div>
        </div>
      </div>
    </>
  );
}
