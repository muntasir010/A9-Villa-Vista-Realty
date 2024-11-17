const getStoredResidential = () => {
    const storedResidential = localStorage.getItem('residential-apply');
    if (storedResidential) {
        return JSON.parse(storedResidential);
    }
    return [];
}


const saveResidential = (id) => {
    const storedResidential = getStoredResidential();
    const exists = storedResidential.find(residentialId => residentialId === id);
    if (!exists) {
        storedResidential.push(id);
        localStorage.setItem('residential-apply', JSON.stringify(storedResidential));
    }
}

export { getStoredResidential, saveResidential };