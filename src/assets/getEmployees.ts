import axios from "axios";

const baseUrl =
  "https://www.wavemakeronline.com/run-d7hp8zj3gn/Leave_master/services";




const getEmployees = async () => {
    const response = await axios.get(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`,{
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data)=>{
        return data
    })
    // console.log(response);
    return response.data
}

const getAllEmployees = async () => {
    try {
      const endpoint = `https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`;
      console.log(endpoint);
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        console.log('success');
        return response.data;
      } else {
        console.log('status code error');
      }
    } catch (error) {
      console.log('Call error' + error);
    }
  };

export {getEmployees,getAllEmployees}