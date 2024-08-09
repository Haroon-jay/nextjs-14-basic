// utility function to fetch data from an API endpoint

export async function fetchData(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, options);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
