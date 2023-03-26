import React from 'react';

const Products = (props) => {
    const { name, img, description,price } = props.product;

    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 30)}</p>
                    <div className="card-actions justify-between">
                    <div>
                    <button className="text-2xl text-red-500 uppercase">
                            
${price}

                        </button>
                        </div>
                        
                        <button htmlFor="my-modal-3" onClick={() => props.handleClicked(props.product.name)} className="btn btn-primary uppercase">
                            
                            DETAILS

                        </button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;