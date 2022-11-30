export const getDomain = (host: string) => {
  const _domain: any = host?.split(":", 1).pop();
  const domain = _domain.replace("www.", "");
  return domain;
};

export const loadFaculties = async (domain: string) => {
  const response = await fetch(`/api/faculties/${domain}/list`);
  const faculties = await response.json();
  return faculties;
};

export const loadDepartments = async (domain: string) => {
  const response = await fetch(`/api/departments/${domain}/list`);
  const departments = await response.json();
  return departments;
};

export const loadStudents = async (domain: string) => {
  const response = await fetch(`/api/students/${domain}/list`);
  const students = await response.json();
  return students;
};

export const loadLecturers = async (domain: string) => {
  const response = await fetch(`/api/lecturers/${domain}/list`);
  const lecturers = await response.json();
  return lecturers;
};

export const loadUsers: any = async () => {
  const response = await fetch("/api/accounts/listusers");
  const users = await response.json();
  if (users.status) {
    return users.data;
  }
  return {};
};

export const getUserProfile: any = async (accid: string) => {
  const response = await fetch(`/api/accounts/${accid}/profile`);
  const user = await response.json();
  if (user.status) {
    return user.data;
  }
  return {};
};
