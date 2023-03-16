import './Offer.less'

const OfferCard = ({children}) => {
    return (
        <article className={'offer-card'}>
            {children}
        </article>
    )
}

export default OfferCard