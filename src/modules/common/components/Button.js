
const Button = ({ title, href, className, primary, secondary }) => {
    return href ? (
        <a
            className={`btn ${className} ${primary && 'bg-[#5E44FF] text-white'} ${secondary && 'bg-[#1C144C] text-white'}`}
            href={href}>
            {title}
        </a>
    ) : (
        <button className={`btn ${className}`}>{title}</button>
    )
}

export default Button