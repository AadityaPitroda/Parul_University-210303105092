import axios from 'axios';

const authenticate = async () => {
  try {
    const response = await axios.post('http://20.204.56.104/test/auth', {
      companyName: "goMart",
      clientId: "your_client_id_here",
      clientSecret: "your_client_secret_here",
      ownerName: "Rahul",
      ownerEmail: "rahul@abc.edu",
      rollNo: "1"
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default authenticate;
