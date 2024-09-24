import React from 'react';
import '../components/home.css'

function Home(){
    return(
        <section>
            <header className='NavigationBar'>
                <h1 className='title'>My To-Do </h1>
                <button className='addButton'>+ Add Task</button>
            </header>
            <section className='principal'>
                <div className='FilterableTasksList'>
                    <h2>To-Do List</h2>
                    
                </div>
                <div className='TaskDetailsView'>
                    <h2>hola</h2>
                </div>
            </section>
        </section>
    )
}

export default Home;