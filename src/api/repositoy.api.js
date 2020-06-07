/**
 * Function represents api call to get user repositories.
 * @param {String} username user's git username
 */
export const getUserRepositories = (username) => {
  try {
    return fetch(`https://api.github.com/users/${username}/repos`);
  } catch (error) {
    throw error
  }
}