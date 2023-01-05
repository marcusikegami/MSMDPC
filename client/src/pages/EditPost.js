import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPost = (user) => {
    // const [removePost] = useMutation(REMOVE_POST);

    const { _id: postId } = useParams();

    if(!user) {
        window.location.assign('/');
    }
    
    // const { loading, data } = useQuery(QUERY_POST, {
    //     variables: { _id: postId },
    // });
    // const handleDeletePost = () => {
    //         const confirmation = window.confirm('Are you sure you want to remove this post?');
    //         if(confirmation) {
    //             try {
    //                 removePost({variables: { _id: postId}});
    //                 window.location.href = `/`;
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     return;
    // };
    // const post = data?.post;
    // console.log(post);

        
        return (
        <main id='main'>
            {/* <button className="button" onClick={() => {window.history.back()}}>Back</button>
                <PostForm post={post} />
            <button className="button" onClick={() => handleDeletePost()}>Delete</button> */}
        </main>
    )
}

export default EditPost;