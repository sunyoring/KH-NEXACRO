package com.kh.employee.model.service.dao;

import static com.kh.common.JDBCTemplate.close;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmployeeDAO {

	public List selectList(Connection con, Map iMap) throws SQLException {

		
		
		ArrayList list = new ArrayList();
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		
		String sql = "SELECT * FROM EMPLOYEE WHERE EMP_NAME LIKE '%'||Nvl(?,'')||'%' ";
		if(!iMap.get("DEPT").toString().equals("ALL")) {
			
			sql+= "AND DEPT_CODE LIKE '%'||Nvl(?,'')||'%' ORDER BY EMP_ID";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, (String) iMap.get("NAME"));
			pstmt.setString(2, (String) iMap.get("DEPT"));
		}else {
			
			sql+= "ORDER BY EMP_ID";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, (String) iMap.get("NAME"));
		}
		
		rset = pstmt.executeQuery();
		
		while(rset.next()) {
			Map nMap = new HashMap();
			
            nMap.put("EMP_ID",rset.getString("EMP_ID"));
            nMap.put("EMP_NAME",rset.getString("EMP_NAME"));
            nMap.put("EMP_NO",rset.getString("EMP_NO"));
            nMap.put("EMAIL",rset.getString("EMAIL"));
            nMap.put("PHONE",rset.getString("PHONE"));
            nMap.put("DEPT_CODE",rset.getString("DEPT_CODE"));
            nMap.put("JOB_CODE",rset.getString("JOB_CODE"));
            nMap.put("SAL_LEVEL",rset.getString("SAL_LEVEL"));
            nMap.put("SALARY",rset.getInt("SALARY"));
            nMap.put("BONUS",rset.getDouble("BONUS"));
            nMap.put("MANAGER_ID",rset.getString("MANAGER_ID"));
            nMap.put("HIRE_DATE",rset.getString("HIRE_DATE"));
            nMap.put("ENT_DATE",rset.getString("ENT_DATE"));
            nMap.put("ENT_YN",rset.getString("ENT_YN"));
            
            
            list.add(nMap);  
		
			
		}
		
		close(rset);
		close(pstmt);
		
		return list;
	}

	 public int insertEmployee(Connection con, Map newMap)throws Exception {
	      int result = 0;
	      PreparedStatement pstmt = null;
	      String sql = "INSERT INTO EMPLOYEE" +
	    		    " (EMP_ID, EMP_NAME, EMP_NO, EMAIL, PHONE, DEPT_CODE, SALARY, BONUS, MANAGER_ID, HIRE_DATE, ENT_DATE, ENT_YN, JOB_CODE, SAL_LEVEL)" +
	    		    " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	      
	      try {
	          System.out.println(newMap);

	         pstmt = con.prepareStatement(sql);
	         System.out.println(sql);
	         pstmt.setString(1, (String) newMap.get("EMP_ID"));
	         pstmt.setString(2, (String) newMap.get("EMP_NAME"));
	         pstmt.setString(3, (String) newMap.get("EMP_NO"));
	         pstmt.setString(4, (String) newMap.get("EMAIL"));
	         pstmt.setString(5, (String) newMap.get("PHONE"));
	         pstmt.setString(6, (String) newMap.get("DEPT_CODE"));
	         pstmt.setInt(7, Integer.parseInt( newMap.get("SALARY").toString()));
	         pstmt.setDouble(8, Double.parseDouble( newMap.get("BONUS").toString()));
	         pstmt.setString(9, (String) newMap.get("MANAGER_ID"));
	         if(newMap.get("HIRE_DATE")!=null) {
	             pstmt.setDate(10, Date.valueOf(newMap.get("HIRE_DATE").toString()));

	         }else {
	        	 pstmt.setDate(10, null);
	         }
	         if(newMap.get("ENT_DATE")!=null) {
	             pstmt.setDate(11, Date.valueOf(newMap.get("ENT_DATE").toString()));

	         }else {
	        	 pstmt.setDate(11, null);
	         }      
	         pstmt.setString(12, (String) newMap.get("ENT_YN"));
	         pstmt.setString(13, "J1");
	         pstmt.setString(14, "S1");
	          result = pstmt.executeUpdate();

	      } catch (SQLException e) {
	         e.printStackTrace();
	      } finally {
	         close(pstmt);
	      }
	      System.out.println(result);
	      return result;
	   }

	   public int updateEmployee(Connection con, Map newMap)throws Exception {
	      int result = 0;
	      System.out.println(newMap);

	      PreparedStatement pstmt = null;
	      String sql = "UPDATE EMPLOYEE SET "
	               + "EMP_NAME = ? , "
	               + "EMP_NO = ? , "
	               + "EMAIL = ? , "
	               + "PHONE = ? , "
	               + "DEPT_CODE = ? , "
	               + "SALARY = ? , "
	               + "BONUS = ? , "
	               + "MANAGER_ID = ?, "
	               + "HIRE_DATE = ? , "
	               + "ENT_DATE = ? , "
	               + "ENT_YN = ? "
	               + "WHERE EMP_ID = ? ";

	      try {
	         pstmt = con.prepareStatement(sql);
	         pstmt.setString(1, (String) newMap.get("EMP_NAME"));
	         pstmt.setString(2, (String) newMap.get("EMP_NO"));
	         pstmt.setString(3, (String) newMap.get("EMAIL"));
	         pstmt.setString(4, (String) newMap.get("PHONE"));
	         pstmt.setString(5, (String) newMap.get("DEPT_CODE"));
	         pstmt.setInt(6, Integer.parseInt( newMap.get("SALARY").toString()));
	         pstmt.setDouble(7, Double.parseDouble( newMap.get("BONUS").toString()));
	         pstmt.setString(8, (String) newMap.get("MANAGER_ID"));
	         if(newMap.get("HIRE_DATE")!=null) {
	             pstmt.setDate(9, Date.valueOf(newMap.get("HIRE_DATE").toString()));

	         }else {
	        	 pstmt.setDate(9, null);
	         }
	         if(newMap.get("ENT_DATE")!=null) {
	             pstmt.setDate(10, Date.valueOf(newMap.get("ENT_DATE").toString()));

	         }else {
	        	 pstmt.setDate(10, null);
	         }
	         pstmt.setString(11, (String) newMap.get("ENT_YN"));
	         pstmt.setString(12, (String) newMap.get("EMP_ID"));

	         result = pstmt.executeUpdate();
	      } catch(SQLException e) {
	         e.printStackTrace();
	      } finally {
	         close(pstmt);
	      }
	      
	      return result;
	   }

	   public int deleteEmployee(Connection con, String del_id) {
	      int result = 0;
	      PreparedStatement pstmt = null;
	      String sql = "DELETE FROM EMPLOYEE WHERE EMP_ID = ?";
	      
	      try {
	         pstmt = con.prepareStatement(sql);
	         pstmt.setString(1, del_id);
	         
	         result = pstmt.executeUpdate();
	         
	      } catch (SQLException e) {
	         e.printStackTrace();
	      } finally {
	         close(pstmt);
	      }
	      
	      return result;
	   }
}
