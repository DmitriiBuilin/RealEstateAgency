export const MapComponent = () => {
    return (
        <>
            <main className="main">
                <div className="map-wrp">                    
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92943.19147148589!2d30.708897365189113!3d36.90698723255627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1672493457463!5m2!1sen!2str" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </main>
        </>
    )
}

export default MapComponent;