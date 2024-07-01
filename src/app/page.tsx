'use client';

import { useContext } from 'react';
import Home from './home/page';
import { ApiContext } from '../context/ManageApi';
import Loading from '../component/loading/Loading';
import Error from '../component/error/Error';

const Index = (): JSX.Element => {
  const context = useContext(ApiContext);

  if (!context) {
    return <Loading />;
  }

  const { data, loading, error } = context;

  const isDataValid = Array.isArray(data) && data.length > 0;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error && !isDataValid ? (
        <Error />
      ) : (
        <main>
          <Home />
        </main>
      )}
    </>
  );
};

export default Index;
