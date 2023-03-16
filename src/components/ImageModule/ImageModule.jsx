import './ImageModule.css'

const ImageModule = ({imageSrc, alt, imageClass}) => {
    return (
        <div className={imageClass}>
            <img src={imageSrc} alt={alt} />
        </div>
    )
}

export default ImageModule