export const useUtils = () => {
  const formatCurrency = (amount: number) => {
    if (amount == undefined) return 0

    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)
  }

  const formatPercentage = (percentage: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'percent' }).format(percentage)
  }

  return {
    formatCurrency,
    formatPercentage
  }
}
