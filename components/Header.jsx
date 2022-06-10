import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="border-y p-4 font-medium text-lg flex flex-col 350px:flex-row flex-wrap justify-between items-center gap-x-2">
      <Link href="/">
        <a className="font-pacifico text-2xl text-cyan-600">sudip kundu</a>
      </Link>
      <nav>
        <ul className="flex gap-4 font-normal transition-all text-slate-700">
          <li
            className={`hover:text-cyan-600 ${
              router.pathname == "/" &&
              "text-slate-900 font-semibold underline underline-offset-4"
            }`}
          >
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li
            className={`hover:text-cyan-600 ${
              router.pathname == "/projects" &&
              "text-slate-900 font-semibold underline underline-offset-4"
            }`}
          >
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </li>
          <li
            className={`hover:text-cyan-600 ${
              router.pathname == "/blogs" &&
              "text-slate-900 font-semibold underline underline-offset-4"
            }`}
          >
            <Link href="/blogs">
              <a>blogs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
