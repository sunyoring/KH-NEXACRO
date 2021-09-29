package com.kh.employee.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.employee.model.service.EmployeeService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * Servlet implementation class SaveEmployee
 */
@WebServlet("/saveEmp")
public class SaveEmployee extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SaveEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		int errorCode = 0;
		String errorMsg = "START";

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
		DataSet ds = in_data.getDataSet("ds_emp");
		System.out.println(">>> ds : " + ds.getRowCount());

		EmployeeService employeeService = new EmployeeService();

		try {

			int result = 0;
			for (int i = 0; i < ds.getRowCount(); i++) {
				int rowType = ds.getRowType(i);
				System.out.println(i + " 번째 rowType" + rowType);

				if (rowType == DataSet.ROW_TYPE_INSERTED) {

					Map newMap = this.createMap(i, ds);

					System.out.println(">>>>>>>>>Insert  " + newMap);

					result = employeeService.insertEmployee(newMap);

					if (result == 0) {
						throw new Exception();
					}
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					Map newMap = this.createMap(i, ds);

					System.out.println(">>>>>>>>> Update  " + newMap);

					result = employeeService.updateEmployee(newMap);

					if (result == 0) {
						throw new Exception();
					}

				}
			}

			for (int d = 0; d < ds.getRemovedRowCount(); d++) {

				String del_id = ds.getRemovedStringData(d, "EMP_ID").toString();
				result = employeeService.deleteEmployee(del_id);

				System.out.println(del_id + (result > 0 ? "삭제성공" : "삭제실패"));

			}

			errorCode = 0;
			errorMsg = "성공";

		} catch (Exception e) {
			errorCode = -1;
			errorMsg = "실패";
			e.printStackTrace();

		}
		PlatformData out_data = new PlatformData();

		VariableList varList = out_data.getVariableList();

		varList.add("ErrorCode", errorCode);
		varList.add("ErrorMsg", errorMsg);

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

		res.setData(out_data);

		try {
			res.sendData();
		} catch (PlatformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private Map createMap(int i, DataSet ds) {

		Map newMap = new HashMap();
		newMap.put("EMP_ID", dsGet(ds, i, "EMP_ID"));
		newMap.put("EMP_NAME", dsGet(ds, i, "EMP_NAME"));
		newMap.put("EMP_NO", dsGet(ds, i, "EMP_NO"));
		newMap.put("EMAIL", dsGet(ds, i, "EMAIL"));
		newMap.put("PHONE", dsGet(ds, i, "PHONE"));
		newMap.put("DEPT_CODE", dsGet(ds, i, "DEPT_CODE"));
		newMap.put("JOB_CODE", dsGet(ds, i, "JOB_CODE"));
		newMap.put("MANAGER_ID", dsGet(ds, i, "MANAGER_ID"));
		if (ds.getString(i, "HIRE_DATE") != null) {
			String tempDate = ds.getString(i, "HIRE_DATE");
			// yyyy-MM-dd
			if (tempDate.length() == 8) {
				String year = tempDate.substring(0, 4);
				String month = tempDate.substring(4, 6);
				String date = tempDate.substring(6, 8);
				newMap.put("HIRE_DATE", year + "-" + month + "-" + date);

			} else {
				newMap.put("HIRE_DATE", tempDate.substring(0, 10));
			}
		} else {

			newMap.put("HIRE_DATE", null);
		}
		if (ds.getString(i, "ENT_DATE") != null) {
			String tempDate = ds.getString(i, "ENT_DATE");

			if (tempDate.length() == 8) {
				String year = tempDate.substring(0, 4);
				String month = tempDate.substring(4, 6);
				String date = tempDate.substring(6, 8);
				newMap.put("ENT_DATE", year + "-" + month + "-" + date);

			} else {
				newMap.put("ENT_DATE", tempDate.substring(0, 10));
			}
		} else {

			newMap.put("ENT_DATE", null);

		}
		newMap.put("ENT_YN", dsGet(ds, i, "ENT_YN"));

		newMap.put("SAL_LEVEL", dsGet(ds, i, "SAL_LEVEL"));
		newMap.put("SALARY", Integer.parseInt(dsGet(ds, i, "SALARY").equals("") ? "0" : dsGet(ds, i, "SALARY")));
		newMap.put("BONUS", Double.parseDouble(dsGet(ds, i, "BONUS").equals("") ? "0" : dsGet(ds, i, "BONUS")));

		return newMap;

	}

	// nexacro dataset 값 가져오는 메소드
	private String dsGet(DataSet ds, int rowNum, String colid) {
		// TODO Auto-generated method stub

		String value;
		value = ds.getString(rowNum, colid);
		if (value == null)
			return "";
		else
			return value;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
