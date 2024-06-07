import cx from "clsx";
import { useState } from "react";
import Button from "../../components/Button/Button";
import ListItemLayout from "./../../components/ListItemLayout/ListItemLayout";
import ListItem from "../../components/ListItem/ListItem";
import styles from "./ListContainer.module.css";
import Pagination from "./../../components/Pagination/Pagination";
import ListFilter from "../../components/ListFilter/ListFilter";

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  // const MAX_PAGE = getData().totalCount // 30 / 100 = 3.333  ==> 4page

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className={styles.button}>New Issue</Button>
        </div>

        <OpenClosedFilters />

        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
            }}
          />
        </ListItemLayout>

        <div className={styles.container}>
          {list.map((listItem, idx) => (
            <ListItem key={idx} badges={[{ color: "red", title: "Bug" }]} />
          ))}
        </div>
      </div>

      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
};

/** OpenClosedFilters 컴포넌트 */
const OpenClosedFilters = () => {
  const [isOpenMode, setIsOpenMode] = useState(true);
  /*
  const data = getData();
  const openData = data.filter((d) => d.state === "open");
  const closedData = data.filter((d) => d.state === "closed");
  */
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        onClick={() => setIsOpenMode(true)}
        selected={isOpenMode}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        onClick={() => setIsOpenMode(false)}
        selected={!isOpenMode}
      />
    </>
  );
};

/** open close 버튼 컴포넌트 */
const OpenClosedFilter = ({ size, state, onClick, selected }) => {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
};

export default ListContainer;
