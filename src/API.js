const BASE_URL = "https://emoji-api.com/emojis";
const API_KEY = "access_key=db84f07a2ee1d3865941220a913cba2510f79b33";

export async function fetchAllEmojis() {
  const resp = await fetch(`${BASE_URL}?${API_KEY}`);
  const data = await resp.json();

  if (data) {
    return data;
  } else {
    return [];
  }
}

export async function fetchSearchEmojis(searchTerm) {
  const resp = await fetch(`${BASE_URL}?search=${searchTerm}&${API_KEY}`);
  const data = await resp.json();

  if (data) {
    return data;
  } else {
    return [];
  }
}
