import React from 'react';
import './Action.css';
import  { useState, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';

const Data = () => {
  // Mảng dữ liệu ví dụ
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Mặc định là 10 mục mỗi trang
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { id: 1, temperature: 23, humidity: 45, light: 300, time: '10:00 08/23/2024'},
    { id: 2, temperature: 25, humidity: 50, light: 200, time: '09:00 25/8/2024'},
    { id: 3, temperature: 30, humidity: 46, light: 400, time: '08:00 23/8/2024'},
    { id: 4, temperature: 23, humidity: 90, light: 500, time: '07:00 22/8/2024'},
    { id: 5, temperature: 26, humidity: 88, light: 100, time: '06:00 21/8/2024'},
    { id: 6, temperature: 21, humidity: 87, light: 200, time: '05:00 20/8/2024'},
    { id: 7, temperature: 19, humidity: 83, light: 100, time: '04:00 19/8/2024'},
  ];

  const columns = useMemo(() => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Teperature (℃)', accessor: 'temperature' },
    { Header: 'Humidity (%)', accessor: 'humidity' },
    { Header: 'Light (lux)', accessor: 'light' },
    { Header: 'Time', accessor: 'time' },
  
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
    setCurrentPage(0);
  };

  return (
    
    
    

    <div className="table-container">
      <div className="table-title">Datasensor</div>
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

export default Data;
