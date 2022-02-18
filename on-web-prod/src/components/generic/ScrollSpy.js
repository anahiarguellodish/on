import React from 'react';

const ScrollSpySection = props => (
    <div id={props.id}>{props.children}</div>
)

class ScrollSpy extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event)
    {
        const id = event.currentTarget.getAttribute('data-id');
        const element = document.getElementById(id);

        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }

    makeLink(child)
    {
        const id = child.props.id;
        const label = child.props.label;
        return (
            <div key={id}
            className='scroll-spy-link'
            data-id={id} onClick={this.onClick}>
                {label}
            </div>
        );
    }

    render()
    {
        const props = this.props;
        const children = props.children;

        const back = props.history && props.history.goBack ?
            <div onClick={props.history.goBack} className='btn-back'>
                <span className="fas fa-arrow-left"></span> Atrás
            </div> :
            null;

        const links = [];
        children.map(child => {
            if(child.props.id)
                links.push(this.makeLink(child));
            return null;
        });

        return (
            <div className='scroll-spy row'>
                <div className='scroll-spy-links col-12 col-sm-3 my-3'>
                    <div className='sticky-top'>
                        {back}
                        {links}
                        {back}
                    </div>
                </div>
                <div className='scroll-spy-content col-12 col-sm-9'>
                    {children}
                </div>
            </div>
        );
    }
}

export { ScrollSpy, ScrollSpySection };