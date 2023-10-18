export function checkpath(path: string) {
  if (path === "/") {
    return "Home";
  } else if (path.includes("projects")) {
    return "Projects";
  }

  return "Source";
}
