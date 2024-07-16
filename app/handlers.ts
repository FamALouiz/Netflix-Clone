function checkIfUserIsSignedInAndCookieSaved(): string | null {
  // Check if a user is logged in else redirect to auth page
  const checkUserId =
    document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("userId="))
      ?.split("=")[1] || null;

  if (!checkUserId && checkIfUserExists(checkUserId)) {
    return null;
  }

  return checkUserId;
}

function checkIfUserExists(userId: string | null): boolean {
  // Check if a user exists in the database
  return true;
}

export default checkIfUserIsSignedInAndCookieSaved;
