import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { Fragment, ReactNode } from "react";

type FTableColumnProps<T> = {
  labelHeader: string;
  keyColumnIdentifier?: keyof T;
  colRender?: (value: any, row: T) => ReactNode;
};

type FTableProps<T> = {
  dataList: T[];
  keyIdentifier: keyof T;
  children: ReactNode;
  isLoading?: boolean;
  shadow?: "sm" | "md" | "lg" | "none" | undefined;
};

const FTable = <T,>({
  dataList,
  keyIdentifier,
  children,
  isLoading,
  shadow = "sm",
}: FTableProps<T>) => {
  const columns = React.Children.toArray(children);

  return (
    <Table shadow={shadow} aria-label="Example static collection table">
      <TableHeader>
        {columns.map((column, index) => {
          const col = column as React.ReactElement<FTableColumnProps<T>>;
          const isFirstColumn = index === 0;
          const isLastColumn = index === columns.length - 1;

          return (
            <TableColumn
              key={index}
              className={
                isFirstColumn
                  ? "rounded-l-lg"
                  : isLastColumn
                    ? "rounded-r-lg"
                    : ""
              }
            >
              {col.props.labelHeader}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody
        loadingContent={<Spinner label="Loading..." />}
        isLoading={isLoading}
      >
        {dataList.map((item) => (
          <TableRow key={item[keyIdentifier] as React.Key}>
            {columns.map((column, colIndex) => {
              const col = column as React.ReactElement<FTableColumnProps<T>>;
              return (
                <TableCell key={colIndex} className="text-xs pl-2">
                  {col.props.colRender
                    ? col.props.colRender(
                        item[col.props.keyColumnIdentifier as keyof T],
                        item
                      )
                    : typeof item[col.props.keyColumnIdentifier as keyof T] ===
                          "string" ||
                        typeof item[
                          col.props.keyColumnIdentifier as keyof T
                        ] === "number" ||
                        typeof item[
                          col.props.keyColumnIdentifier as keyof T
                        ] === "boolean"
                      ? String(item[col.props.keyColumnIdentifier as keyof T])
                      : null}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const FTableColumn = <T,>({
  labelHeader,
  keyColumnIdentifier,
  colRender,
}: FTableColumnProps<T>) => null;

export { FTable, FTableColumn };
