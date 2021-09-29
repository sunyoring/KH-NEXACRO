package com.kh.common;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

public class NexaDatasetCom {

	public DataSet addDataset(List list, String strDataSet) {
		int rowCount = 0;

		int list_size = list.size();

		DataSet ds = new DataSet(strDataSet);
		if (list.size() > 0) {
		//	System.out.println("list.size()" + list.size());

			for (int i = 0; i < list.size(); i++) {
				if (list.get(i) != null) {
					System.out.println("list.get(i" + list.get(i));

					Map newM = (Map)list.get(i);
					if (i == 0) {
						for (Iterator it = newM.keySet().iterator(); it.hasNext();) {

							String colName = String.valueOf(it.next()).toUpperCase();
							int colType = DataTypes.findType(newM.get(colName));

							ds.addColumn(colName, colType, 256);
						}

					}
					rowCount = ds.newRow();

					int colSize = newM.size();
					for (int j = 0; j < colSize; j++) {
						ds.set(rowCount, ds.getColumn(j).getName(), newM.get(ds.getColumn(j).getName()));
					}
				}

			}

		}

		return ds;
	}
}
