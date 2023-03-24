export const AdminSearchResult = () => {

    const handleClickFilterButton = () => {
        document.querySelector('.aside-search').style.display = 'block';
    };

    return (
        <>
            <main className="main"> 
            <button type="button" onClick={handleClickFilterButton} className="btn btn-primary filter-button-item">
                    <svg width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.5C1.5 1.22386 1.72386 1 2 1H14C14.2761 1 14.5 1.22386 14.5 1.5V3.5C14.5 3.62352 14.4543 3.74267 14.3716 3.83448L10 8.69187V13.5C10 13.7152 9.86228 13.9063 9.65811 13.9743L6.65811 14.9743C6.50564 15.0252 6.33803 14.9996 6.20764 14.9056C6.07726 14.8116 6 14.6607 6 14.5V8.69187L1.62835 3.83448C1.54572 3.74267 1.5 3.62352 1.5 3.5V1.5Z" />
                    </svg>
                    Фильтр
                </button>
            </main>
        </>
    )    
}

export default AdminSearchResult;