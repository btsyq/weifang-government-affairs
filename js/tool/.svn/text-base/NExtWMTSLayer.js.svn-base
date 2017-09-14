NExtWMTSLayer = NWMTSLayer.extend({
	_urlConfig:[],
    initialize: function(name, url, options,urlConfig){
        NWMTSLayer.prototype.initialize.call(this, name, url, options);
        this.layerType = "NExtWMTSLayer";
		this._urlConfig = urlConfig;
        //this.setUrl(urlConfig);
    },
    
    setUrl:function (value) {
        this.url = value;
        if(this.serviceMode == "KVP") {
            var turlParams = this.url.split("?");
            this._wmtsUrlParams = null;
            if(turlParams.length == 2) {
                var tmpUrl = turlParams[1];
                var tmpUrlParams = tmpUrl.split("&");
                if(tmpUrlParams.length > 0){
                    var i, len, tmpStr, tmpArr;
                    for(i = 0, len = tmpUrlParams.length; i < len; i++){
                        tmpStr = tmpUrlParams[i];
                        if(!tmpStr || tmpStr.length < 3)
                            continue;
                        tmpArr = tmpStr.split("=");
                        if(tmpArr.length != 2)
                            continue;
                        if(!this._wmtsUrlParams)
                            this._wmtsUrlParams = [];
                        this._wmtsUrlParams[tmpArr[0].toUpperCase()] = tmpArr[1];
                    }
                }
            }
            else{
                if(this.url.charAt(this.url.length - 1) != "?")
                    this.url = this.url + '?';
            }
        }
        else if(this.serviceMode == "RESTFUL"){
            if(this.url.charAt(this.url.length - 1) != "/")
                this.url = this.url + '/';
        }
    },
    
    getUrl:function () {
        return this.url;
    },
    _params: null,
    _getTileUrl: function (z, y, x) {
		this.url = this.searchUrl(z);
        if(!this.url)
            return null;
        var resultUrl = this.url;
		this.setUrl(resultUrl);
        if(this.getServiceMode() == "KVP"){
            if(!this._wmtsUrlParams && (resultUrl.charAt(resultUrl.length - 1) != "?"))
				resultUrl += '?';
            var key, params = this._params;
			params['TILEMATRIX'] = z;
			params['TILEROW'] = y;
			params['TILECOL'] = x;
            for(key in params){
                if(params.hasOwnProperty(key)){
                    if((this._wmtsUrlParams && this._wmtsUrlParams.hasOwnProperty(key)) || params[key] == null)
                        continue;
                    else{
                        if(resultUrl.charAt(resultUrl.length - 1) != "?" && resultUrl.charAt(resultUrl.length - 1) != "&")
                            resultUrl += '&';
                        resultUrl += key + "=" + params[key];
                    }
                }
            }
        }
        else{
            if(resultUrl.charAt(resultUrl.length - 1) != '/')
                resultUrl += "/";
            resultUrl += this.layer + '/' + this.style+ '/' + this.tileMatrixSet + "/" +z + '/' + y + "/" + x + '.' + this.getFormat(null, false); 
        }  
        return encodeURI(resultUrl);
    },
	searchUrl:function (z)
	{
		var resurl = "";
		if(this._urlConfig.length >0)
		{
			for(var i=0; i<this._urlConfig.length; i++)
			{
				var urlobj = this._urlConfig[i];
				var zindexs = urlobj['z'];
				for(var zi=0; zi<zindexs.length; zi++)
				{
					if(z == zindexs[zi])
					{
						var wmtsparams = urlobj['params'];
						this._params = {
							SERVICE: "WMTS",
							REQUEST: "GetTile",
							VERSION: this.version,
							LAYER: wmtsparams['layer'],
							STYLE: wmtsparams['style'],
							TILEMATRIXSET: wmtsparams['tileMatrixSet'],
							FORMAT: wmtsparams['format']
						};
						return urlobj['url'];
					}
				}
			}
		}
		return null;
	}
});