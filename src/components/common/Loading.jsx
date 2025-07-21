import React from 'react';
import LoadingImg from './Loading.gif'

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img className='' src={LoadingImg} alt="Loading..." />
        </div>
    );
};

export default Loading;
