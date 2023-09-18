// DeleteRecord.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteRecord({ match }) {
  const history = useHistory();

  useEffect(() => {
    // Send a DELETE request to delete the record based on the route parameter
    axios.delete(`http://localhost:8000/api/records/delete/${match.params.recordId}/`)
      .then(() => {
        // Handle success, e.g., show a success message
        console.log('Record deleted successfully');
        history.push('/'); // Redirect to the records list after deletion
      })
      .catch((error) => {
        console.error('Error deleting record', error);
      });
  }, [match.params.id, history]);

  return (
    <div>
      <p>Deleting...</p>
    </div>
  );
}

export default DeleteRecord;
