import {createSlice} from '@reduxjs/toolkit';

const initialState = {value:{
    "empId": 1,
    "firstname": "Eric",
    "lastname": "Lin",
    "street": "45 Houston Street",
    "city": "New York",
    "state": "NY",
    "zip": "10106",
    "birthdate": "1973-10-21",
    "jobTitle": "Product Manager",
    "deptId": 1,
    "username": "eric.lin",
    "password": "wavemaker",
    "role": "admin",
    "managerId": null,
    "tenantId": 1,
    "picurl": "",
    "email": "eric.lin@acme.com",
    "phone": "202-555-0116",
    "department": {
      "deptId": 1,
      "name": "Engineering",
      "budget": 1936760,
      "q1": 445455,
      "q2": 522925,
      "q3": 426087,
      "q4": 542293,
      "deptCode": "Eng",
      "location": "San Francisco",
      "tenantId": 1
    },
    "employeeByManagerId": null
  }};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {selectUser} = employeeSlice.actions;

export default employeeSlice.reducer;
