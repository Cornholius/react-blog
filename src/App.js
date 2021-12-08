import './App.css';
import { BlogContent } from './components/blogContent/blogContent';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

export function App() {
	return (
		<div className="App">
			
			<Header/>

			<main>
				<BlogContent/>
			</main>

			<Footer
				year={new Date().getFullYear()}
			/>
		</div>
	);
}
