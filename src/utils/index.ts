export function daysAgoString(dateStr: string) {
  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(dateStr).getTime()) / 86400000
  );
  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "yesterday";
  }
  return `${daysAgo} days ago`;
}
