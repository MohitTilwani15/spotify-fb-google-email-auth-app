function extractTokenFromRequestCookie(cookies) {
  return cookies.substring(
    cookies.lastIndexOf('spotify-access-token=') + 21,
    cookies.lastIndexOf('spotify-refresh-token=') - 2
  );
}

module.exports = {
  extractTokenFromRequestCookie,
};
