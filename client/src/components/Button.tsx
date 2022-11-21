type Props = {
  children: React.ReactNode
  title?: string
  icon?: boolean
  onClick?: React.MouseEventHandler
  className?: string
}

const Button = ({ children, icon, onClick, title, className }: Props) => {
  return (
    <button
      className={icon ? `add-icon ${className}` : `text-button ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
