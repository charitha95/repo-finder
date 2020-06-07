const headers = { 'Content-Type': 'text/plain' };

/**
 * Function represents api call to get markdown file text.
 * @param {String} fullpath path to user's repository
 */
export const getRepoReadme = (fullpath) => {
  try {
    return fetch(`https://raw.githubusercontent.com${fullpath}/master/README.md`, { ...headers });
  } catch (error) {
    throw error
  }
}