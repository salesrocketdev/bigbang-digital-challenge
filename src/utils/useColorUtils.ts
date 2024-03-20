export const useColorUtils = () => {
  const getBgColor = (type: string) => {
    switch (type) {
      case 'Grocery':
        return 'bg-yellow-300'
      case 'Restaurant':
        return 'bg-red-300'
      case 'Pharmacy':
        return 'bg-green-300'
      case 'Gym':
        return 'bg-purple-300'
      case 'OnlineStore':
        return 'bg-pink-400'
      default:
        return 'bg-gray-300'
    }
  }

  const getProgressColor = (type: string) => {
    switch (type) {
      case 'Shopping':
        return 'bg-red-300'
      case 'Invoices':
        return 'bg-purple-300'
      case 'Investments':
        return 'bg-pink-400'
      default:
        return 'bg-gray-300'
    }
  }

  return {
    getBgColor,
    getProgressColor
  }
}
