(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("I_Calendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","35","16","159","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">기본형태");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","35","71","243","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","35","146","159","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(">달력타입");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_02","35","265","243","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Radio("rad_01","35","191","250","74",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var rad_01_innerdataset = new nexacro.NormalDataset("rad_01_innerdataset", obj);
            rad_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">nomal</Col><Col id=\"datacolumn\">nomal</Col></Row><Row><Col id=\"codecolumn\">spin</Col><Col id=\"datacolumn\">spin</Col></Row><Row><Col id=\"codecolumn\">monthonly</Col><Col id=\"datacolumn\">monthonly</Col></Row></Rows>");
            obj.set_innerdataset(rad_01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","40","325","159","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(">달력지역변경");
            this.addChild(obj.name, obj);

            obj = new Radio("rad_03","35","350","365","74",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            var rad_03_innerdataset = new nexacro.NormalDataset("rad_03_innerdataset", obj);
            rad_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">bg_BG</Col><Col id=\"datacolumn\">불가리아</Col></Row><Row><Col id=\"codecolumn\">pl_PL</Col><Col id=\"datacolumn\">폴란드</Col></Row><Row><Col id=\"codecolumn\">ko_KR</Col><Col id=\"datacolumn\">대한민국</Col></Row><Row><Col id=\"codecolumn\">ar_AE</Col><Col id=\"datacolumn\">아랍에미리트</Col></Row></Rows>");
            obj.set_innerdataset(rad_03_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_03","35","424","243","156",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_locale("ko_KR");
            obj.set_type("monthonly");
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
        this.registerScript("I_Calendar.xfdl", function() {

        this.rad_01_onitemchanged = function(obj,e)
        {
        	var radioValue = this.rad_01.value;
        	this.cal_02.set_type(radioValue);
        };

        this.rad_03_onitemchanged = function(obj,e)
        {
        		var radioValue = this.rad_03.value;
        		this.cal_03.set_locale(radioValue);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.rad_01.addEventHandler("onitemchanged",this.rad_01_onitemchanged,this);
            this.rad_03.addEventHandler("onitemchanged",this.rad_03_onitemchanged,this);
        };

        this.loadIncludeScript("I_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
