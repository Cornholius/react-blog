import { Component } from 'react'
import { postsFromBackend } from '../../shared/projectData'
import './blogContent.css'
import { BlogCard } from './components/blogCard'

export class BlogContent extends Component {

    state = {
        showBlog: true
    }

    blogPosts = postsFromBackend.map((item) => {
        return(
            <BlogCard
                id={item.id}
                title={item.title}
                description={item.description}
            />
        )
    })
    
    toggleBlog = () => {
        this.setState({showBlog: !this.state.showBlog})
    }

    render() {
        return(
            <>
                <button onClick={this.toggleBlog}>{this.state.showBlog ? 'Скрыть блог' : 'Показать блог'}</button>

                {
                    this.state.showBlog ?
                    <>
                    <h1>Simple Blog</h1>
                    <div className="posts">
                        
                        {this.blogPosts}
        
                    </div>
                </>
                : null
                }
            </>
        )
    }
    
}