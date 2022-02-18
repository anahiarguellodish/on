import React from 'react';

class AccordionItem extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick()
    {
        this.setState(previousState => (
            { isExpanded: !previousState.isExpanded }
        ));
    }

    render()
    {
        const isExpanded = this.state.isExpanded;

        const classes = {
            item: 'accordion-item p-3 font-m',
            title: 'accordion-item-title p-3 ' + (isExpanded ? ' expanded text-primary' : ''),
            bullet: 'fas ' + (isExpanded ? 'fa-minus-circle' : 'fa-plus-circle') + ' d-inline-block pr-2 font-m',
            content: 'accordion-item-content px-5 ' + (isExpanded ? ' d-block' : ' d-none')
        };

        return (
            <div className={classes.item}>
                <div className={classes.title} onClick={this.onClick}>
                    <span className={classes.bullet}></span>
                    {this.props.title}
                </div>
                <div className={classes.content}>{this.props.children}</div>
            </div>
        );
    }
}

const Accordion = props =>
{
    return (
        <div className='accordion'>
            {props.children}
        </div>
    );
}

export { Accordion, AccordionItem }