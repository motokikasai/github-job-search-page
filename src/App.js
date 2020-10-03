import React from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';

const App = () => {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <h1># of job openings as of NOW: {jobs.length}</h1>
    </Container>
  );
};

export default App;
