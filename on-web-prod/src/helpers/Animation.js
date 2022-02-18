class Animation
{
    constructor()
    {
        this.scenes = [];
        this.duration = 0;
    }

    start()
    {
        for(let scene of this.scenes)
        {
            const el = scene[0];
            const keyframes = scene[1];
            const duration = scene[2];
            const delay = scene[3];

            const animation =
                keyframes + ' ' +
                duration + 's ' +
                delay + 's ' +
                'forwards';

            if(!el.style.animation)
                el.style.animation = animation;
            else
                el.style.animation += ', ' + animation;
        }

        setTimeout(() => {
            for(let scene of this.scenes)
                scene[0].style.animation = '';
            
            setTimeout(() => {
                this.start();
            }, 50);
        }, this.duration * 1000);
    }

    play(el, keyframes, seconds)
    {
        this.scenes.push([el, keyframes, seconds, this.duration]);
        this.duration += seconds;

        return this;
    }

    pause(seconds)
    {
        this.duration += seconds;

        return this;
    }
}

export default Animation;