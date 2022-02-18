const loadJS = (src, cb) =>
{
    if(window.loadedSources && window.loadedSources[src])
        return cb && cb(false, {status: 'redundant'});

    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    script.addEventListener('load', function() {
    	cb && cb(false, {status: 'ok'});
    });
    script.addEventListener('error', function(e) {
        cb && cb(e, {status: 'error'})
    });

    document.body.appendChild(script);

    if(typeof window.loadedSources === 'undefined')
        window.loadedSources = {};

    window.loadedSources[src] = true;
}

export default loadJS;