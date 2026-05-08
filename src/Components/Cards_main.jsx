function Cards(){
    let arr = [
        {id:1,content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Doloremque vitae aspernatur, cum at repudiandae eum, iusto nesciunt vero cumque consequatur sint? Architecto, excepturi sequi animi voluptatum reprehenderit sed."},
        {id:2,content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Doloremque vitae aspernatur, cum at repudiandae eum, iusto nesciunt vero cumque consequatur sint? Architecto, excepturi sequi animi voluptatum reprehenderit sed."},
        {id:3,content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Doloremque vitae aspernatur, cum at repudiandae eum, iusto nesciunt vero cumque consequatur sint? Architecto, excepturi sequi animi voluptatum reprehenderit sed."}
    ]
    let result = arr.map((item,ind)=>{
        return(
         <div className={`cards card${item.id}`} key={ind}>
            <div className="top">
                    <h1>{item.id}</h1>
                </div>

                <div className="content">

                    <p>
                        {item.content}
                    </p>

                    <button className="btn">
                        Read More
                    </button>
                    </div>
        </div>
    )
    }
    );
    return(
        <div>
            <div className="container">
                {result}
            </div>
        </div>
    )
    
}
export default Cards;