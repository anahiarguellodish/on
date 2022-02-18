import React from 'react';
import $ from 'jquery';


class Tabs extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            index: 0
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event)
    {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        this.setState({index});
        window.scrollTo({
            top: 510,
            behavior: 'smooth'
        });

        


          //alert("llega aqui"+event.target.getAttribute('direccion'));
          window.location.href=event.target.getAttribute('direccion');

    }

    render()
    {
        const {labels, direccion, pages, activation, ...props} = this.props;

        const classes = 'tabs-btn btn btn-lg text-uppercase mx-1 categoria_entrada';
        const buttons = [];
       
        for(let i = 0; i < labels.length; i++) {
            const activeClass = i === activation
                ? 'active'
                : 'inactive';
            buttons.push(
                <button
                    key={i}
                    className={classes + ' ' + activeClass}
                    onClick={this.onButtonClick}
                    data-index={i}
                    inicio={i}
                    direccion={direccion[i]}
                >
                    {labels[i]}
                </button>
            );
        }

        return (
            <div {...props} className='tabs container-fluid py-5'>
                <div className='container-fluid'>
                    <div className='row pb-5 d-none d-lg-block text-center'>
                        <div className='col-12'>
                            {buttons}
                        </div>
                    </div>

                    {buttons.map((button, index) => (
                        <div key={index} className='pack-page row'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 p-0 d-block d-lg-none mb-3'>{button}</div>
                                </div>
                                {index === this.state.index ? pages[index] : ''}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tabs;
