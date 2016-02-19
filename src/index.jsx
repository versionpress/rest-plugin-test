import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';
import CreatePost from './CreatePost';
import * as WpApi from './WpApi';

export class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.createPost = this.createPost.bind(this);
  }
  
  componentDidMount() {
    this.fetchPosts();
  } 

	render() {
		return (
      <div>
        <h1>Simple React + Wordpress REST API plugin</h1>
        <CreatePost onSubmit={this.createPost} />
        <Posts posts={this.state.posts} />
      </div>
		);
	}
  
  fetchPosts() {
    this.setState({ loading: true });

    WpApi
      .get('wp/v2/posts')
      .end((err: any, res: request.Response) => {
        if (err) {
          this.setState({
            posts: [],
            message: 'Error',
            loading: false
          });
        } else {
          this.setState({
            posts: res.body,
            message: null,
            loading: false
          })
        }
      });
  }
  
  createPost(values) {
    WpApi
      .post('wp/v2/posts')
      .send(values)
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        this.fetchPosts();
      })
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));