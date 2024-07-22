interface Department {
  deptId: number;
  name: string;
  budget: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  deptCode: string;
  location: string;
  tenantId: number;
}

interface EmployeeType {
  empId: number;
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  birthdate: string;
  jobTitle: string;
  deptId: number;
  username: string;
  password: string;
  role: string;
  managerId?: number | null;
  tenantId: number;
  picurl: string|null;
  email: string;
  phone: string;
  department: {
    deptId: number;
  name: string;
  budget: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  deptCode: string;
  location: string;
  tenantId: number;
  };
  employeeByManagerId?: EmployeeType | null;
}

export type { Department, EmployeeType };
