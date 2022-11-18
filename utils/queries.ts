export const listBlogs: any = async () => {
  const response = await fetch("/api/blogs/list");
  const blogs = await response.json();
  if (blogs.status) {
    return blogs.data;
  }
  return {};
};

export const loadIntakes: any = async () => {
  const response = await fetch("/api/accounts/list");
  const intakes = await response.json();
  if (intakes.status) {
    return intakes.data;
  }
  return {};
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
