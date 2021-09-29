(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("D_MaskEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("msk_01","93","40","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","93","-17","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("> 기본MaskEdit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","93","90","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_03","93","180","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_format("######-{#######}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","93","123","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(">주민번호 뒷자리 * 표시");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_04","253","280","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_format("@@@@");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","93","220","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("> MaskEdit표기법(String)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","93","270","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("@@@@ : 모든 문자기능");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_08","253","520","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("AAAA");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_05","93","510","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("AAAA:영대문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_05","253","340","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00","93","330","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("####: 숫자가능(0~9)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_06","253","400","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("****");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","93","390","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("****: 영어 대소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_07","253","460","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_format("9999");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_02","93","450","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("9999: 영어, 숫자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_09","253","580","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("aaaa ");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00","93","570","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("aaaa : 영소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_10","253","640","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("A{AA}A");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","93","630","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("A{AA}A:비밀번호표기");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_11","660","280","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("number");
            obj.set_format("####");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_03","550","270","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_12","660","340","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("#.##9");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","547","330","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("#.##9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_13","660","400","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_format("#.##0");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01","547","390","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("#.##0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_00","550","220","167","60",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("> MaskEdit표기법(Number)");
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
        this.registerScript("D_MaskEdit.xfdl", function() {

        this.sta_04_03_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_04_02.addEventHandler("onclick",this.sta_04_02_onclick,this);
            this.sta_04_03.addEventHandler("onclick",this.sta_04_03_onclick,this);
        };

        this.loadIncludeScript("D_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
