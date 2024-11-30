const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50'
    const variants = {
      primary: 'bg-primary hover:bg-primary-dark text-white',
      secondary: 'border border-primary text-primary hover:bg-primary/10',
      outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
    }
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default Button