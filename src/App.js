import React, { useState } from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import Job from './components/Job';
import { Container } from 'react-bootstrap';

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
};

export default App;
