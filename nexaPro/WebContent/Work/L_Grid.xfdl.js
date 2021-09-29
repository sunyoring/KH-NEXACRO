(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("L_Grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BONUS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMP_ID\">200</Col><Col id=\"EMP_NAME\">선동일</Col><Col id=\"EMP_NO\">891212-462408       </Col><Col id=\"EMAIL\">sun_di@kh.or.kr</Col><Col id=\"PHONE\">01099546325</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J1</Col><Col id=\"SAL_LEVEL\">S1</Col><Col id=\"SALARY\">8000000</Col><Col id=\"BONUS\">0.3</Col><Col id=\"HIRE_DATE\">90/02/06</Col><Col id=\"ENT_YN\">N</Col></Row><Row><Col id=\"EMP_ID\">201</Col><Col id=\"EMP_NAME\">송종기</Col><Col id=\"EMP_NO\">631106-1548654</Col><Col id=\"EMAIL\">song_jk@kh.or.kr</Col><Col id=\"PHONE\">01045686656</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J2</Col><Col id=\"SAL_LEVEL\">S1</Col><Col id=\"SALARY\">6000000</Col><Col id=\"MANAGER_ID\">200</Col><Col id=\"HIRE_DATE\">01/09/01</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">202</Col><Col id=\"EMP_NAME\">노옹철</Col><Col id=\"EMP_NO\">861015-1356452</Col><Col id=\"EMAIL\">no_hc@kh.or.kr</Col><Col id=\"PHONE\">01066656263</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J2</Col><Col id=\"SAL_LEVEL\">S4</Col><Col id=\"SALARY\">3700000</Col><Col id=\"MANAGER_ID\">201</Col><Col id=\"HIRE_DATE\">01/01/01</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">203</Col><Col id=\"EMP_NAME\">송은희</Col><Col id=\"EMP_NO\">631010-2653546</Col><Col id=\"EMAIL\">song_eh@kh.or.kr</Col><Col id=\"PHONE\">01077607879</Col><Col id=\"DEPT_CODE\">D6</Col><Col id=\"JOB_CODE\">J4</Col><Col id=\"SAL_LEVEL\">S5</Col><Col id=\"SALARY\">2800000</Col><Col id=\"MANAGER_ID\">204</Col><Col id=\"HIRE_DATE\">96/05/03</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">204</Col><Col id=\"EMP_NAME\">유재식</Col><Col id=\"EMP_NO\">660508-1342154</Col><Col id=\"EMAIL\">yoo_js@kh.or.kr</Col><Col id=\"PHONE\">01099999129</Col><Col id=\"DEPT_CODE\">D6</Col><Col id=\"JOB_CODE\">J3</Col><Col id=\"SAL_LEVEL\">S4</Col><Col id=\"SALARY\">3400000</Col><Col id=\"BONUS\">0.2</Col><Col id=\"MANAGER_ID\">200</Col><Col id=\"HIRE_DATE\">00/12/29</Col><Col id=\"ENT_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D1</Col><Col id=\"DEPT_NAME\">인사관리부</Col></Row><Row><Col id=\"DEPT_CD\">D2</Col><Col id=\"DEPT_NAME\">회계관리부</Col></Row><Row><Col id=\"DEPT_CD\">D3</Col><Col id=\"DEPT_NAME\">마케팅부</Col></Row><Row><Col id=\"DEPT_CD\">D4</Col><Col id=\"DEPT_NAME\">국내영업부</Col></Row><Row><Col id=\"DEPT_CD\">D5</Col><Col id=\"DEPT_NAME\">해외영업1부</Col></Row><Row><Col id=\"DEPT_CD\">D6</Col><Col id=\"DEPT_NAME\">해외영업2부</Col></Row><Row><Col id=\"DEPT_CD\">D7</Col><Col id=\"DEPT_NAME\">해외영업3부</Col></Row><Row><Col id=\"DEPT_CD\">D8</Col><Col id=\"DEPT_NAME\">기술지원부</Col></Row><Row><Col id=\"DEPT_CD\">D9</Col><Col id=\"DEPT_NAME\">총무부</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","38","38","1012","212",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Email\"/><Cell col=\"3\" text=\"Phone\"/><Cell col=\"4\" text=\"Dept.\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Bonus\"/><Cell col=\"7\" text=\"Manager\"/><Cell col=\"8\" text=\"Hire Date\"/><Cell col=\"9\" text=\"Ent Date\"/><Cell col=\"10\" text=\"Ent YN\" displaytype=\"checkboxcontrol\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:EMAIL\" tooltiptext=\"bind:EMAIL\"/><Cell col=\"3\" text=\"bind:PHONE\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"###-####-####\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:BONUS\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_emp\" combocodecol=\"EMP_ID\" combodatacol=\"EMP_NAME\"/><Cell col=\"8\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"9\" text=\"bind:ENT_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"10\" text=\"bind:ENT_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","56","286","156","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","56","352","156","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","56","418","156","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MaskEdit00","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo00","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("L_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
