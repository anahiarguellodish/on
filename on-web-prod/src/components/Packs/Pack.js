import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = withRouter(props => (
    <button
        className='btn btn-primary btn-lg w-100 font-l mt-2 mb-4'
        onClick={() => props.history.push(props.path)}
    >
        {props.label}
    </button>
))

const Pack = props =>
    <div className='pack container-fluid'>
        <div className='pack-row-1 row text-center p-4'>
            <div className={'pack-top py-3 col-' + (props.price ? '6' : '12') + ' col-lg-12 align-self-center'}>
                <div className='hasta'>Hasta</div>
                <div className='font-bold font-xxl'>{props.megas}{props.especial}</div>
                <div className='font-l'>{props.megasUnit}</div>
                <div className='capacidad'>{props.capacidad}</div>
            </div>
            {props.price ?
                <div className='py-3 col-6 col-lg-12 align-self-center'>
                    {props.pricePre ? <div className='font-m'>{props.pricePre}</div> : ''}
                    <div>
                        <span className='font-l'>{props.priceUnit}</span><span className='font-bold font-xxl'>{props.price}</span>
                    </div>
                    {props.pricePost ? <div className='font-l'>{props.pricePost}</div> : ''}
                </div> : ''
            }
        </div>
        {props.buttonLabel
            ? <div className='row'>
                <div className='col-12 p-0'>
                    <Button path={props.buttonPath} label={props.buttonLabel}/>
                </div>
            </div>
            : ''
        }
    </div>

export default Pack;