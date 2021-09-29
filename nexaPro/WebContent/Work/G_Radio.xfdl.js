(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("G_Radio");
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
            obj = new Static("sta_01","76","26","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("> 라디오 버튼 기본형태");
            this.addChild(obj.name, obj);

            obj = new Radio("rad_01","76","74","144","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("0");
            obj.set_columncount("2");
            var rad_01_innerdataset = new nexacro.NormalDataset("rad_01_innerdataset", obj);
            rad_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"datacolumn\">여성</Col><Col id=\"codecolumn\">F</Col></Row></Rows>");
            obj.set_innerdataset(rad_01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","238","97","272","249",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_fruit");
            obj.set_codecolumn("NO");
            obj.set_columncount("0");
            obj.set_rowcount("4");
            obj.set_datacolumn("NAME");
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
        this.registerScript("G_Radio.xfdl", function() {

        this.rad_01_onitemchanged = function(obj,e)
        {
        	this.alert("값 선택 확인 : " + obj.value);
        	alert("값 선택 확인 : " + this.rad_01.text);

        	alert(e.posttext  + "  "+ e.postvalue + "  "+ e.pretext + "  "+ e.prevalue );

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.rad_01.addEventHandler("onitemchanged",this.rad_01_onitemchanged,this);
        };

        this.loadIncludeScript("G_Radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
