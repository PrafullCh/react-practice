const initState = {
    posts:[
        {id: 1,title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, delectus.", body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, minus. Nemo voluptates libero quos, quas laboriosam dignissimos. Excepturi, similique placeat deserunt mollitia laudantium quibusdam animi perferendis consequatur. Totam tempore velit ut aliquid quam. Natus, culpa doloremque. Alias quibusdam recusandae itaque?"},
        {id: 2,title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, delectus.", body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, minus. Nemo voluptates libero quos, quas laboriosam dignissimos. Excepturi, similique placeat deserunt mollitia laudantium quibusdam animi perferendis consequatur. Totam tempore velit ut aliquid quam. Natus, culpa doloremque. Alias quibusdam recusandae itaque?"},
        {id: 3,title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, delectus.", body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, minus. Nemo voluptates libero quos, quas laboriosam dignissimos. Excepturi, similique placeat deserunt mollitia laudantium quibusdam animi perferendis consequatur. Totam tempore velit ut aliquid quam. Natus, culpa doloremque. Alias quibusdam recusandae itaque?"}
    ]
}

const rootReducer=(state=initState,action)=>{
    // console.log(action);
    if(action.type==="DELETE_POST")
    {
        let newPost = state.posts.filter(post=>{return action.id!==post.id});
        return {
            ...state,
            posts:newPost
        }
    }
    return state;
}

export default rootReducer;