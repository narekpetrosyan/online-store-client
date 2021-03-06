import { observer } from "mobx-react-lite";
import React from "react";
import { Pagination } from "react-bootstrap";
import { useStore } from "../../hooks/useStore";

export const Pages = observer(() => {
  const { device } = useStore();
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});
