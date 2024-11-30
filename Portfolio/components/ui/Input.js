const Input = ({ label, error, ...props }) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <input
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 
                     focus:ring-2 focus:ring-primary focus:border-transparent"
          {...props}
        />
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </div>
    )
  }
  
  export default Input