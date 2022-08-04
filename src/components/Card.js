function Card(props) {

    const { imgSrc } = props;
    const { imgAltText } = props;
    const style = {
        width: '18rem'
    };

    return (
        <div className="card" style={style}>
            <img src={imgSrc} className="card-img-top" alt={imgAltText} />
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;

