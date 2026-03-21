// calcula a eficiência em porcentagem: (produzido / meta) * 100
export function calcularEficiencia(produzido: number, meta: number): number {
  if (meta === 0) return 0; // evita divisão por zero
  return Math.round((produzido / meta) * 100);
}

// exemplo de outras funções úteis para produção
export function totalProduzido(dados: { produzido: number }[]): number {
  return dados.reduce((acc, item) => acc + item.produzido, 0);
}

export function totalDefeitos(dados: { defeitos: number }[]): number {
  return dados.reduce((acc, item) => acc + item.defeitos, 0);
}