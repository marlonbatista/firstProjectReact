import React from 'react';

const HomeCard = (props) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img style={{paddingTop:'3px',width:'100px',height:'100px'}} src="http://2.bp.blogspot.com/_noZ46Od_8Co/SwvDkhI2rwI/AAAAAAAAADU/8Md7CgX1LyA/s400/LOGO+SIEBA3.bmp" className="card-img-top rounded mx-auto d-block" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;    