import Header from "@/components/app/header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}
