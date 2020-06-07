const headers = { 'Content-Type': 'text/plain' };

export const getRepoReadme = (fullpath) => {
  try {
    return fetch(`https://raw.githubusercontent.com/${fullpath}/master/README.md`, { ...headers });
  } catch (error) {
    throw error
  }
}



