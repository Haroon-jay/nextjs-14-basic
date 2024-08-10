import React from "react";
import CardWrapper from "@/components/CardWrapper";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import ReloadButton from "@/components/ReloadButton";

interface Column<T> {
  key: string;
  label: string;
  customCell?: (row: T, i?: number) => React.ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  title: string;
  showReloadButton?: boolean;
  cardWrapperProps?: CardWrapperProps;
}

const CustomTable = <T extends object & { id?: number | string }>({
  columns,
  data,
  title,
  showReloadButton = true,
  cardWrapperProps = {},
}: Props<T>) => {
  return (
    <CardWrapper {...cardWrapperProps}>
      <div className="overflow-x-auto max-w-[90vw]">
        <Table className="min-w-full">
          <TableCaption>{title}</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((column, i) => (
                <TableHead
                  key={column.key}
                  className={cn({
                    "w-[100px]": i === 0,
                    "text-right": i === columns.length - 1,
                  })}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={row.id}>
                {columns.map((column, i) => (
                  <TableCell
                    key={column.key || i}
                    className={cn({
                      "font-medium": i === 0,
                      "text-right": i === columns.length - 1,
                    })}
                  >
                    {column.customCell
                      ? column.customCell(row, i)
                      : (row[column.key as keyof T] as React.ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {showReloadButton && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={columns.length} className="text-right">
                  <ReloadButton />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </CardWrapper>
  );
};

export default CustomTable;
