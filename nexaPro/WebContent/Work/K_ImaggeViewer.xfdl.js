(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("K_ImaggeViewer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_image", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">imagerc::cat.jpg</Col><Col id=\"DATA\">냥</Col></Row><Row><Col id=\"CODE\">imagerc::dog.jpg</Col><Col id=\"DATA\">멍</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img_01","42","44","283","251",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::cat.jpg\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_02","42","320","283","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","353","320","177","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도넛");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2","353","420","177","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아이스크림");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_01","388","91","222","62",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_image");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
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
        this.registerScript("K_ImaggeViewer.xfdl", function() {

        this.btn_01_onclick = function(obj,e)
        {
        	this.img_02.set_image("url('imagerc::donut.png')");
        	this.img_02.set_stretch('fit');
        };

        this.btn_2_onclick = function(obj,e)
        {
        	this.img_02.set_image("url('imagerc::icecream.png')");
        	this.img_02.set_stretch('fixaspectratio');
        };


        this.cbo_01_onitemchanged = function(obj,e)
        {
        	var imgUrl = this.cbo_01.value; //코드
        	this.img_02.set_image("url('"+imgUrl+"')");
        	this.img_02.set_stretch('fit');

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.img_01.addEventHandler("onclick",this.img_01_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.btn_2.addEventHandler("onclick",this.btn_2_onclick,this);
            this.cbo_01.addEventHandler("onitemchanged",this.cbo_01_onitemchanged,this);
        };

        this.loadIncludeScript("K_ImaggeViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
