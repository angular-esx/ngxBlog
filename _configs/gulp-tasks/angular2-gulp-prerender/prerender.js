import * as ngUniversal from 'angular2-universal';
import * as through from 'through2';
import * as gutil from 'gutil';

export function prerender(options) {
    function transform(file, enc, cb) {
        if (file.isStream()) {
            return cb(new gutil.PluginError('angular2-gulp-prerender', 'Streaming is not supported'));
        }
        let template = file.contents.toString();
        let _options = options;
        let _template = template;
        let _Bootloader = ngUniversal.Bootloader;
        let bootloader = _options.bootloader;
        if (_options.bootloader) {
            bootloader = _Bootloader.create(_options.bootloader);
        }
        else {
            let doc = _Bootloader.parseDocument(_template);
            _options.document = doc;
            _options.template = _options.template || _template;
            bootloader = _Bootloader.create(_options);
        }
        return bootloader.serializeApplication()
            .then(function (html) {
            file.contents = new Buffer(html);
            cb(null, file);
        });
    }
    return through.obj(transform);
}

export function GulpAngular2Render(options) {
    console.warn('DEPRECATION WARNING: `GulpAngular2Render` is no longer supported and will be removed in next release. use `prerender`');
    return prerender(options);
}

export function Prerender(options) {
    console.warn('DEPRECATION WARNING: `Prerender` is no longer supported and will be removed in next release. use `prerender`');
    return prerender(options);
}
