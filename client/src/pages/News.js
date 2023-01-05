
import PostPreview from '../components/PostPreview';

const News = () => {
    // let { data } = useQuery(QUERY_POSTS);
    // let posts = data?.posts || [];

    return (
        <main>
            <div id='posts-wrapper'>
                {/* {posts && posts.map(post => {
                    if(post.category === "News and Updates") {
                        return (
                           <PostPreview key={post._id} post={post} /> 
                        )
                    }
                    return null;
                }
                )} */}
            </div>
        </main>
    )
};

export default News;
