import img from '/src/assets/hero-img.webp';
import './Slideshow.less'

const SlideshowImage = () => {
    return (
        <div
            className={'slideshow-image-container'}>
            <img
                src={img}
                alt={'zdjęcie gabinetu'}
            />
        </div>
    )
}

export default SlideshowImage