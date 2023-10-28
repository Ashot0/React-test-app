import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'Description' },
		{ id: 2, title: 'JavaScript', body: 'Description' },
		{ id: 3, title: 'JavaScript', body: 'Description' },
		{ id: 4, title: 'JavaScript', body: 'Description' },
		{ id: 5, title: 'JavaScript', body: 'Description' },
	])

	const [posts2, setPosts2] = useState([
		{ id: 1, title: 'Python', body: 'Description' },
		{ id: 2, title: 'Python', body: 'Description' },
		{ id: 3, title: 'Python', body: 'Description' },
		{ id: 4, title: 'Python', body: 'Description' },
		{ id: 5, title: 'Python', body: 'Description' },
	])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	// const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body,
		}
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	}

	return (
		<div className="App">
			<form>
				{/* Управляемый компонент */}
				<MyInput
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text"
					placeholder='Название поста'
				/>
				{/* Неуправляемый компонент */}
				<MyInput
					value={body}
					onChange={e => setBody(e.target.value)}
					type="text"
					placeholder='Описание поста'
				/>
				<MyButton onClick={addNewPost}>
					Создать пост
				</MyButton>
			</form>
			<PostList posts={posts} title="Посты про JS 1" />
			<PostList posts={posts2} title="Посты про Python 2" />
		</div>
	);
}

export default App;
