import React, { Component } from 'react'
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    handleCommentSubmit = (comment) => {
        // console.log(comment);
        if (!comment) return
        if (!comment.username) { return alert('请输入用户名'); }
        if (!comment.content) { return alert('请输入内容'); }
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleCommentSubmit} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp