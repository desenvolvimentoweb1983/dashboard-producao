export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-lg font-semibold">
        Dashboard de Produção
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">
          Atualizado agora
        </span>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>

    </header>
  );
}