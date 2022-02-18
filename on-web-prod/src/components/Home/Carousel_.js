import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import loadJs from '../../helpers/loadJS';

import logoWhite from '../../media/ON_logo_blanco.png';
import play from '../../media/play.png';

import banner from '../../media/Banner.png';



class Carousel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.modal = React.createRef();
    }

    componentDidMount()
    {
        loadJs('https://www.youtube.com/iframe_api', (err, status) => {
            if(err) return console.error(err);

            const modal = this.modal.current;
            const content = modal.querySelector('.modal-content');

            window.YT.ready(e => {
                const player = new window.YT.Player(content, {
                    height: '390', width: '640',
                    videoId: '7xFSGKkZurk',
                    events: {
                        'onStateChange': onPlayerStateChange
                      }


                });

                function onPlayerStateChange(event) {
                if (event.data == window.YT.PlayerState.ENDED) {
                   player.stopVideo(); 
                  $('#promo-video-modal').modal('hide');
                }

                if (event.data == window.YT.PlayerState.PAUSED) {
                     setTimeout(function(){
                                 player.stopVideo(); 
                                 $('#promo-video-modal').modal('hide');
                     }, 10000);
                  
                }
              }


                $(modal).on('show.bs.modal', event => {
                    player.playVideo();
                    setTimeout(function(){ 
                        player.stopVideo(); 
                        $('#promo-video-modal').modal('hide');
                    }, 60000);
                });

                $(modal).on('hide.bs.modal', event => {
                    player.stopVideo();
                });

             
            });
        });

       

    }

    render()
    {
        return (
            <div id="carousel-main" className="carousel slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner bg-primary text-light" role="listbox">
                    <div className="container">

                        <div className="carousel-item active">

                            <div className='top-flex'>
                                <div className='copy'>
                                    <div className='t-2'>¿Para ti qué es</div>
                                    <div className='t-1'>ponerte<img className="logo-img" src={logoWhite} alt="ponte on logo"/>?</div>
                                </div>
                                <div className='play' data-toggle='modal' data-target='#promo-video-modal'>
                                    <img src={play} className='play-icon' alt='play'/>
                                    <div className='t-4'>Descúbrelo aquí</div>
                                </div>
                            </div>
                        </div>

                        <div className='action'>
                            <Link to='/contrata' className='btn btn-lg btn-light t-3 text-primary font-bold'>#PonteON</Link>
                        </div>
                    </div>

                    <div className="container">

                        <img scr="{banner}" alt='banner'/>


                    </div>

                    <div className="caption t-5">
                       
                    </div>

                    <a className="left carousel-control-prev" href="#carousel-main" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control-next" href="#carousel-main" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                    <div id='promo-video-modal' className='modal' tabIndex='-1' role='dialog' ref={this.modal}>
                        <div className='modal-dialog' role='document'>
                            <div className='modal-content'></div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Carousel;
