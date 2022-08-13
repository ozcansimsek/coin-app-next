import { DataGrid } from "@mui/x-data-grid";
import CustomPagination from "components/CustomPagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { globalCurrencyCode } from "store/slices/globalCurrencyCodeSlice";
import useSWR from "swr";
import { coinsTableColumns } from "./coinsTableColumns";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CoinsTable = () => {
  const {
    query: { page },
  } = useRouter();
  const router = useRouter();
  const selectedCurrency = useAppSelector(globalCurrencyCode);
  const queryPageNumber =
    isNaN(Number(page)) || Number(page) < 1 ? 1 : Number(page);

  const [perPage, setPerPage] = useState(50);
  const { data: marketData, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=${perPage}&page=${queryPageNumber}&sparkline=true&price_change_percentage=1h,24h,7d`,
    fetcher,
    { refreshInterval: 10000 }
  );

  const onPageChange = (page: number) => {
    router.push(`/?page=${page + 1}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  useEffect(() => {
    router.prefetch(`/?page=${Number(page) + 1}`);
  }, [page, router]);

  if (router.isReady)
    return (
      <DataGrid
        autoHeight
        loading={!marketData}
        error={error}
        sx={{ minHeight: "100vh" }}
        rows={marketData || []}
        columns={coinsTableColumns(selectedCurrency)}
        rowHeight={40}
        page={queryPageNumber - 1}
        pagination={true}
        paginationMode="server"
        pageSize={perPage}
        onPageSizeChange={(size) => setPerPage(size)}
        onPageChange={(page) => onPageChange(page)}
        rowCount={10000}
        density="comfortable"
        isRowSelectable={() => false}
        disableSelectionOnClick
        rowBuffer={15}
        hideFooterSelectedRowCount={false}
        components={{
          Pagination: CustomPagination,
        }}
        sortingOrder={["desc", "asc", null]}
      />
    );
  else return null;
};

export default CoinsTable;
