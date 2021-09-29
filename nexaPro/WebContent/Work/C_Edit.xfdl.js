(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("C_Edit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt_01","68","63","202","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("아무거나 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","68","15","115","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<일반 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","68","200","202","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_displaynulltext("읽기 전용입니다");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","68","152","115","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<읽기전용 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","68","328","202","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("비밀번호 edit 입니다");
            obj.set_password("true");
            obj.set_usecontextmenu("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","68","280","115","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<비밀번호 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","68","572","202","57",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_displaynulltext("숫자만 입력가능");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","68","524","162","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<숫자만 허용하는 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","68","453","202","57",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_inputtype("english");
            obj.set_maxlength("4");
            obj.set_displaynulltext("영어만 입력가능");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","68","410","197","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("<영어로만 표기하는 Edit/MaxLength");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","200","290","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("비밀번호표시");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("C_Edit.xfdl", function() {


        this.edt_01_onchanged = function(obj,e)
        {
        	alert(e.prevalue);
        	this.edt_02.set_value(e.postvalue);
        };

        this.chk_01_onclick = function(obj,e)
        {
        	alert(obj.value);
        	this.edt_03.set_password(!obj.value)
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_01.addEventHandler("onchanged",this.edt_01_onchanged,this);
            this.edt_03.addEventHandler("onchanged",this.edt_03_onchanged,this);
        };

        this.loadIncludeScript("C_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
