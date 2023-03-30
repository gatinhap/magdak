import './TextModule.less'

const TextModule = ({children, textModuleClass}) => {
    return (
        <article className={textModuleClass}>
            {children}
        </article>
    )
}

export default TextModule