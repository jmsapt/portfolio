
export const loadData = async () => {
    try {
        const response = await fetch("./transcript.json");
        return JSON.parse(await response.text());

    } catch (error) {
        console.error("Error loading YAML file:", error);
    }
};

