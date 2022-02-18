import React from 'react';

const Page = props =>
    <div className='page row justify-content-center font-s'>
        {props.packs.map((pack, i) => (
            <div key={i} className={'mb-4 col-12 col-lg-' + (props.cols ? props.cols : Math.floor(12 / props.packs.length))}>
                {pack}
            </div>
        ))}
       
    </div>

export default Page;