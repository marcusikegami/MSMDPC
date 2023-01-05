import PostPreview from '../components/PostPreview';

const PatientInfo = () => {
    // let { data } = useQuery(QUERY_POSTS);
    // let posts = data?.posts || [];
    // let GetPdfs = () => {
    //     let { data } = useQuery(QUERY_PI_PDFS);
    //     let pdfs = data?.pipdfs || [];
    //     return pdfs;
    // }
    // let [removePdf] = useMutation(REMOVE_PDF);

    return (
        <main>
            <div className="logo-links">
                <a href="https://orthoinfo.aaos.org/"><img alt="orthoinfo.org logo" src='https://scholl-static-images.s3.us-west-2.amazonaws.com/slslogow.png'/></a>
            </div>
            <div id='uploads-wrapper'>
            {/* { pdfs && pdfs.map(upload => {
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
                })} */}
            </div>
            <div id='posts-wrapper'>
                {/* {posts.map(post => {
                    if(post.category === "Information about surgery with Dr. Scholl" || post.category === "Patient Education" || post.category === "Knee" || post.category === "Shoulder") {
                        return (
                            <PostPreview post={post} />
                        )
                    }
                    return null;
                })}; */}
            </div>
        </main>
    )
};

export default PatientInfo; 


// ortho info specific links to 