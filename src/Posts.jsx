import React from 'react';

require('./Posts.less');

export default class Posts extends React.Component {
  
	render() {
    const posts = this.props.posts;
    
    if (!posts) return null;
    
		return (
      <div className='Posts'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Excerpt</th>
            </tr>
          </thead>
          
          <tbody>
            {posts.map(post => {
              return (
                <tr key={post.id}>
                  <td>
                    <a href={post.link}>{post.title.rendered}</a>
                  </td>
                  <td dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
		);
	}
}