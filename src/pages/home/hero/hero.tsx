import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <div className="pt-32 relative h-[calc(100dvh-64px)] bg-linear-to-t from-blue-950 to-sky-600">
      <div className="space-y-12 text-center m-auto max-w-xl">
        <h1 className="text-5xl font-bold text-neutral-300">
          Encontre ou receba o que procura
        </h1>
        <p className="text-xl text-neutral-300">
          Conectando doadores a quem mais precisa! <br />
        </p>
        <form className="flex items-stretch gap-x-2">
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="search">
              Procurar algo de interesse
            </label>
            <input
              type="text"
              className="pl-10 border-2 border-transparent focus:border-orange-600/50 w-full bg-neutral-200 py-4 outline-none placeholder:text-neutral-400 rounded-md"
              placeholder="Ex: Sofá, sapato, fogão, colchão"
            />
            <MagnifyingGlassIcon className="w-6 h-6 text-neutral-500 absolute left-2 inset-y-0 my-auto" />
          </div>
          <button className="hover:bg-orange-600 shadow-lg hover:shadow-none cursor-pointer rounded-md px-10 bg-secondary text-neutral-200 font-semibold">
            Procurar
          </button>
        </form>
      </div>
    </div>
  );
}
