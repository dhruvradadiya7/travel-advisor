import Header from 'components/shared/Header';
import { ReactComponent as DownArrowbtn } from 'icons/down-arrow.svg';
import { useEffect, useState } from 'react';

const Guidelines = () => {
  const [visible, setVisible] = useState(true);
  const [getdetail, setDetail] = useState();
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];
// const [data, setData] = useState([]);
//   async function getData() {
//     const response = await fetch('https://restcountries.com/v3.1/all');
//     const myJson = await response.json();
//     setData(...myJson);
//   }
//   useEffect(() => {
//     getData();
//   }, []);
 
  function getDetailcard(num) {
    setDetail(num);
    setVisible(!visible);
  }
  return (
    <div className="guidelines-body">
      <Header />
      <h1>Guidelines</h1>
      {/* <div className="users">
        {data.map((user) => (
          <div className="card">
            <div className="container">
              <div className="cnt-code">
                <h1><b> { user.name } </b></h1>
              </div>
              <div className="arrowbtn">
                <DownArrowbtn onClick={() => getDetailcard(user.id)} />
              </div>
            </div>
            {getdetail === user.id ? visible : !visible && (
            <div>
              <h4 className="detail-card">{user.id}</h4>
            </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Guidelines;