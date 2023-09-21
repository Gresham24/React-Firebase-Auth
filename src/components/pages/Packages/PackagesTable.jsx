import React, { useState } from 'react'
// import { AuthContext } from '../auth/AuthContext'
import PackagesTableHead from './PackagesTableHead'
import PackagesTableBody from './PackagesTableBody'



function PackagesTable() {
  // const [tableData, setTableData] = useState(tableData1);

  const columns = [
      { label: "NAME", accessor: "packageName" },
      { label: "PRICE (R)", accessor: "packagePrice" },
      { label: "TYPE", accessor: "packageType" },
      { label: "START DATE", accessor: "packageStartDate" },
      { label: "END DATE", accessor: "packageStartDate" },
      { label: "DATE CREATED", accessor: "Created" },
  ];
  return (
      <>
          <table className="table">
              {/* <PackagesTableHead columns={columns} />
              <PackagesTableBody columns={columns} tableData={tableData} /> */}
          </table>
      </>
  );
}

export default PackagesTable