import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">
        Dashboard de Produção Industrial
      </h1>

      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Acessar Dashboard
      </Link>
    </main>
  );
}