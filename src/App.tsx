/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, gql } from "@apollo/client";
export const GET_BOOKS = gql`
  query Getbooks {
    books {
      title
    }
  }
`;
function App() {
  const { loading:_loading, error, data } = useQuery(GET_BOOKS);
   if (_loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        {data ? data?.books?.map((item: any) => (
          <p key={item?.title}>{item?.title}</p>
        )) : (<p> may no data found </p>)  }
      </div>
    </>
  );
}

export default App;
