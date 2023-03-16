import './Slideshow.less'

const Slideshow = ({children}) => {
    return (
        <section className={'slideshow-section'}>
            {children}
        </section>
    )
}

export default Slideshow