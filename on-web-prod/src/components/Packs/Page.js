import React from 'react';

const Page = props =>
    <div className='page row justify-content-center font-m'>
        <div className='col-12 text-center pb-5'>
            {props.header}
        </div>
        {props.packs.map((pack, i) => (
            <div key={i} className={'mb-4 col-12 col-lg-' + (props.cols ? props.cols : Math.floor(12 / props.packs.length))}>
                {pack}
            </div>
        ))}
        <div className='col-12 font-s mb-5'>
            {props.footer}
        </div>
    </div>

export default Page;