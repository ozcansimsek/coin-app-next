import { DataGrid } from "@mui/x-data-grid";
import CustomPagination from "components/CustomPagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { exchangesTableColumns } from "./exchangesTableColumns";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const ExchangesTable = () => {
  const {
    query: { page },
  } = useRouter();
  const router = useRouter();
  const queryPageNumber =
    isNaN(Number(page)) || Number(page) < 1 ? 1 : Number(page);

  const [perPage, setPerPage] = useState(50);
  const { data: exchangesData, error } = useSWR(
    `https://api.coingecko.com/api/v3/exchanges?per_page=${perPage}&page=${queryPageNumber}`,
    fetcher,
    { refreshInterval: 10000 }
  );

  const onPageChange = (page: number) => {
    router.push(`/exchanges/?page=${page + 1}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  useEffect(() => {
    router.prefetch(`/exchanges/?page=${Number(page) + 1}`);
  }, [page, router]);

  if (router.isReady)
    return (
      <DataGrid
        autoHeight
        loading={!exchangesData}
        error={error}
        sx={{ minHeight: "100vh" }}
        rows={exchangesData || []}
        columns={exchangesTableColumns}
        rowHeight={40}
        page={queryPageNumber - 1}
        pagination={true}
        paginationMode="server"
        pageSize={perPage}
        onPageSizeChange={(size) => setPerPage(size)}
        onPageChange={(page) => onPageChange(page)}
        rowCount={400}
        density="comfortable"
        isRowSelectable={() => false}
        disableSelectionOnClick
        rowBuffer={15}
        hideFooterSelectedRowCount={false}
        components={{
          Pagination: CustomPagination,
        }}
      />
    );
  else return null;
};

export default ExchangesTable;
