export const getUserRepositories = (username) => {
  try {
    return fetch(`https://api.github.com/users/${username}/repos`);
  } catch (error) {
    throw error
  }
}
