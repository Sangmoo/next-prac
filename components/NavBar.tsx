import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "orange" : "green" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
