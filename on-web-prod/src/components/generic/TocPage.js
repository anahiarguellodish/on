import React from 'react';

const TocLink = props => (
    <div
        className='toc-page-link'
        onClick={() => window.scrollTo({top:0})}
    >
        {props.children}
    </div>
)

const TocPage = props => {
    const back = props.history && props.history.goBack ?
        <div
            onClick={
                () => {
                    window.scrollTo({top:0});
                    props.history.goBack();
                }
            }
            className='btn-back'
        >
            <span className="fas fa-arrow-left"></span> Atrás
        </div> :
        null;

    return (
        <div className='toc-page row'>
            <div className='toc-page-links col-12 col-sm-3 my-3'>
                <div className='sticky-top'>
                    {back}
                    {props.links.map((link, i) => <TocLink key={i}>{link}</TocLink>)}
                    {back}
                </div>
            </div>
            <div className='toc-page-content col-12 col-sm-9'>
                {props.children}
            </div>
        </div>
    );
}

export default TocPage;