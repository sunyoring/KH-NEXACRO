package com.kh.employee.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.common.NexaDatasetCom;
import com.kh.employee.model.service.EmployeeService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * Servlet implementation class SelectEmployee
 */
@WebServlet("/selectEmp")
public class SelectEmployee extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectEmployee() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);

		try {
			req.receiveData();// 요청값 받아오기
		} catch (PlatformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 받아온 요청값중에 사용할 데이터 추출하기
		PlatformData in_data = req.getData();

		// 데이터셋 받아오기
		DataSet ds = in_data.getDataSet("ds_search");
		System.out.println(">>> ds : " + ds.getRowCount());
		//System.out.println(ds.getColumn(""));
		PlatformData out_data = new PlatformData();

		int errorCode =  0;
		String errorMsg = "START";
		Map iMap = new HashMap();
		
		iMap.put("NAME", ds.getString(0,"NAME"));
		iMap.put("DEPT", ds.getString(0,"DEPT"));
		
		try {
			List list = new EmployeeService().selectList(iMap);
			/*
			 * DataSet dsO = new DataSet("ds_emp");
			 * 
			 * dsO.addColumn("EMP_ID", DataTypes.STRING , 256); dsO.addColumn("EMP_ID",
			 * DataTypes.STRING , 256); dsO.addColumn("EMP_ID", DataTypes.STRING , 256);
			 * dsO.addColumn("EMP_ID", DataTypes.STRING , 256); 
			 * for(int i = 0 ; i
			 * <list.size(); i++) { int row = ds.newRow(); ds.set(row, "EMP_ID",map.get("");
			 * ds.set(row, "EMP_ID",map.get(""); ds.set(row, "EMP_ID",map.get("");
			 * ds.set(row, "EMP_ID",map.get("");
			 * 
			 * }
			 */

			out_data.addDataSet(new NexaDatasetCom().addDataset(list,"ds_emp"));
			errorCode = 0;
			errorMsg = "불러오기 성공";
			
		} catch (SQLException e) {

			errorCode = -1;
			errorMsg = e.getMessage();
			
			e.printStackTrace();
		}
		
		VariableList varList = out_data.getVariableList();
		//데이터를 넘기기 위해 값을 담아줄 객체
		
		varList.add("ErrorCode", errorCode);
		varList.add("ErrorMsg", errorMsg);
		
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML ,"UTF-8");
		//리스폰스 객체
		res.setData(out_data);
		//setData로 넘겨준다.
		try {
			res.sendData();
		} catch (PlatformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
