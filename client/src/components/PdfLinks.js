const PdfLinks = () => {



    const handleDeletePdf = async (url) => {
        
    };

    return (
        <main>
            {/* <div id='uploads-wrapper'>
            {pdfs.map(upload => {
                let Url = upload.url;
                console.log(Url);
                    return (
                        
                        <div key={upload.url} className='upload'>
                            {Auth.loggedIn() && (
                                <button onClick={() => {return handleDeletePdf(upload.url)}}>Delete File</button>
                            )}
                            <a href={Url} target='__blank' download className='upload-link'>{upload.pdfname}.pdf</a>
                            <p className='upload-date'>{upload.createdAt}</p>
                        </div>
                    )
                })}
            </div> */}
        </main>
    )
};

export default PdfLinks;