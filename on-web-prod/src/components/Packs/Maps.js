import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = withRouter(props => (
    <button
        className='btn btn-secondary btn-lg d-block text-bold'
        onClick={() => props.history.push(props.path)}
    >
        {props.label}
    </button>
))

const Pack = props =>

    <div className='pack container-fluid'>
      <div className='row'>


                <div className='col-12 p-0 center'>
                    <div className="my-4 numero text-center font-s">DÉJANOS TUS DATOS <span className="my-4  text-center font-s text-gray">PARA CONFIRMAR LA COBERTURA EN TU DOMICILIO</span></div>
                    <Button path={props.url} label="VALIDAR COBERTURA"/>
                    <div className="my-4  text-center font-s text-gray">o llámanos al <span className="numero font-m"><a href="tel:5555123123">55 55 123 123</a></span></div>
                </div>
        </div>
        <div class="ON">
        <table className='table on'>
            <thead className="cabezal">
              <tr>
                <th scope="col" colspan="2">{props.imagen}{props.header}{props.leyenda2}</th>
              </tr>
            </thead>
                {props.data_table}
           
        </table>
        </div>
        <div className="my-4 font-s text-gray">{props.leyenda}</div>
     

    </div>
    
export default Pack;
