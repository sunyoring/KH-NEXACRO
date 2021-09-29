(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("H_Combo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fruit", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">01</Col><Col id=\"NAME\">망고</Col></Row><Row><Col id=\"NO\">02</Col><Col id=\"NAME\">수박</Col></Row><Row><Col id=\"NO\">03</Col><Col id=\"NAME\">바나나</Col></Row><Row><Col id=\"NO\">04</Col><Col id=\"NAME\">파인애플</Col></Row><Row><Col id=\"NO\">05</Col><Col id=\"NAME\">복숭아</Col></Row><Row><Col id=\"NO\">06</Col><Col id=\"NAME\">딸기</Col></Row><Row><Col id=\"NO\">07</Col><Col id=\"NAME\">오렌지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","34","39","155","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">기본 콤보박스");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_01","34","89","206","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("--선택하세요--");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("NO");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","283","89","154","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
        this.registerScript("H_Combo.xfdl", function() {

        this.cbo_01_onitemchanged = function(obj,e)
        {
        	this.edt_01.set_value(this.cbo_01.value);
        	alert("code: "+ obj.value + ",name :" + obj.text);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cbo_01.addEventHandler("onitemchanged",this.cbo_01_onitemchanged,this);
        };

        this.loadIncludeScript("H_Combo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
