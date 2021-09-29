(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("B_Static");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","117","104","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static test\r\n여러 줄 쓰기도 가능\r\n컨트롤 엔터");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","329","105","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼입니다");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_01","110","182","170","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","329","237","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("edit button");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","110","320","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
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
        this.registerScript("B_Static.xfdl", function() {

        this.btn_01_onclick = function(obj,e)
        {
        nexacro.getApplication().trace(obj.id);
        	nexacro.getApplication().trace(e);
        };
        // 코드 기술

        	// this : 현재 작업 중인 Form
        	// Button00_onclick : 함수 이름
        	//		Button00 : 클릭하는 버튼의 아이디
        	// 		onclick : 이벤트 종류
        	// function : 클릭 시 작동될 콜백 함수
        	// obj : 클릭한 버튼 객체
        	// e : 이벤트 정보를 가진 객체


        this.btn_02_onclick = function(obj,e)
        {
        	var str = this.edt_01.value;
        	alert(str);

        	this.edt_01.set_value("춥다 겨울이 온다");
        	this.sta_02.set_text(str);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
            this.sta_02.addEventHandler("onclick",this.Static01_onclick,this);
        };

        this.loadIncludeScript("B_Static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
