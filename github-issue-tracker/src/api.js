const API_URL = 'https://api.github.com';

export const fetchAllIssuesForOrganization = () => {
  return fetch(`${API_URL}/orgs/org/issues`)
    .then(res => res.json());
};