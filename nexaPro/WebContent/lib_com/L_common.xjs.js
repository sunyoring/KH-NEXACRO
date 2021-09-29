//XJS=L_common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***********************************************************************************************
        * name         : gfn_isNull
        * desc         : Null  여부 체크
        * argument     : sValue(문자열)
        * return Type  : boolean
        ************************************************************************************************/
        this.gfn_isNull = function(sValue){

        	if(new String(sValue).valueOf() == "undefined"){
        		return true;
        	}

        	if(sValue == null){
        		return true;
        	}

        	var v_ChkStr = new String(sValue);



        	if(v_ChkStr == ""){
        		return true;
        	}

        	return false;

        }
        /***********************************************************************************************
        * name         : gfn_url
        * desc         : url 연동
        * argument     :
        * return Type  : strUrl
        ************************************************************************************************/
        this.gfn_url = function(){
        	var strUrl = "http://localhost:8090/nexaPro/";
        	return strUrl;
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
