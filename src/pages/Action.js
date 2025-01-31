import React from 'react';
import './Action.css';
import  { useState, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';

const Action = () => {
  // Mảng dữ liệu ví dụ
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Mặc định là 10 mục mỗi trang
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { id: 1, device:'Light',Action:'off',  time: '10:00' ,date:'23/8'},
    { id: 2, device:'Light',Action:'on',  time: '9:00' ,date:'23/8'},
    { id: 3, device:'Fan',Action:'off',  time: '8:00' ,date:'23/8'},
    { id: 4, device:'Fan',Action:'on',  time: '7:00' ,date:'23/8'},
    { id: 5, device:'AC',Action:'on',  time: '6:00' ,date:'23/8'},
    { id: 6, device:'AC',Action:'off',  time: '5:00' ,date:'23/8'},
    { id: 7, device:'AC',Action:'on',  time: '4:00' ,date:'23/8'},
  ];

  const columns = useMemo(() => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Device', accessor: 'device' },
    { Header: 'Action', accessor: 'Action' },
    
    { Header: 'Time', accessor: 'time' },
    {Header:'Date',accessor:'date'}
  ], []);

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: filteredData }, useSortBy);

  // Tính toán số trang và dữ liệu hiện tại của trang
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentRows = rows.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0); // Reset về trang đầu tiên khi thay đổi số lượng mục mỗi trang
  };

  return (
    
    
    

    <div className="table-container">
      <div className="table-title">Action Hisory</div>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <input
        type="Date"
        placeholder="search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      

      
      <table {...getTableProps()} className="table">
        <thead className="table-header">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table-cell">
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {currentRows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="table-cell">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-controls">
        <label htmlFor="items-per-page">Rows per page:</label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="items-per-page-select"
        >
          <option value={5}>05</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
    
    
  );
}

export default Action;
