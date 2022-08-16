import Tables from "../components/Tables";
import SearchBar from "../components/SearchBar";
import "./NotesPage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const headings = ["Name", "Code", "Course", "Type", "Link"];

export default function NotesPage() {
  const [data, setData] = useState(() => []);
  const [visibleData, setVisibleData] = useState(() => []);
  const [searchText, setSearchText] = useState(() => "H");

  const filterData = () => {
    if (searchText == "") {
      setVisibleData(data);
    } else {
      setVisibleData(
        data.filter(
          (each) =>
            each.name.toUpperCase().includes(searchText) ||
            each.code.toUpperCase().includes(searchText) ||
            each.course.toUpperCase().includes(searchText) ||
            each.type.toUpperCase().includes(searchText)
        )
      );
    }
  };

  const fetchData = async () => {
    await axios
      .get(`https://college-cup.vercel.app/docs/getAll`, {})
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.dir("error occured catched", e));
  };


  useEffect(() => {
    fetchData();
    filterData();
  }, [searchText, data]);

  return (
    <div className="container-xxl">
      <header>
        <h1> Notes : </h1>
        <SearchBar setSearchText={setSearchText} />
      </header>
      <Tables headings={headings} data={visibleData} />
    </div>
  );
}
