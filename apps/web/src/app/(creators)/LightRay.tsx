export function LightRay() {
  return (
    <div className="absolute -top-10 left-[15%] -rotate-12">
      <div className="absolute inset-0 w-16 h-[30rem] bg-stone-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-3xl rounded-3xl" />
      </div>

      <div className="absolute inset-0 w-16 h-[30rem] bg-zinc-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-2xl rounded-3xl" />
      </div>
    </div>
  );
}
