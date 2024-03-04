import * as React from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
// import products from "./products.json";

const MyTable = () => {
    const products =[
        {product_id:1, name:'John', lastname:'Manu', category:'Artist'},
        {id:2, name:'Ama', lastname:'Manu', category:'Artist'},
        {id:3, name:'Mike', lastname:'Benson', category:'Artist'},
    ]
    const _export = React.useRef(null);
  
    const _grid = React.useRef();
  
    const [page, setPage] = React.useState({
      skip: 0,
      take: 10,
    });
  
    const excelExport = () => {
      if (_export.current !== null) {
        // pass the products, instead the paginated data in the state.
        _export.current.save(products, _grid.current.columns);
      }
    };
  
    return (
      <div>
        <ExcelExport ref={_export} />
        <Grid
          data={products.slice(page.skip, page.skip + page.take)}
          onPageChange={(e) => setPage(e.page)}
          total={products.length}
          skip={page.skip}
          pageable={true}
          pageSize={page.take}
          ref={_grid}
        >
          <GridToolbar>
            <button
              title="Export Excel"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={excelExport}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="ProductID" title="Product ID" width="50px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="UnitsInStock" title="In stock" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </div>
    );
  };

  export default MyTable;