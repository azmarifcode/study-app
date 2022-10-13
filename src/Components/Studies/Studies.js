import './Studies.css';
const Studies = ({ study, handelAddToCart }) => {
    const { time, picture, name, about } = study;

    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="pt-5">
                <img
                    src={picture}
                    alt="Shoes"
                    className="rounded-xl card-img"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about ? about.slice(0, 100) : 'Nothing'}</p>
                <h3 className="text-lg font-semibold">
                    Time required : {time}
                </h3>
                <div className="card-actions">
                    <button
                        onClick={() => handelAddToCart(study)}
                        className="btn w-full btn-primary">
                        Add to list
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Studies;
