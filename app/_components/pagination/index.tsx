import Image from "next/image";

import { twMerge } from "tailwind-merge";

import { useLocale } from "@/_customHooks/useLocale";

import ArrowLeft from "../colorSVG/ArrowLeft";
import ArrowRight from "../colorSVG/ArrowRight";
import PageButton from "./PageButton";

export type PaginationPropsType = {
  totalPages: number;
  handlePageChange?: (page: number) => void;
  currentPage?: number;
};

const Pagination = ({ totalPages, handlePageChange, currentPage = 1 }: PaginationPropsType) => {
  const { locale } = useLocale();

  const nextPage = () => {
    if (totalPages < currentPage + 4) {
      handlePageChange && handlePageChange(totalPages);
    } else {
      handlePageChange && handlePageChange(currentPage + 4);
    }
  };

  return (
    <div className="flex gap-2">
      {currentPage > 1 && (
        <PageButton extraClassName="text-primary-06" onClick={() => handlePageChange && handlePageChange(currentPage - 1)}>
          {locale === "/en" ? <ArrowLeft className="mx-auto size-4" /> : <ArrowRight className="mx-auto size-4" />}
        </PageButton>
      )}
      {currentPage <= 4 ? (
        Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(0, 5)
          .map((page) => {
            return (
              <PageButton
                extraClassName={twMerge(page === currentPage && "bg-primary-06 text-white")}
                key={page}
                onClick={() => handlePageChange && handlePageChange(page)}
              >
                {page}
              </PageButton>
            );
          })
      ) : (
        <PageButton extraClassName="text-black" onClick={() => handlePageChange && handlePageChange(1)}>
          1
        </PageButton>
      )}
      {currentPage > 4 && (
        <PageButton onClick={() => handlePageChange && handlePageChange(currentPage - 4)}>
          <Image src="/threePoints.svg" className="m-auto" width={14} height={3} alt="three-points" />
        </PageButton>
      )}
      {currentPage > 4 &&
        Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(currentPage - 3, totalPages == currentPage + 2 ? currentPage + 1 : currentPage + 2)
          .map((page) => {
            return (
              <PageButton
                extraClassName={twMerge(page === currentPage && "bg-primary-06  text-white")}
                key={page}
                onClick={() => handlePageChange && handlePageChange(page)}
              >
                {page}
              </PageButton>
            );
          })}
      {currentPage + 3 < totalPages && totalPages !== 5 && (
        <PageButton onClick={() => nextPage()}>
          <Image src="/threePoints.svg" className="m-auto" width={14} height={3} alt="three-points" />
        </PageButton>
      )}
      {currentPage + 1 < totalPages && totalPages > 5 && (
        <PageButton onClick={() => handlePageChange && handlePageChange(totalPages)}>{totalPages}</PageButton>
      )}
      {currentPage !== totalPages && (
        <PageButton extraClassName="text-primary-06" onClick={() => handlePageChange && handlePageChange(currentPage + 1)}>
          {locale === "/en" ? <ArrowRight className="mx-auto size-4" /> : <ArrowLeft className="mx-auto size-4" />}
        </PageButton>
      )}
    </div>
  );
};

export default Pagination;
