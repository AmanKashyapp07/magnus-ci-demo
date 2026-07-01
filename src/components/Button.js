// Mock Frontend React Component Logic
function getButtonStyles(variant) {
  switch(variant) {
    case 'primary':
      return 'bg-blue-600 text-white font-bold rounded-lg';
    case 'danger':
      return 'bg-red-500 text-white font-bold rounded-lg';
    case 'outline':
      return 'bg-transparent border-2 border-gray-400 text-gray-700';
    default:
      return 'bg-gray-200 text-black';
  }
}

function isButtonDisabled(isLoading, isDisabled) {
  return isLoading || isDisabled;
}

module.exports = { getButtonStyles, isButtonDisabled };
