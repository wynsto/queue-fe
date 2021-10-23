// A mock function to mimic making an async request for data
export function createQueue(name, accessToken) {
    const data = { fullname: name };

    return fetch('https://api.queu.eu/queues', {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

export function getQueues(accessToken) {
    return fetch('https://api.queu.eu/queues', {
      method: 'GET', // or 'PUT'
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      return data.queues
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }