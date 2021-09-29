(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("J_Container");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","15","25","175","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">Div 요소");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","34","76","372","249",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#b0e7e5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","28","65","168","53",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_01","214","65","109","53",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.div_01.addChild(obj.name, obj);

            obj = new Tab("Tab00","445","76","345","247",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","25","8","201","74",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("1페이지 입니다.");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_01","28","114","153","65",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_01","189","114","96","59",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("내부");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tap2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","39","39","138","44",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("2페이지 입니다.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","437","20","175","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(">Tap 요소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","672","10","98","52",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("외부");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_01","34","350","183","238",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#ed77e3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","28","22","130","24",null,null,null,null,null,null,this.pdv_01.form);
            obj.set_taborder("0");
            obj.set_text("Menu01");
            this.pdv_01.addChild(obj.name, obj);

            obj = new Button("btn_02","28","100","130","24",null,null,null,null,null,null,this.pdv_01.form);
            obj.set_taborder("1");
            obj.set_text("Menu02");
            this.pdv_01.addChild(obj.name, obj);

            obj = new Button("btn_03","28","174","130","24",null,null,null,null,null,null,this.pdv_01.form);
            obj.set_taborder("2");
            obj.set_text("Menu03");
            this.pdv_01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","255","356","242","230",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("myHobbies");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","298","390","102","146",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">축구</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">농구</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">배구</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","526","383","154","61",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("팝업");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","528","468","152","63",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("J_Container.xfdl", function() {
        /*
        	컨테이너 컴포넌트
        	Div, Tab, PopupDiv

        	Div 요소 안에있는 다른 컴포넌트를 참조할때
        	해당 div 를 먼저 찾은뒤 this.div 아이디.form.컴포넌트 아이디 형태로 접근


        */

        this.div_01_btn_01_onclick = function(obj,e)
        {
        	var str = this.div_01.form.edt_01.value;
        	alert(str);
        };

        this.btn_01_onclick = function(obj,e)
        {
        	var str  = this.Tab00.Tabpage1.form.edt_01.value;
        	this.fn_out(str);

        };

        this.fn_out = function(strVal){
        	alert(strVal);
        }

        this.Tab00_Tabpage1_btn_01_onclick = function(obj,e)
        {
        		var str  = this.Tab00.Tabpage1.form.edt_01.set_value("탭에 값을 셋팅");

        };



        this.btn_com_click = function(obj,e)
        {

        this.pdv_01.closePopup(obj.text);

        };

        this.btn_02_onclick = function(obj,e)
        {
        	var x = parseInt(obj.width)-60;
        	var y = parseInt(obj.height);

        	this.pdv_01.trackPopupByComponent(obj,x,y,200,300,"fn_callback");
        };

        this.fn_callback = function(popupId,param){

        	alert(popupId);
        	this.edt_01.set_value(param);

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_01.form.btn_01.addEventHandler("onclick",this.div_01_btn_01_onclick,this);
            this.Tab00.Tabpage1.form.btn_01.addEventHandler("onclick",this.Tab00_Tabpage1_btn_01_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.pdv_01.form.btn_01.addEventHandler("onclick",this.btn_com_click,this);
            this.pdv_01.form.btn_02.addEventHandler("onclick",this.btn_com_click,this);
            this.pdv_01.form.btn_03.addEventHandler("onclick",this.btn_com_click,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
        };

        this.loadIncludeScript("J_Container.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
