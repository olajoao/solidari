import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 bg-sky-600 p-5 gap-5 flex items-center justify-between">
      <NavLink to="/">
        <img
          src="/solidari-logo.png"
          alt="Solidari logo"
          width={150}
          height={100}
          loading="lazy"
        />
      </NavLink>
      <nav className="font-medium max-w-xl flex text-neutral-300 items-center gap-5">
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-200" : isPending ? "text-neutral-400" : ""
          }
        >
          Doações
        </NavLink>

        <NavLink
          to="/donate"
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-200" : isPending ? "text-neutral-400" : ""
          }
        >
          Doar
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-200" : isPending ? "text-neutral-400" : ""
          }
        >
          Sobre
        </NavLink>
      </nav>
    </header>
  );
}
