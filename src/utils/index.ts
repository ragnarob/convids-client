export function daysAgoString(dateStr: string) {
  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(dateStr).getTime()) / 86400000
  );
  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "yesterday";
  } else if (daysAgo < 60) {
    return `${daysAgo} days ago`;
  } else {
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo === 1) {
      return "1 month ago";
    } else if (monthsAgo < 24) {
      return `${monthsAgo} months ago`;
    }

    return `${Math.floor(monthsAgo / 12)} years ago`;
  }
}
